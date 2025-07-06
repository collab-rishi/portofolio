import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Kumar Rishi - Backend Developer',
	description:
		'Welcome to my portfolio! I’m a backend developer with experience in Node.js, REST APIs, and working with databases like PostgreSQL and MongoDB. I enjoy building clean, efficient systems and learning new technologies along the way. I’ve worked on projects involving microservices and asynchronous programming, and I’m always looking to improve my skills with tools like AWS and Docker. I’m excited about opportunities where I can contribute to a team and continue learning and growing as a developer.',
	keywords: [
		'Backend Developer',
		'Software Engineer',
		'API Development',
		'Database Design',
		'Microservices',
		'Kumar Rishi',
		'Node.js',
		'Java',
	],
	authors: [{ name: 'Kumar Rishi' }],
	creator: 'Kumar Rishi',
	openGraph: {
		title: 'Kumar Rishi - Backend Developer Portfolio',
		description: 'Backend developer crafting clean, efficient systems. Explore my projects and technical expertise.',
		url: 'https://your-domain.com',
		siteName: 'Kumar Rishi - Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Kumar Rishi - Backend Developer Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Kumar Rishi - Backend Developer',
		description: 'Backend developer crafting clean, efficient systems. Explore my projects and technical expertise.',
		creator: '@collab-rishi',
		images: ['/og-image.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
