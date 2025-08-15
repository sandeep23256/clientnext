'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { useLogoutUserMutation } from '../../redux/features/userAuth/userAuthApi';
import { clearUser } from '../../redux/features/userAuth/userAuthSlice';

export default function LogoutButton() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [logoutUser, { isLoading }] = useLogoutUserMutation();

  const handleLogout = async () => {
    try {
      await logoutUser().unwrap();
      dispatch(clearUser());
      router.push('/user/login');
    } catch (err) {
      console.error('Logout failed:', err);
    }
  };

  return (
    <button
      onClick={handleLogout}
      disabled={isLoading}
      className="text-sm px-1 py-1 roundedpx-4 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition-all"
    >
      {isLoading ? 'Logging out...' : 'Logout'}
    </button>
  );
}
