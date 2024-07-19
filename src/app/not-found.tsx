import Link from 'next/link';

const PageNotFound = () => (
	<div className="flex flex-col items-center w-full">
		<h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
			페이지를 찾을 수 없습니다.
		</h1>
		<Link href={'/'} className="btn-project ">
			Home
		</Link>
	</div>
);

export default PageNotFound;
