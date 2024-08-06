import React from 'react';
import About from '../../components/About/About';
import { getAbout } from '@/app/actions/getAbout';
import { getSkills } from '@/app/actions/getSkills';

export default async function AboutMe() {
    const profileData = await getAbout();
    const skillsData = await getSkills();
    return (
      <div className="">
        <About profileData={profileData.data[0]} skillsData={skillsData.data} />
      </div>
    );
  }
  