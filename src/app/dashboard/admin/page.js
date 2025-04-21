'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaBook, FaChartBar, FaCog } from 'react-icons/fa';

const stats = [
  { name: 'Total Users', value: '1,234', icon: FaUsers },
  { name: 'Active Courses', value: '45', icon: FaBook },
  { name: 'Course Completion Rate', value: '78%', icon: FaChartBar },
  { name: 'System Status', value: 'Healthy', icon: FaCog },
];

const recentUsers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', course: 'JavaScript Fundamentals', progress: 75 },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', course: 'Python for Beginners', progress: 45 },
  { id: 3, name: 'Mike Johnson', email: 'mike@example.com', course: 'React Development', progress: 90 },
];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen p-8 pt-24 bg-dark-100">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-dark-200 p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-dark-700">{stat.name}</p>
                  <p className="text-2xl font-semibold mt-2">{stat.value}</p>
                </div>
                <stat.icon className="w-8 h-8 text-blue-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Recent Users Table */}
        <div className="bg-dark-200 rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Recent Users</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-dark-700 border-b border-dark-300">
                  <th className="py-3 px-4">Name</th>
                  <th className="py-3 px-4">Email</th>
                  <th className="py-3 px-4">Course</th>
                  <th className="py-3 px-4">Progress</th>
                </tr>
              </thead>
              <tbody>
                {recentUsers.map((user) => (
                  <tr key={user.id} className="border-b border-dark-300 hover:bg-dark-300 transition-colors">
                    <td className="py-3 px-4">{user.name}</td>
                    <td className="py-3 px-4">{user.email}</td>
                    <td className="py-3 px-4">{user.course}</td>
                    <td className="py-3 px-4">
                      <div className="w-full bg-dark-300 rounded-full h-2.5">
                        <div
                          className="bg-blue-500 h-2.5 rounded-full"
                          style={{ width: `${user.progress}%` }}
                        ></div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-dark-200 rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">
              Add New Course
            </button>
            <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors">
              Manage Users
            </button>
            <button className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600 transition-colors">
              View Reports
            </button>
          </div>
        </div>

        {/* Online Learning Section */}
        <div className="bg-dark-200 rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Online Learning Status</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Live Sessions */}
            <div className="bg-dark-300 p-4 rounded-lg">
              <h3 className="text-lg font-medium mb-3">Active Live Sessions</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>JavaScript Basics</span>
                  <span className="text-green-500">25 students</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>React Workshop</span>
                  <span className="text-green-500">18 students</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Python Advanced</span>
                  <span className="text-green-500">15 students</span>
                </div>
              </div>
            </div>
        
            {/* Student Engagement */}
            <div className="bg-dark-300 p-4 rounded-lg">
              <h3 className="text-lg font-medium mb-3">Student Engagement</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>Active Discussions</span>
                  <span>42</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Questions Asked</span>
                  <span>156</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Assignments Submitted</span>
                  <span>89</span>
                </div>
              </div>
            </div>
        
            {/* Course Analytics */}
            <div className="bg-dark-300 p-4 rounded-lg">
              <h3 className="text-lg font-medium mb-3">Course Analytics</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>Average Completion</span>
                  <span>76%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Student Satisfaction</span>
                  <span>4.8/5.0</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Total Learning Hours</span>
                  <span>2,450</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}