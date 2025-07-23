'use client';
import BlogForm from '@/components/BlogForm';
import { useRouter } from 'next/navigation';

export default function NewBlogPage() {
  const router = useRouter();

  const handleSubmit = async (formData) => {
    const res = await fetch('/api/blogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert('Blog created successfully');
      router.push('/admin/blogs'); // Redirect to list (you’ll build this later)
    } else {
      const error = await res.json();
      alert('Error: ' + error?.error || 'Unknown error');
    }
  };

  return (
    <div style={{ padding: 30 }}>
      <h1>Create New Blog</h1>
      <BlogForm onSubmit={handleSubmit} />
      
    </div>
  );
}
