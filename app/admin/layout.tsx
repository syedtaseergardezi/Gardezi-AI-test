import { redirect } from 'next/navigation';
import { auth } from '@/lib/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    redirect('/admin/login');
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        {/* Admin Sidebar */}
        <div className="w-64 bg-card border-r min-h-screen p-4">
          <div className="mb-8">
            <h2 className="text-lg font-semibold">Admin Dashboard</h2>
          </div>
          <nav className="space-y-2">
            <Link href="/admin" className="block p-2 hover:bg-muted rounded-md">
              Dashboard
            </Link>
            <Link href="/admin/projects" className="block p-2 hover:bg-muted rounded-md">
              Projects
            </Link>
            <Link href="/admin/blog" className="block p-2 hover:bg-muted rounded-md">
              Blog Posts
            </Link>
            <Link href="/admin/testimonials" className="block p-2 hover:bg-muted rounded-md">
              Testimonials
            </Link>
            <Link href="/admin/messages" className="block p-2 hover:bg-muted rounded-md">
              Contact Messages
            </Link>
          </nav>
        </div>
        {/* Main Content */}
        <div className="flex-1 p-8">
          {children}
        </div>
      </div>
    </div>
  );
}