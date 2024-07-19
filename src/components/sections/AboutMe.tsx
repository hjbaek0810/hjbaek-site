import Link from 'next/link';

const AboutMe = () => (
	<div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
		<h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
			안녕하세요.
			<br className="hidden lg:inline-block" />
			프론트엔드 개발자 백현지입니다.
		</h1>
		<p className="mb-8 leading-relaxed">
			퍼블리셔로 시작하여 프론트엔드 개발자로 성장하며, 사용자의 관점에서 최상의 서비스와 경험을
			제공하는 데 큰 보람을 느끼고 있습니다. 다양한 분야를 경험하며 쌓은 지식과 적극적인 소통을
			바탕으로, 더욱 뛰어난 개발자가 되기 위해 끊임없이 노력하고 있습니다.
		</p>
		<div className="flex justify-center">
			<Link href={'/projects'} className="btn-project">
				프로젝트 보러가기
			</Link>
		</div>
	</div>
);

export default AboutMe;
