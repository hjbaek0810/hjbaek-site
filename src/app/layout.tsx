import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Providers from './providers';
import { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: '백현지',
	description: '포트폴리오'
};

const RootLayout = ({
	children
}: Readonly<{
	children: ReactNode;
}>) => (
	<html lang="en">
		<body className={inter.className}>
			<Providers>{children}</Providers>
		</body>
	</html>
);

export default RootLayout;
