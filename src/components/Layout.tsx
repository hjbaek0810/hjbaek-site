import { PropsWithChildren } from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function Layout({ children }: PropsWithChildren) {
	return (
		<div className="bg-primary">
			<Header />
			<div>{children}</div>
			<Footer />
		</div>
	);
}
