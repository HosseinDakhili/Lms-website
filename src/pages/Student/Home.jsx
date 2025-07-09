import React from 'react'
import Hero from '../../components/student/Hero'

import Companies from '../../components/student/Companies'
import SearchBar from '../../components/student/SearchBar'
import CoursesSection from '../../components/student/CoursesSection'
import TestimonielsSection from '../../components/student/TestimonielsSection'

const Home = () => {
  return (
    <div className='flex flex-col items-center space-y-7 text-center'>
      <Hero/>
      <SearchBar/>;
      <Companies/>
      <CoursesSection/>
      <TestimonielsSection/>
    </div>
  )
}

export default Home
