'use client';

import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Header from '@/component/Header';
import Footer from '@/component/Footer';
import { useGetUserProfileQuery } from '../../../redux/features/userAuth/userAuthApi';

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const router = useRouter();

  const shouldCheckAuth = pathname.startsWith('/user');
  const isAuthPage = ['/user/login', '/user/register'].includes(pathname);

  const { data, error, isLoading, isSuccess } = useGetUserProfileQuery(undefined, {
    skip: !shouldCheckAuth,
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
  });

  // ✅ Redirect to /user/home if already logged in and visiting /user/login or /user/register
  useEffect(() => {
    if (isAuthPage && isSuccess && data?.data?.role === 'user') {
      router.push('/user/home');
    }
  }, [isAuthPage, isSuccess, data, router]);

  // ✅ Redirect to /user/login if trying to access protected routes without login
  useEffect(() => {
    if (shouldCheckAuth && !isAuthPage && !isLoading) {
      if (error) {
        router.push('/user/login');
      } else if (data?.data?.role !== 'user') {
        router.push('/');
      }
    }
  }, [error, data, isLoading, router, shouldCheckAuth, isAuthPage]);

  if (isLoading && shouldCheckAuth && !isAuthPage) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600 text-lg">Checking authentication...</p>
      </div>
    );
  }

  const showLayout = shouldCheckAuth && !isAuthPage;

  return (
    <>
      {showLayout && <Header />}
      <main className="flex-grow">{children}</main>
      {showLayout && <Footer />}
    </>
  );
}
