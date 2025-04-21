'use client';
import { motion } from 'framer-motion';

const stats = [
  { name: 'Courses Enrolled', value: '3' },
  { name: 'Completed Lessons', value: '24' },
  { name: 'Hours Spent', value: '47' },
  { name: 'Certificates Earned', value: '2' },
];

const courses = [
  {
    name: 'JavaScript Fundamentals',
    progress: 80,
    lastAccessed: '2 hours ago',
  },
  {
    name: 'Python for Beginners',
    progress: 60,
    lastAccessed: '1 day ago',
  },
  {
    name: 'React Development',
    progress: 30,
    lastAccessed: '3 days ago',
  },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-dark-100 pt-24 pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-white">Welcome back, Student!</h1>
          <p className="text-dark-700 mt-2">Track your progress and continue learning</p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
        >
          {stats.map((stat) => (
            <div
              key={stat.name}
              className="bg-dark-200 px-4 py-5 shadow rounded-lg overflow-hidden sm:p-6"
            >
              <dt className="text-sm font-medium truncate text-dark-700">{stat.name}</dt>
              <dd className="mt-1 text-3xl font-semibold text-white">{stat.value}</dd>
            </div>
          ))}
        </motion.div>

        {/* Course Progress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-dark-200 rounded-lg shadow p-6"
        >
          <h2 className="text-xl font-semibold text-white mb-4">Your Courses</h2>
          <div className="space-y-4">
            {courses.map((course) => (
              <div key={course.name} className="bg-dark-300 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-medium text-white">{course.name}</h3>
                  <span className="text-sm text-dark-700">{course.lastAccessed}</span>
                </div>
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold inline-block text-dark-700">
                        {course.progress}% Complete
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-dark-400">
                    <div
                      style={{ width: `${course.progress}%` }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600"
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}