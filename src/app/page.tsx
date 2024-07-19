import Head from 'next/head';

import Animation from '@/components/sections/Animation';

import Layout from '@/components/Layout';
import AboutMe from '@/components/sections/AboutMe';

export default function Home() {
	return (
		<>
			<Head>
				<title>FE 백현지</title>
				<meta name="description" content="FE" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<section className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
				<AboutMe />
				<Animation />
			</section>
		</>
	);
}
