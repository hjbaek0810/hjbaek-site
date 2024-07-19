import Head from 'next/head';

import Animation from '@/components/sections/Animation';

import AboutMe from '@/components/sections/AboutMe';

const Home = () => (
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

export default Home;
