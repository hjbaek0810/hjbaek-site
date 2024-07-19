import Head from 'next/head';

import Animation from '@/components/sections/Animation';

import Layout from '@/components/Layout';
import AboutMe from '@/components/sections/AboutMe';

export default function Home() {
	return (
		<Layout>
			<Head>
				<title>포트폴리오</title>
				<meta name="description" content="오늘도 빡코딩" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<section className="flex flex-col items-start justify-center text-gray-600 body-font min-h-screen">
				<div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
					<AboutMe />
					<Animation />
				</div>
			</section>
		</Layout>
	);
}
