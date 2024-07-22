import { PropsWithChildren } from 'react';

const ProjectRoot = ({ children }: PropsWithChildren) => <div>{children}</div>;

const ProjectTitle = ({ children }: PropsWithChildren) => (
	<h3 className="md:text-xl mb-3">{children}</h3>
);
const ProjectDescription = ({ children }: PropsWithChildren) => <p className="mb-1">{children}</p>;

const ProjectDate = ({ children }: PropsWithChildren) => <p>{children}</p>;

const ProjectTask = ({ children }: PropsWithChildren) => (
	<ul className="flex flex-col gap-4 relative pl-6 py-4">{children}</ul>
);

const ProjectTaskItem = ({ children }: PropsWithChildren) => (
	<li className="before:content-['⚡️'] before:block before:absolute before:left-0">{children}</li>
);

const Project = Object.assign(ProjectRoot, {
	Title: ProjectTitle,
	Description: ProjectDescription,
	Date: ProjectDate,
	Task: ProjectTask,
	TaskItem: ProjectTaskItem
});

export default Project;
