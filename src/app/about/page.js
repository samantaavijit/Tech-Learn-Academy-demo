'use client';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaUsers, FaLaptopCode, FaTrophy } from 'react-icons/fa';

const stats = [
  { name: 'Students Enrolled', value: '10,000+', icon: FaUsers },
  { name: 'Courses Offered', value: '50+', icon: FaLaptopCode },
  { name: 'Expert Instructors', value: '100+', icon: FaGraduationCap },
  { name: 'Success Stories', value: '5,000+', icon: FaTrophy },
];

const teamMembers = [
  {
    name: 'Dr. Sarah Johnson',
    role: 'Founder & CEO',
    image: 'https://via.placeholder.com/150',
    bio: 'With over 15 years of experience in tech education, Dr. Johnson founded Tech Academy with a vision to make quality programming education accessible to all.',
  },
  {
    name: 'Prof. Michael Chen',
    role: 'Head of Curriculum',
    image: 'https://via.placeholder.com/150',
    bio: 'A former Silicon Valley engineer, Prof. Chen designs our cutting-edge curriculum to meet industry demands.',
  },
  {
    name: 'Lisa Rodriguez',
    role: 'Head of Student Success',
    image: 'https://via.placeholder.com/150',
    bio: 'Lisa ensures our students receive the support they need to succeed in their learning journey.',
  },
];

export default function About() {
  return (
    <div className="min-h-screen pt-24 bg-dark-100">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-12 px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">About Tech Academy</h1>
          <p className="text-xl text-dark-700 max-w-3xl mx-auto">
            Tech Academy is a leading online learning platform dedicated to empowering individuals with
            the skills they need to succeed in the digital age. Our mission is to make high-quality
            programming education accessible, engaging, and effective.
          </p>
        </div>
      </motion.section>

      {/* Stats Section */}
      <section className="py-12 bg-dark-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-dark-300 p-6 rounded-lg text-center"
              >
                <stat.icon className="w-8 h-8 text-blue-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">{stat.value}</h3>
                <p className="text-dark-700">{stat.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="py-12 px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
          <div className="bg-dark-200 p-8 rounded-lg">
            <p className="text-dark-700 mb-4">
              Founded in 2020, Tech Academy emerged from a simple yet powerful idea: everyone deserves
              access to quality programming education. What started as a small online community has
              grown into a global platform serving students from over 150 countries.
            </p>
            <p className="text-dark-700 mb-4">
              Our innovative approach combines practical projects, expert instruction, and a supportive
              community to create an engaging learning experience. We continuously update our curriculum
              to reflect the latest industry trends and technologies.
            </p>
            <p className="text-dark-700">
              Today, we are proud to be at the forefront of online programming education, helping
              thousands of students launch successful careers in tech.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <section className="py-12 bg-dark-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-dark-300 rounded-lg overflow-hidden"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-blue-500 mb-4">{member.role}</p>
                  <p className="text-dark-700">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
