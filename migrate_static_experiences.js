// migrate_static_experiences.js
// Usage: node migrate_static_experiences.js
// This script migrates static experiences from src/data/experiences.ts to your Supabase table.
// Make sure you have 'node-fetch' and '@supabase/supabase-js' installed: npm install node-fetch@2 @supabase/supabase-js

const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

const supabaseUrl = 'https://bamhfskamsaebzurzymf.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJhbWhmc2thbXNhZWJ6dXJ6eW1mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE5MTgyODQsImV4cCI6MjA2NzQ5NDI4NH0.Mo5JiGb0fCXIlFAKCWzACQ7_p65BmYV5SEPPIvRzJCg';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const experiencesPath = path.join(__dirname, 'src', 'data', 'experiences.ts');

function extractExperiences() {
  const file = fs.readFileSync(experiencesPath, 'utf-8');
  const match = file.match(/export const experiences: Experience\[\] = (\[.*\]);/s);
  if (!match) throw new Error('Could not find experiences array in file.');
  // eslint-disable-next-line no-eval
  const arr = eval(match[1].replace(/\b(ar|en):/g, '"$1":'));
  return arr.map(exp => ({
    id: exp.id,
    title: exp.title.en,
    description: exp.description.en,
    price: exp.price,
    location: exp.location.en,
    duration: exp.duration.en,
    image: exp.image,
    gallery: exp.gallery,
    whatsapp: exp.whatsapp,
    featured: exp.featured,
    pdfUrl: exp.pdfUrl || '',
    region: exp.region || '',
  }));
}

async function migrate() {
  const experiences = extractExperiences();
  for (const exp of experiences) {
    const { error } = await supabase.from('experiences').upsert(exp, { onConflict: 'id' });
    if (error) {
      console.error('Failed to insert:', exp.title, error.message);
    } else {
      console.log('Inserted:', exp.title);
    }
  }
  console.log('Migration complete.');
}

migrate(); 