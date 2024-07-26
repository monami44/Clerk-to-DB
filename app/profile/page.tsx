'use client';

import React from 'react';
import { UserProfile } from '@clerk/nextjs';

const ProfilePage: React.FC = () => {
  return (
    <>
      <UserProfile />
    </>
  );
};

export default ProfilePage;