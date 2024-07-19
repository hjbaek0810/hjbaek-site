import { PropsWithChildren } from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function Layout({ children }: PropsWithChildren) {
	return (
		<div className="bg-primary">
			<Header />
			<div className="flex flex-col items-start justify-center text-gray-600 body-font min-h-screen">
				{children}
			</div>
			<Footer />
		</div>
	);
}
