'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaCode, FaDatabase, FaMobile, FaCloud, FaLaptopCode, FaBrain } from 'react-icons/fa';

const courseCategories = [
  {
    title: 'Web Development',
    description: 'Master modern web development with HTML, CSS, JavaScript, and popular frameworks.',
    icon: FaCode,
    courses: [
      { name: 'JavaScript Fundamentals', duration: '8 weeks', level: 'Beginner' },
      { name: 'React Development', duration: '10 weeks', level: 'Intermediate' },
      { name: 'Full Stack Development', duration: '16 weeks', level: 'Advanced' },
    ],
  },
  {
    title: 'Database Management',
    description: 'Learn to design, implement and manage different types of databases.',
    icon: FaDatabase,
    courses: [
      { name: 'SQL Basics', duration: '6 weeks', level: 'Beginner' },
      { name: 'NoSQL with MongoDB', duration: '8 weeks', level: 'Intermediate' },
      { name: 'Database Design Patterns', duration: '12 weeks', level: 'Advanced' },
    ],
  },
  {
    title: 'Mobile Development',
    description: 'Create native and cross-platform mobile applications.',
    icon: FaMobile,
    courses: [
      { name: 'React Native Basics', duration: '10 weeks', level: 'Intermediate' },
      { name: 'iOS Development', duration: '12 weeks', level: 'Intermediate' },
      { name: 'Android Development', duration: '12 weeks', level: 'Intermediate' },
    ],
  },
  {
    title: 'Cloud Computing',
    description: 'Master cloud platforms and deploy scalable applications.',
    icon: FaCloud,
    courses: [
      { name: 'AWS Fundamentals', duration: '8 weeks', level: 'Beginner' },
      { name: 'Azure Services', duration: '10 weeks', level: 'Intermediate' },
      { name: 'Cloud Architecture', duration: '14 weeks', level: 'Advanced' },
    ],
  },
  {
    title: 'Programming Languages',
    description: 'Learn popular programming languages from scratch.',
    icon: FaLaptopCode,
    courses: [
      { name: 'Python for Beginners', duration: '8 weeks', level: 'Beginner' },
      { name: 'Java Programming', duration: '12 weeks', level: 'Intermediate' },
      { name: 'C++ Development', duration: '14 weeks', level: 'Advanced' },
    ],
  },
  {
    title: 'Artificial Intelligence',
    description: 'Explore machine learning and AI applications.',
    icon: FaBrain,
    courses: [
      { name: 'Machine Learning Basics', duration: '10 weeks', level: 'Intermediate' },
      { name: 'Deep Learning', duration: '12 weeks', level: 'Advanced' },
      { name: 'AI Applications', duration: '14 weeks', level: 'Advanced' },
    ],
  },
];

export default function LearnMore() {
  return (
    <div className="min-h-screen pt-24 bg-dark-100">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-6 lg:px-8"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Course Categories</h1>
          <p className="text-xl text-dark-700">
            Explore our comprehensive range of programming and technology courses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courseCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-dark-200 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <category.icon className="w-8 h-8 text-blue-500" />
                  <h2 className="text-2xl font-bold">{category.title}</h2>
                </div>
                <p className="text-dark-700 mb-6">{category.description}</p>
                
                <div className="space-y-4">
                  {category.courses.map((course) => (
                    <div
                      key={course.name}
                      className="bg-dark-300 p-4 rounded-lg hover:bg-dark-400 transition-colors"
                    >
                      <h3 className="font-semibold mb-2">{course.name}</h3>
                      <div className="flex justify-between text-sm text-dark-700">
                        <span>Duration: {course.duration}</span>
                        <span>Level: {course.level}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  href="/courses"
                  className="mt-6 block text-center bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
                >
                  View All Courses
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16 mb-8 p-8 bg-dark-200 rounded-lg"
        >
          <h2 className="text-2xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="text-dark-700 mb-6">
            Join thousands of students who are already learning and building their future with us.
          </p>
          <Link
            href="/login"
            className="inline-block bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Get Started Today
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}