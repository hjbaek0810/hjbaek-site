import Head from 'next/head';

import Animation from '@/components/sections/Animation';

import AboutMe from '@/components/sections/AboutMe';
import Experience from '@/components/sections/Experience';

import Section from '@/components/Section';
import Education from '@/components/sections/Education';

const Home = () => (
	<>
		<Head>
			<title>FE 백현지</title>
			<meta name="description" content="FE" />
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<Section>
			<AboutMe />
			<Animation />
		</Section>

		<Section>
			<Experience />
		</Section>

		<Section>
			<Education />
		</Section>
	</>
);

export default Home;
