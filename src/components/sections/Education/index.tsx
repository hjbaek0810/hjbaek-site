import Section from '@/components/Section';
import Card from './Card';

const Education = () => (
	<>
		<Section.Left title="EDUCATION" />
		<Section.Right>
			<Card title="경복여자고등학교" date="2014.3 - 2017.2" description="이공계열" />
			<Card
				title="연성대학교"
				date="2017.3 - 2021.2"
				description={['컴퓨터 소프트웨어 전공 (전공심화과정 4년제)', '학점 3.5 / 4.5']}
			/>
			<Card
				title="웹표준 기반 UI/UX엔지니어링 콘텐츠 전문가 양성A"
				date="2020.05.25.~ 2020.10.27 더조은아카데미"
				description={
					'컴퓨터 소프트웨어 3년 과정을 졸업한 후, 초기에는 전공에 대한 흥미가 부족했지만 HTML, CSS와 같은 인터페이스 개발에 매력을 느끼며 퍼블리싱 과정을 시작했습니다. 해당 과정과 대학교의 전문심화과정을 병행하며 실질적이고 깊이 있는 학습을 진행했고, 이를 통해 프론트엔드 개발에 깊은 관심을 갖게 되었습니다.'
				}
			/>
			<Card title="컴퓨터활용능력 2급" date="2020.10.30" />
			<Card title="정보처리기사" date="2021.11.26" />
			<Card title="웹디자인기능사" date="2021.12.24" />
		</Section.Right>
	</>
);

export default Education;
