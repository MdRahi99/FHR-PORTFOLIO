import React from 'react';
import About from '../../components/About/About';
import { getAbout } from '@/app/actions/getAbout';

export default async function AboutMe() {
    const profileData = await getAbout();
    return (
      <div className="">
        <About data={profileData.data[0]} />
      </div>
    );
  }
  