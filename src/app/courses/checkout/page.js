'use client';
import React from 'react';
import { motion } from 'framer-motion';
import CourseCheckoutForm from '@/components/CourseCheckoutForm';

export default function CourseCheckout() {
  return (
    <div className="min-h-screen bg-dark-100 pt-24 pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center items-center"
        >
          <CourseCheckoutForm />
        </motion.div>
      </div>
    </div>
  );
}