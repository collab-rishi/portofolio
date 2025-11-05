'use client';

import { motion } from 'framer-motion';

export default function SystemArchitecture() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.h2
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					className="text-3xl font-bold mb-12 text-center"
				>
					Projects
				</motion.h2>

				<div className="grid grid-cols-1 gap-8">
					{[
						{
							title: 'Task Manager',
							description:
								'Built a full-stack Task Manager with Node.js, Express.js, MongoDB, and React, improving task tracking and workflow efficiency.',
							details: [
								'Built full-stack Task Manager with React and Node.js, cutting manual task tracking by 35%.',
								'Enabled Authentication and Authorization via middleware, with rate limiting, securing 20+ endpoints and blocking 20+ unauthorized requests.',
								'Designed task workflows with MongoDB, validation and optimistic updates for consistency.',
								'Created performant React UI with Context, protected routes, lazy loading, integrated Recharts, exports, and Multer uploads, supporting 15+ concurrent users.'
							],
							tech: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'Multer', 'React', 'Tailwind', 'exceljs'],
							github: 'https://github.com/yourusername/TaskManager',
							live: 'https://www.loom.com/share/3436ca201abe486aace30290c59fd2ac' // <-- live demo link
						},
						{
							title: 'Flyora',
							description:
								'Architected a scalable microservices backend for a flight booking system with secure authentication, transactional booking, and asynchronous notifications.',
							details: [
								'Designed and implemented microservices (Flights, Bookings, Reminders, API Gateway) handling 50+ concurrent requests with high scalability.',
								'Enabled JWT authentication and role-based access control (RBAC) through API Gateway, including reverse proxy and rate limiting for 20+ endpoints.',
								'Implemented transactional and idempotent booking workflows using Sequelize and MySQL to prevent duplicate bookings.',
								'Set up asynchronous email reminders with RabbitMQ, achieving a 99.9% success rate delivering 20+ daily notifications.'
							],
							tech: ['Node.js', 'Express.js', 'MySQL', 'Sequelize', 'JWT', 'RabbitMQ'],
							github: 'https://github.com/yourusername/Flyora'
						},
						
						{
							title: 'Image Curator',
							description:
								'Developed a photo curation backend using Node.js and PostgreSQL with advanced search, tag filtering, and Unsplash API integration for seamless image discovery.',
							details: [
								'Designed a Robust Data Model: Structured Sequelize schemas for four core entities—user, photo, tag, and search history—optimizing database efficiency.',
								'Built and Optimized RESTful APIs: Developed 10+ API endpoints for user authentication, photo curation, and tag management, improving backend performance.',
								'Integrated Unsplash API: Enabled seamless image search and retrieval by integrating Unsplash API, allowing users to explore and curate high-quality images.',
								'Enhanced Search and Filtering Capabilities: Applied multi-parameter search with tag-based filtering, date-based sorting, and history tracking, improving user experience and retrieval accuracy.'
							],
							tech: ['Node.js', 'JavaScript', 'Express.js', 'PostgreSQL', 'Sequelize'],
							github: 'https://github.com/yourusername/ImageCurator'
						}
					].map((project, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.2 }}
							className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-800"
						>
							<h3 className="text-2xl font-bold mb-4">
								<a href={project.github} target="_blank" rel="noopener noreferrer">
									{project.title} | Github
								</a>
								{project.live && (
									<>
										{' '}|{' '}
										<a href={project.live} target="_blank" rel="noopener noreferrer" className="text-blue-400">
											Demo
										</a>
									</>
								)}
							</h3>
							<p className="text-gray-400 mb-6">{project.description}</p>
							<div className="mb-6">
								<ul className="list-disc list-inside space-y-2 text-gray-300">
									{project.details.map((detail, i) => (
										<li key={i}>{detail}</li>
									))}
								</ul>
							</div>
							<div className="flex flex-wrap gap-2">
								{project.tech.map((tech, i) => (
									<span
										key={i}
										className="text-sm px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20"
									>
										{tech}
									</span>
								))}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
