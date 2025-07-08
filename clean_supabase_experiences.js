// clean_supabase_experiences.js
// Usage: node clean_supabase_experiences.js
// This script will clean up your Supabase 'experiences' table to use only English fields and correct types.
// Make sure you have '@supabase/supabase-js' installed: npm install @supabase/supabase-js

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://bamhfskamsaebzurzymf.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJhbWhmc2thbXNhZWJ6dXJ6eW1mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE5MTgyODQsImV4cCI6MjA2NzQ5NDI4NH0.Mo5JiGb0fCXIlFAKCWzACQ7_p65BmYV5SEPPIvRzJCg';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

function getEnglish(val) {
  if (typeof val === 'string') return val;
  if (val && typeof val === 'object' && val.en) return val.en;
  return '';
}

function parseGallery(val) {
  if (Array.isArray(val)) return val;
  if (typeof val === 'string') {
    try {
      // Try to parse as JSON array
      const arr = JSON.parse(val);
      if (Array.isArray(arr)) return arr;
    } catch {
      // Try to split by comma
      return val.split(',').map(s => s.trim()).filter(Boolean);
    }
  }
  return [];
}

function toString(val) {
  if (typeof val === 'string') return val;
  if (typeof val === 'number') return val.toString();
  return '';
}

async function clean() {
  const { data, error } = await supabase.from('experiences').select('*');
  if (error) {
    console.error('Failed to fetch experiences:', error.message);
    return;
  }
  for (const exp of data) {
    const cleaned = {
      title: getEnglish(exp.title),
      description: getEnglish(exp.description),
      location: getEnglish(exp.location),
      duration: getEnglish(exp.duration),
      gallery: parseGallery(exp.gallery),
      whatsapp: toString(exp.whatsapp),
    };
    const { error: updateError } = await supabase
      .from('experiences')
      .update(cleaned)
      .eq('id', exp.id);
    if (updateError) {
      console.error('Failed to update', exp.id, updateError.message);
    } else {
      console.log('Cleaned', exp.id, cleaned.title);
    }
  }
  console.log('Cleanup complete.');
}

clean(); 