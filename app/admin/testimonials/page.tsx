"use client";

import { useState, useEffect } from 'react';
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { Pencil, Trash } from 'lucide-react';

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  imageUrl: string;
}

export default function TestimonialsAdmin() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingTestimonial, setEditingTestimonial] = useState<Testimonial | null>(null);
  const [formData, setFormData] = useState({
    quote: '',
    author: '',
    role: '',
    company: '',
    imageUrl: '',
  });

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'testimonials'));
      const testimonialsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Testimonial[];
      setTestimonials(testimonialsData);
    } catch (error) {
      toast.error('Error fetching testimonials');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingTestimonial) {
        await updateDoc(doc(db, 'testimonials', editingTestimonial.id), formData);
        toast.success('Testimonial updated successfully');
      } else {
        await addDoc(collection(db, 'testimonials'), formData);
        toast.success('Testimonial added successfully');
      }

      setFormData({
        quote: '',
        author: '',
        role: '',
        company: '',
        imageUrl: '',
      });
      setEditingTestimonial(null);
      fetchTestimonials();
    } catch (error) {
      toast.error('Error saving testimonial');
    }
  };

  const handleEdit = (testimonial: Testimonial) => {
    setEditingTestimonial(testimonial);
    setFormData({
      quote: testimonial.quote,
      author: testimonial.author,
      role: testimonial.role,
      company: testimonial.company,
      imageUrl: testimonial.imageUrl,
    });
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this testimonial?')) {
      try {
        await deleteDoc(doc(db, 'testimonials', id));
        toast.success('Testimonial deleted successfully');
        fetchTestimonials();
      } catch (error) {
        toast.error('Error deleting testimonial');
      }
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Manage Testimonials</h1>

      <form onSubmit={handleSubmit} className="space-y-4 bg-card p-6 rounded-lg border">
        <h2 className="text-xl font-semibold mb-4">
          {editingTestimonial ? 'Edit Testimonial' : 'Add New Testimonial'}
        </h2>
        <Textarea
          placeholder="Quote"
          value={formData.quote}
          onChange={(e) => setFormData({ ...formData, quote: e.target.value })}
          required
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            placeholder="Author Name"
            value={formData.author}
            onChange={(e) => setFormData({ ...formData, author: e.target.value })}
            required
          />
          <Input
            placeholder="Role"
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            required
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            placeholder="Company"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            required
          />
          <Input
            placeholder="Image URL"
            value={formData.imageUrl}
            onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
            required
          />
        </div>
        <div className="flex gap-2">
          <Button type="submit">
            {editingTestimonial ? 'Update Testimonial' : 'Add Testimonial'}
          </Button>
          {editingTestimonial && (
            <Button type="button" variant="outline" onClick={() => {
              setEditingTestimonial(null);
              setFormData({
                quote: '',
                author: '',
                role: '',
                company: '',
                imageUrl: '',
              });
            }}>
              Cancel Edit
            </Button>
          )}
        </div>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-card p-4 rounded-lg border">
            <div className="flex items-center gap-4 mb-4">
              <img
                src={testimonial.imageUrl}
                alt={testimonial.author}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold">{testimonial.author}</h3>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role} at {testimonial.company}
                </p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">"{testimonial.quote}"</p>
            <div className="flex gap-2">
              <Button
                size="sm"
                variant="outline"
                onClick={() => handleEdit(testimonial)}
              >
                <Pencil className="h-4 w-4 mr-1" /> Edit
              </Button>
              <Button
                size="sm"
                variant="destructive"
                onClick={() => handleDelete(testimonial.id)}
              >
                <Trash className="h-4 w-4 mr-1" /> Delete
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}