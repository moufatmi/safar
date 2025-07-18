import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import { SupabaseExperience } from '../types';
import { Plus, Trash2, Edit, Loader2, LogOut } from 'lucide-react';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { slugify } from '../utils/slugify';

const initialForm: Omit<SupabaseExperience, 'id'> = {
  slug: '',
  title: '',
  description: '',
  price: 0,
  location: '',
  duration: '',
  image: '',
  gallery: [],
  whatsapp: '',
  featured: false,
  pdfUrl: '',
  region: '',
  rating: 4.8,
  rating_count: 124,
};

const LICENSE_CODE = '6feacceb6fd253547afd8dde6ba846a9';

const FatmiAdmin: React.FC = () => {
  const [experiences, setExperiences] = useState<SupabaseExperience[]>([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState(initialForm);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState(null);
  const [licenseInput, setLicenseInput] = useState('');
  const [codeEntered, setCodeEntered] = useState(false);
  const [licenseError, setLicenseError] = useState('');

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
    // Get current user on mount
    supabase.auth.getUser().then(({ data }) => setUser(data?.user ?? null));
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const fetchExperiences = async () => {
    setLoading(true);
    setError(null);
    const { data, error } = await supabase
      .from('experiences')
      .select('*')
      .order('id', { ascending: true });
    if (error) {
      setError('Failed to fetch experiences.');
      setExperiences([]);
    } else {
      setExperiences(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (user) fetchExperiences();
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => {
      let updated = {
        ...prev,
        [name]: type === 'checkbox' ? checked : value,
      };
      if (name === 'title') {
        updated.slug = slugify(value);
      }
      return updated;
    });
  };

  const handleGalleryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({
      ...prev,
      gallery: e.target.value.split(',').map(url => url.trim()),
    }));
  };

  const handleEdit = (exp: SupabaseExperience) => {
    setEditingId(exp.id);
    setForm({ ...exp });
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this experience?')) return;
    setSaving(true);
    await supabase.from('experiences').delete().eq('id', id);
    await fetchExperiences();
    setSaving(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    if (editingId) {
      // Update
      await supabase.from('experiences').update(form).eq('id', editingId);
    } else {
      // Insert
      await supabase.from('experiences').insert([{ ...form }]);
    }
    setForm(initialForm);
    setEditingId(null);
    await fetchExperiences();
    setSaving(false);
  };

  const handleCancel = () => {
    setForm(initialForm);
    setEditingId(null);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  if (!codeEntered) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <form
          onSubmit={e => {
            e.preventDefault();
            if (licenseInput.trim() === LICENSE_CODE) {
              setCodeEntered(true);
              setLicenseError('');
            } else {
              setLicenseError('Incorrect code. Please try again.');
            }
          }}
          className="max-w-md w-full bg-white rounded-lg shadow-lg p-8"
        >
          <h1 className="text-2xl font-bold mb-6 text-center">Enter ترخيص Code</h1>
          <input
            type="text"
            value={licenseInput}
            onChange={e => setLicenseInput(e.target.value)}
            placeholder="Enter your ترخيص code"
            className="w-full border p-3 rounded mb-4"
          />
          {licenseError && <div className="text-red-600 mb-4 text-center">{licenseError}</div>}
          <button type="submit" className="w-full bg-orange-600 text-white py-3 rounded font-semibold">Access Admin</button>
        </form>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-2xl font-bold mb-6 text-center">Admin Login</h1>
          <Auth
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            providers={[]}
            theme="light"
            onlyThirdPartyProviders={false}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-2 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-center">Admin Panel</h1>
          <button onClick={handleLogout} className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded">
            <LogOut className="w-5 h-5" /> Logout
          </button>
        </div>
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 mb-8 grid gap-4 grid-cols-1 md:grid-cols-2">
          <div className="col-span-1 md:col-span-2 text-lg font-semibold mb-2">{editingId ? 'Edit Experience' : 'Add New Experience'}</div>
          <input name="title" value={form.title} onChange={handleChange} placeholder="Title" className="border p-2 rounded" required />
          <input name="slug" value={form.slug} readOnly className="border p-2 rounded bg-gray-100" placeholder="Slug (auto)" />
          <input name="location" value={form.location} onChange={handleChange} placeholder="Location" className="border p-2 rounded" required />
          <input name="duration" value={form.duration} onChange={handleChange} placeholder="Duration" className="border p-2 rounded" required />
          <input name="price" value={form.price} onChange={handleChange} placeholder="Price" type="number" className="border p-2 rounded" required />
          <input name="image" value={form.image} onChange={handleChange} placeholder="Main Image URL" className="border p-2 rounded" required />
          <input name="gallery" value={form.gallery.join(', ')} onChange={handleGalleryChange} placeholder="Gallery URLs (comma separated)" className="border p-2 rounded" />
          <input name="whatsapp" value={form.whatsapp} onChange={handleChange} placeholder="WhatsApp" className="border p-2 rounded" />
          <input name="pdfUrl" value={form.pdfUrl || ''} onChange={handleChange} placeholder="PDF URL (optional)" className="border p-2 rounded" />
          <input name="region" value={form.region || ''} onChange={handleChange} placeholder="Region (optional)" className="border p-2 rounded" />
          <input name="rating" value={form.rating ?? ''} onChange={handleChange} placeholder="Rating (e.g. 4.8)" type="number" step="0.1" min="0" max="5" className="border p-2 rounded" />
          <input name="rating_count" value={form.rating_count ?? ''} onChange={handleChange} placeholder="Rating Count (e.g. 124)" type="number" min="0" className="border p-2 rounded" />
          <label className="flex items-center space-x-2">
            <input name="featured" type="checkbox" checked={form.featured} onChange={handleChange} />
            <span>Featured</span>
          </label>
          <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" className="border p-2 rounded col-span-1 md:col-span-2" required />
          <div className="col-span-1 md:col-span-2 flex gap-2">
            <button type="submit" className="bg-orange-600 text-white px-4 py-2 rounded flex items-center gap-2 disabled:opacity-50" disabled={saving}>
              {saving && <Loader2 className="animate-spin w-4 h-4" />} {editingId ? 'Update' : 'Add'}
            </button>
            {editingId && (
              <button type="button" onClick={handleCancel} className="bg-gray-300 text-gray-700 px-4 py-2 rounded">Cancel</button>
            )}
          </div>
        </form>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">All Experiences</h2>
          {loading ? (
            <div className="flex justify-center py-8"><Loader2 className="animate-spin w-8 h-8 text-orange-600" /></div>
          ) : error ? (
            <div className="text-red-500 text-center py-8">{error}</div>
          ) : experiences.length === 0 ? (
            <div className="text-gray-500 text-center py-8">No experiences found.</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-2 text-left">Title</th>
                    <th className="p-2 text-left">Location</th>
                    <th className="p-2 text-left">Price</th>
                    <th className="p-2 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {experiences.map(exp => (
                    <tr key={exp.id} className="border-b hover:bg-gray-50">
                      <td className="p-2 font-medium">{exp.title}</td>
                      <td className="p-2">{exp.location}</td>
                      <td className="p-2">{exp.price} MAD</td>
                      <td className="p-2 flex gap-2">
                        <button onClick={() => handleEdit(exp)} className="text-blue-600 hover:underline flex items-center gap-1"><Edit className="w-4 h-4" />Edit</button>
                        <button onClick={() => handleDelete(exp.id)} className="text-red-600 hover:underline flex items-center gap-1" disabled={saving}><Trash2 className="w-4 h-4" />Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FatmiAdmin; 