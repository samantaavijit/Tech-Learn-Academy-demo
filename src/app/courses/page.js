'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const courses = [
  {
    id: 1,
    title: 'JavaScript Fundamentals',
    description: 'Master the basics of JavaScript programming with hands-on projects and exercises.',
    level: 'Beginner',
    duration: '8 weeks',
    price: '$99',
    image: '/javascript.svg'
  },
  {
    id: 2,
    title: 'Python for Beginners',
    description: 'Start your programming journey with Python. Learn data structures and algorithms.',
    level: 'Beginner',
    duration: '10 weeks',
    price: '$89',
    image: '/python.svg'
  },
  {
    id: 3,
    title: 'React Development',
    description: 'Build modern web applications with React. Master components and state management.',
    level: 'Intermediate',
    duration: '12 weeks',
    price: '$129',
    image: '/react.svg'
  },
  {
    id: 4,
    title: 'Full Stack Development',
    description: 'Become a full stack developer with Node.js, Express, and MongoDB.',
    level: 'Advanced',
    duration: '16 weeks',
    price: '$199',
    image: '/window.svg'
  },
  {
    id: 5,
    title: 'Data Science Essentials',
    description: 'Learn data analysis, visualization, and machine learning basics.',
    level: 'Intermediate',
    duration: '14 weeks',
    price: '$149',
    image: '/file.svg'
  },
  {
    id: 6,
    title: 'Cloud Computing',
    description: 'Master cloud services and deployment with AWS and Docker.',
    level: 'Advanced',
    duration: '12 weeks',
    price: '$179',
    image: '/globe.svg'
  }
];

export default function Courses() {
  return (
    <div className="min-h-screen bg-dark-100 pt-24 pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-white mb-4">Available Courses</h1>
          <p className="text-dark-700 text-lg">Choose from our wide range of programming courses</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-dark-200 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-dark-700">{course.level}</span>
                  <span className="text-sm font-medium text-dark-700">{course.duration}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{course.title}</h3>
                <p className="text-dark-600 mb-4">{course.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-white">{course.price}</span>
                  <Link href={`/courses/${course.id}`}>
                    <button className="rounded-md uppercase font-normal px-6 py-2 text-white clip-path-polygon bg-gradient-to-r from-[#1c1c1c] to-[#6220fb] border-0 overflow-hidden transition-all duration-200 hover:px-8">
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}