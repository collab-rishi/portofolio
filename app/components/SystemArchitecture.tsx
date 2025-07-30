'use client';

import { motion } from 'framer-motion';

export default function SystemArchitecture() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-12 text-center">
					Projects
				</motion.h2>

				<div className="grid grid-cols-1 gap-8">
					{[
						{
							title: 'Image Curator | Github',
							description: 'Developed a photo curation backend using Node.js and PostgreSQL with advanced search, tag filtering, and Unsplash API integration for seamless image discovery.',
							details: [
								'Designed a Robust Data Model: Structured Sequelize schemas for four core entities—user, photo, tag, and search history—optimizing database efficiency.',
								' Built and Optimized RESTful APIs: Developed 10+ API endpoints for user authentication, photo curation, and tag management, improving backend performance',
								' Integrated Unsplash API: Enabled seamless image search and retrieval by integrating Unsplash API, allowing users to explore and curate high-quality images.',
								'Enhanced Search and Filtering Capabilities: Applied multi-parameter search with tag-based filtering, date-based sorting, and history tracking, improving user experience and retrieval accuracy',
							],
							tech: ['NodeJS',' JavaScript', ' Express.js','PostgreSQL','Sequelize'],
						},
						{
							title: 'Cine List | Github',
							description: 'Built a scalable movie search and list management API powered by TMDB, featuring user authentication, advanced filtering, and 90%+ test coverage with Jest.',
							details: [
								' Built a Scalable Movie Curation Backend: Designed and implemented 10+ RESTful APIs using for user authentication, movie management, and list creation',
								' Integrated TMDB API for Real-time Movie Search: Enabled access to a database of 500,000+ movies, allowing users to search, filter, and curate personalized movie lists.',
								' Enhanced User Experience with Advanced Filtering: Integrated search including genre, rating, and release date, filters, improving content discovery.',
								'Ensured System Reliability with Comprehensive Testing: Created 20+ Jest test cases, achieving 90 percent+ test coverage, ensuring stable API and database performance',
							],
							tech: ['Node.js', 'JavaScript', 'Express.js', 'PostgreSQL', ' Sequelize', 'Jest'],
						},
					].map((project, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.2 }}
							className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-800"
						>
							<h3 className="text-2xl font-bold mb-4"><a href="https://github.com/collab-rishi/PicCurator">{project.title}</a></h3>
							<p className="text-gray-400 mb-6">{project.description}</p>
							<div className="mb-6">
								<h4 className="text-lg font-semibold mb-2"></h4>
								<ul className="list-disc list-inside space-y-2 text-gray-300">
									{project.details.map((detail, i) => (
										<li key={i}>{detail}</li>
									))}
								</ul>
							</div>
							<div className="flex flex-wrap gap-2">
								{project.tech.map((tech, i) => (
									<span key={i} className="text-sm px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20">
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
