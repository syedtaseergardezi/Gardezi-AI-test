"use client";

import { useState, useEffect } from 'react';
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { Pencil, Trash } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  date: string;
  author: {
    name: string;
    picture: string;
  };
  categories: string[];
}

export default function BlogAdmin() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    coverImage: '',
    authorName: '',
    authorPicture: '',
    categories: '',
  });

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'posts'));
      const postsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as BlogPost[];
      setPosts(postsData);
    } catch (error) {
      toast.error('Error fetching blog posts');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const postData = {
        title: formData.title,
        excerpt: formData.excerpt,
        content: formData.content,
        coverImage: formData.coverImage,
        date: new Date().toISOString(),
        author: {
          name: formData.authorName,
          picture: formData.authorPicture,
        },
        categories: formData.categories.split(',').map(cat => cat.trim()),
      };

      if (editingPost) {
        await updateDoc(doc(db, 'posts', editingPost.id), postData);
        toast.success('Post updated successfully');
      } else {
        await addDoc(collection(db, 'posts'), postData);
        toast.success('Post added successfully');
      }

      setFormData({
        title: '',
        excerpt: '',
        content: '',
        coverImage: '',
        authorName: '',
        authorPicture: '',
        categories: '',
      });
      setEditingPost(null);
      fetchPosts();
    } catch (error) {
      toast.error('Error saving blog post');
    }
  };

  const handleEdit = (post: BlogPost) => {
    setEditingPost(post);
    setFormData({
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      coverImage: post.coverImage,
      authorName: post.author.name,
      authorPicture: post.author.picture,
      categories: post.categories.join(', '),
    });
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this post?')) {
      try {
        await deleteDoc(doc(db, 'posts', id));
        toast.success('Post deleted successfully');
        fetchPosts();
      } catch (error) {
        toast.error('Error deleting post');
      }
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Manage Blog Posts</h1>

      <form onSubmit={handleSubmit} className="space-y-4 bg-card p-6 rounded-lg border">
        <h2 className="text-xl font-semibold mb-4">
          {editingPost ? 'Edit Post' : 'Add New Post'}
        </h2>
        <Input
          placeholder="Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
        />
        <Textarea
          placeholder="Excerpt"
          value={formData.excerpt}
          onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
          required
        />
        <Textarea
          placeholder="Content"
          value={formData.content}
          onChange={(e) => setFormData({ ...formData, content: e.target.value })}
          required
          className="min-h-[200px]"
        />
        <Input
          placeholder="Cover Image URL"
          value={formData.coverImage}
          onChange={(e) => setFormData({ ...formData, coverImage: e.target.value })}
          required
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            placeholder="Author Name"
            value={formData.authorName}
            onChange={(e) => setFormData({ ...formData, authorName: e.target.value })}
            required
          />
          <Input
            placeholder="Author Picture URL"
            value={formData.authorPicture}
            onChange={(e) => setFormData({ ...formData, authorPicture: e.target.value })}
            required
          />
        </div>
        <Input
          placeholder="Categories (comma-separated)"
          value={formData.categories}
          onChange={(e) => setFormData({ ...formData, categories: e.target.value })}
          required
        />
        <div className="flex gap-2">
          <Button type="submit">
            {editingPost ? 'Update Post' : 'Add Post'}
          </Button>
          {editingPost && (
            <Button type="button" variant="outline" onClick={() => {
              setEditingPost(null);
              setFormData({
                title: '',
                excerpt: '',
                content: '',
                coverImage: '',
                authorName: '',
                authorPicture: '',
                categories: '',
              });
            }}>
              Cancel Edit
            </Button>
          )}
        </div>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-card p-4 rounded-lg border">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="font-semibold text-lg mb-2">{post.title}</h3>
            <p className="text-muted-foreground text-sm mb-2">{post.excerpt}</p>
            <div className="flex items-center gap-2 mb-4">
              <img
                src={post.author.picture}
                alt={post.author.name}
                className="w-8 h-8 rounded-full"
              />
              <span className="text-sm">{post.author.name}</span>
            </div>
            <div className="flex gap-2">
              <Button
                size="sm"
                variant="outline"
                onClick={() => handleEdit(post)}
              >
                <Pencil className="h-4 w-4 mr-1" /> Edit
              </Button>
              <Button
                size="sm"
                variant="destructive"
                onClick={() => handleDelete(post.id)}
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