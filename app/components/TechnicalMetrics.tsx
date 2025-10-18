'use client';

import { motion } from 'framer-motion';

export default function TechnicalMetrics() {
	return (
		<section className="py-20 px-4 bg-gray-900/50">
  <div className="max-w-6xl mx-auto">
    <motion.h2
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="text-3xl font-bold mb-12 text-center"
    >
      Impact & Achievements
    </motion.h2>

    <div className="grid grid-cols-1 gap-12">
      {/* System Performance */}
      <div>
        <h3 className="text-xl font-semibold mb-6 text-green-400">System Performance</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
          >
            <h4 className="text-lg font-semibold text-gray-300">Flyora Microservices</h4>
            <ul className="mt-2 space-y-2 text-gray-400">
              <li>• Supported 50+ concurrent requests with high scalability and resilience</li>
              <li>• Secured 20+ endpoints with JWT authentication, RBAC, reverse proxy, and rate limiting</li>
              <li>• Prevented duplicate bookings with transactional, idempotent workflows</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
          >
            <h4 className="text-lg font-semibold text-gray-300">API & Search Optimization</h4>
            <ul className="mt-2 space-y-2 text-gray-400">
              <li>• Improved request handling efficiency by 40% in Image Curator APIs</li>
              <li>• Enhanced search and filtering, boosting discovery efficiency by 30%</li>
              <li>• Enabled real-time search on 500,000+ movies with 25% increase in content discovery</li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Reliability & Notifications */}
      <div>
        <h3 className="text-xl font-semibold mb-6 text-green-400">Reliability & Notifications</h3>
        <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
          <h4 className="text-lg font-semibold text-gray-300">RabbitMQ Email Reminders</h4>
          <ul className="mt-2 space-y-2 text-gray-400">
            <li>• Delivered 20+ daily asynchronous email notifications with 99.9% success rate</li>
            <li>• Implemented retry logic and queue management to ensure reliability</li>
          </ul>
        </div>
      </div>

      {/* Development & Collaboration */}
      <div>
        <h3 className="text-xl font-semibold mb-6 text-green-400">Development & Collaboration</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
          >
            <h4 className="text-lg font-semibold text-gray-300">API Development</h4>
            <ul className="mt-2 space-y-2 text-gray-400">
              <li>• Created and maintained 40+ RESTful API endpoints across projects</li>
              <li>• Used JWT auth, role-based access control, and rate limiting for secure APIs</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
          >
            <h4 className="text-lg font-semibold text-gray-300">Tech Stack & Tools</h4>
            <ul className="mt-2 space-y-2 text-gray-400">
              <li>• Leveraged Node.js, Express.js, Sequelize with MySQL & PostgreSQL for robust backend systems</li>
              <li>• Integrated external APIs like Unsplash and TMDB to enrich application features</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  </div>
</section>

	);
}
