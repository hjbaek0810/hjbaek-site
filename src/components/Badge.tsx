import { PropsWithChildren, ReactNode } from 'react';

type BadgePropsType = {
	text: string;
};

const BadgeRoot = ({ children }: PropsWithChildren) => (
	<div className="flex gap-2 items-start text-center">{children}</div>
);

const BadgeComponent = ({ text }: BadgePropsType) => (
	<div className="inline-block p-1 text-sm text-gray-700 rounded bg-blue-100">{text}</div>
);

const Badge = Object.assign(BadgeComponent, {
	Root: BadgeRoot
});

export default Badge;
