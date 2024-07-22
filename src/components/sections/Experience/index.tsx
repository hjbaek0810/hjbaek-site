import Section from '@/components/Section';
import Project from './Project';
import Badge from '@/components/Badge';

const SCF_SKILLS: Array<string> = [
	'React',
	'Typescript',
	'Sass',
	'bootstrap',
	'react-hook-form',
	'jest',
	'react-testing-library'
];
const SCM_SKILLS: Array<string> = [
	'React',
	'Typescript',
	'vanilla-extract-css',
	'react-hook-form',
	'react-query',
	'storybook',
	'pnpm',
	'webpack'
];

const Experience = () => (
	<>
		<Section.Left title="EXPERIENCE">
			<h2 className="sm:text-2xl text-xl mb-2 font-medium">Fin2b</h2>
			<p>2020.12 ~ 2024.7</p>
		</Section.Left>

		<Section.Right>
			<Project>
				<Project.Title>SCF Platform</Project.Title>
				<Project.Description>
					중소 기업에 자금 조달 솔루션을 제공하는 공급망 금융 서비스
				</Project.Description>
				<Project.Date>2020.12 ~ 2023.11</Project.Date>
				<Project.Task>
					<Project.TaskItem>
						프로젝트 초기 <b>퍼블리셔</b>로 합류하여, <b>예정된 일정보다 약 2달 빠르게</b> 마크업
						작업을 완료
						<br />
						이후 <b>FE개발까지 담당하여</b> 프로젝트의 전반적인 진행에 기여
					</Project.TaskItem>
					<Project.TaskItem>
						프로젝트 규모가 커지면서 속도 개선을 위한 <b>react-scripts → vite 마이그레이션</b> 진행{' '}
						<br />
						개발 서버 시작 시간을 약 10배 단축하고, 빌드 시간을 약 2배 단축
					</Project.TaskItem>
					<Project.TaskItem>
						<b>Excel 파일 업로드</b> 기능 구현 <br />
						JSON 형식으로 변환 후 <b>유효성 검사 수행 및 Excel/PDF 파일로 내보내는 기능</b> 구현
					</Project.TaskItem>
					<Project.TaskItem>
						<b>MSW</b>를 통한 테스트 환경을 구현 및 테스트 코드 작성
					</Project.TaskItem>
					<Project.TaskItem>
						<b>i18n(국제화)</b> 및 Google Sheets를 활용하여 자동화된 다국어 관리와 다국적 환경을
						지원
					</Project.TaskItem>
				</Project.Task>
				<Badge.Root>
					{SCF_SKILLS.map((text) => (
						<Badge key={`scf-${text}`} text={text} />
					))}
				</Badge.Root>
			</Project>

			<Project>
				<Project.Title>SCM Platform</Project.Title>
				<Project.Description>
					세금계산서 역발행 서비스를 제공하여 매입내역 관리 효율을 향상 시키는 서비스
				</Project.Description>
				<Project.Date>2023.11 ~ 2024.7</Project.Date>
				<Project.Task>
					<Project.TaskItem>
						디자인 시스템을 도입하고 컴포넌트를 <b>storybook</b>에 업로드하여 디자이너와의 협업을
						강화
						<br />
						<b>chromatic</b>을 사용한 스토리북 <b>자동 배포</b> 설정
					</Project.TaskItem>
					<Project.TaskItem>
						pnpm과 webpack을 통해 <b>Micro Frontend Architecture</b> 도입하여 유연한 관리 실현
					</Project.TaskItem>
					<Project.TaskItem>
						<b>React Query(tanstack query)</b>를 도입하여 API 요청 및 캐싱, 동기화 관리를 간소화
					</Project.TaskItem>
					<Project.TaskItem>
						<b>Git Hooks</b>를 통해 팀의 커밋 규칙을 자동으로 적용하여 코드 품질을 보장하고,
						일관성을 유지
					</Project.TaskItem>
				</Project.Task>
				<Badge.Root>
					{SCM_SKILLS.map((text) => (
						<Badge key={`scm-${text}`} text={text} />
					))}
				</Badge.Root>
			</Project>
		</Section.Right>
	</>
);

export default Experience;
