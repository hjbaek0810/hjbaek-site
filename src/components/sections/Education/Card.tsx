type CardPropsType = {
	title: string;
	date: string;
	description?: string | Array<string>;
};

const Card = ({ title, date, description }: CardPropsType) => (
	<ul className="p-3 pl-12 border-4 w-full flex flex-col gap-2 relative">
		<li className="before:content-['🎓'] before:absolute before:block before:left-4 text-lg text-gray-900 before:dark:bg-white before:dark:px-1">
			<h2>{title}</h2>
		</li>
		<li>{date}</li>

		{description &&
			(Array.isArray(description) ? (
				description.map((text) => <li key={text}>{text}</li>)
			) : (
				<li>{description}</li>
			))}
	</ul>
);

export default Card;
