import { PropsWithChildren } from 'react';

type LeftPropsType = {
	title: string;
};

const Root = ({ children }: PropsWithChildren) => (
	<section className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
		{children}
	</section>
);

const Left = ({ title, children }: PropsWithChildren<LeftPropsType>) => (
	<div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center lg:self-start md:self-start">
		<h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-blue-600">{title}</h1>
		{children}
	</div>
);

const Right = ({ children }: PropsWithChildren) => (
	<div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center gap-14">
		{children}
	</div>
);

const Section = Object.assign(Root, {
	Left,
	Right
});

export default Section;
