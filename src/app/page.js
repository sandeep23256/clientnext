// app/page.js
'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/user/login');
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center text-xl font-bold">
      Redirecting to login...
    </div>
  );
}
