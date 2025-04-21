'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBook, FaClock, FaStar, FaTrophy, FaChartLine } from 'react-icons/fa';

const upcomingExams = [
  {
    id: 1,
    title: 'JavaScript Advanced Concepts',
    date: '2024-02-20',
    duration: '2 hours',
    course: 'JavaScript Fundamentals'
  },
  {
    id: 2,
    title: 'Python Data Structures',
    date: '2024-02-25',
    duration: '1.5 hours',
    course: 'Python for Beginners'
  }
];

const attendanceData = [
  { month: 'Jan', attendance: 90 },
  { month: 'Feb', attendance: 85 },
  { month: 'Mar', attendance: 95 },
  { month: 'Apr', attendance: 88 },
  { month: 'May', attendance: 92 },
  { month: 'Jun', attendance: 87 }
];

const enrolledCourses = [
  {
    id: 1,
    title: 'JavaScript Fundamentals',
    progress: 75,
    nextLesson: 'Advanced Functions',
    lastAccessed: '2 days ago'
  },
  {
    id: 2,
    title: 'Python for Beginners',
    progress: 45,
    nextLesson: 'Data Structures',
    lastAccessed: '1 week ago'
  },
  {
    id: 3,
    title: 'React Development',
    progress: 90,
    nextLesson: 'State Management',
    lastAccessed: 'Yesterday'
  }
];

const achievements = [
  { id: 1, title: 'Fast Learner', description: 'Completed 5 lessons in one day', icon: FaStar },
  { id: 2, title: 'Code Master', description: 'Achieved 100% in JavaScript quiz', icon: FaTrophy },
  { id: 3, title: 'Consistent', description: '7-day learning streak', icon: FaClock }
];

export default function UserDashboard() {
  const [activeTab, setActiveTab] = useState('courses');

  return (
    <div className="min-h-screen p-8 pt-24 bg-dark-100">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">My Learning Dashboard</h1>
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">
            Browse Courses
          </button>
        </div>

        {/* Learning Progress */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-dark-200 p-6 rounded-lg shadow-lg"
          >
            <div className="flex items-center gap-4">
              <FaBook className="w-8 h-8 text-blue-500" />
              <div>
                <p className="text-sm text-dark-700">Enrolled Courses</p>
                <p className="text-2xl font-semibold">3</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-dark-200 p-6 rounded-lg shadow-lg"
          >
            <div className="flex items-center gap-4">
              <FaClock className="w-8 h-8 text-green-500" />
              <div>
                <p className="text-sm text-dark-700">Learning Hours</p>
                <p className="text-2xl font-semibold">24.5</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-dark-200 p-6 rounded-lg shadow-lg"
          >
            <div className="flex items-center gap-4">
              <FaTrophy className="w-8 h-8 text-yellow-500" />
              <div>
                <p className="text-sm text-dark-700">Achievements</p>
                <p className="text-2xl font-semibold">8</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Enrolled Courses */}
        <div className="bg-dark-200 rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">My Courses</h2>
          <div className="grid grid-cols-1 gap-4">
            {enrolledCourses.map((course) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-dark-300 p-4 rounded-lg"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold">{course.title}</h3>
                  <span className="text-sm text-dark-700">Last accessed: {course.lastAccessed}</span>
                </div>
                <div className="mb-2">
                  <div className="w-full bg-dark-400 rounded-full h-2.5">
                    <div
                      className="bg-blue-500 h-2.5 rounded-full"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className="text-sm text-dark-700">{course.progress}% Complete</span>
                    <span className="text-sm text-dark-700">Next: {course.nextLesson}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Upcoming Exams */}
        <div className="bg-dark-200 rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Upcoming Exams</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-dark-700 border-b border-dark-300">
                  <th className="py-3 px-4">Course</th>
                  <th className="py-3 px-4">Exam</th>
                  <th className="py-3 px-4">Date</th>
                  <th className="py-3 px-4">Duration</th>
                </tr>
              </thead>
              <tbody>
                {upcomingExams.map((exam) => (
                  <tr key={exam.id} className="border-b border-dark-300 hover:bg-dark-300 transition-colors">
                    <td className="py-3 px-4">{exam.course}</td>
                    <td className="py-3 px-4">{exam.title}</td>
                    <td className="py-3 px-4">{exam.date}</td>
                    <td className="py-3 px-4">{exam.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Attendance Graph */}
        <div className="bg-dark-200 rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Attendance Overview</h2>
          <div className="h-64 flex items-end justify-between px-4">
            {attendanceData.map((data) => (
              <div key={data.month} className="flex flex-col items-center">
                <div
                  className="w-12 bg-blue-500 rounded-t transition-all duration-300 hover:bg-blue-600"
                  style={{ height: `${data.attendance}%` }}
                ></div>
                <span className="mt-2 text-sm text-dark-700">{data.month}</span>
                <span className="text-sm text-dark-700">{data.attendance}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Achievements */}
        <div className="bg-dark-200 rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {achievements.map((achievement) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-dark-300 p-4 rounded-lg flex items-center gap-4"
              >
                <achievement.icon className="w-8 h-8 text-yellow-500" />
                <div>
                  <h3 className="font-semibold">{achievement.title}</h3>
                  <p className="text-sm text-dark-700">{achievement.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}