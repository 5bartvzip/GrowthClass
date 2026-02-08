import { NavItem, CurriculumItem, Review, InstructorExperience, PricingOption } from './types';

export const APP_NAME = "GrowthClass";

export const NAV_ITEMS: NavItem[] = [
  { label: '홈', path: '/' },
  { label: '커리큘럼', path: '/curriculum' },
  { label: '강사 소개', path: '/instructor' },
  { label: '수강 후기', path: '/reviews' },
  { label: '수강 신청', path: '/apply' },
];

export const CURRICULUM_DATA: CurriculumItem[] = [
  {
    week: 1,
    title: '데이터 리터러시 기초와 마인드셋',
    description: '데이터를 바라보는 관점을 바꾸고, 업무에 필요한 핵심 지표를 설정하는 방법을 배웁니다.',
    details: ['데이터 기반 의사결정이란?', '핵심성과지표(KPI) 설정 워크숍', '실무에서 자주 범하는 데이터 오류'],
    isOffline: false
  },
  {
    week: 2,
    title: '실전 데이터 분석: SQL 입문',
    description: '개발자 없이도 원하는 데이터를 직접 추출할 수 있는 SQL 기초 문법을 마스터합니다.',
    details: ['데이터베이스 구조의 이해', 'SELECT, FROM, WHERE 기본기', '실제 이커머스 데이터 추출 실습'],
    isOffline: true
  },
  {
    week: 3,
    title: '데이터 시각화와 설득의 기술',
    description: '분석한 결과를 효과적으로 전달하기 위한 시각화 원칙과 대시보드 제작법을 익힙니다.',
    details: ['차트의 종류와 올바른 사용법', 'Tableau/Excel을 활용한 시각화', '상사를 설득하는 데이터 스토리텔링'],
    isOffline: true
  },
  {
    week: 4,
    title: '파이널 프로젝트 및 커리어 멘토링',
    description: '직접 분석한 프로젝트를 발표하고, 1:1 커리어 코칭을 통해 성장의 방향성을 잡습니다.',
    details: ['개인 프로젝트 발표 및 피드백', '포트폴리오 작성법', '데이터 직군 커리어 로드맵'],
    isOffline: true
  }
];

export const INSTRUCTOR_DATA = {
  name: '김성장',
  role: 'Senior Data Analyst',
  bio: '10년 차 데이터 분석가로, "누구나 데이터를 무기로 삼을 수 있다"는 신념을 가지고 있습니다. 카카오, 토스를 거쳐 현재는 스타트업의 C-Level로 재직 중입니다.',
  experiences: [
    { year: '2023 - 현재', title: 'GrowthClass 리드 강사', description: '누적 수강생 2,000명 배출, 수강 만족도 4.9점' },
    { year: '2020 - 2023', title: 'Fintech Unicorn, Data Team Lead', description: '전사 데이터 인프라 구축 및 그로스 실험 500회 주도' },
    { year: '2016 - 2020', title: 'Major Tech Co., Data Analyst', description: '서비스 사용자 행동 분석 및 추천 알고리즘 개선' },
  ] as InstructorExperience[]
};

export const REVIEWS_DATA: Review[] = [
  {
    id: 1,
    name: '이수진',
    role: '마케터 3년차',
    rating: 5,
    content: '데이터를 볼 줄 모르는 문과생이라 두려움이 컸는데, 강사님의 눈높이 교육 덕분에 이제 GA4를 자유자재로 다룹니다. 업무 효율이 200% 올랐어요!',
    date: '2023.10.15',
    image: 'https://picsum.photos/seed/user1/100/100'
  },
  {
    id: 2,
    name: '박준형',
    role: 'PM 5년차',
    rating: 5,
    content: '이론만 가르치는 강의가 아닙니다. 당장 내일 써먹을 수 있는 SQL 쿼리를 짤 수 있게 되었습니다. 커리어 전환을 고민하신다면 강력 추천합니다.',
    date: '2023.11.02',
    image: 'https://picsum.photos/seed/user2/100/100'
  },
  {
    id: 3,
    name: '최민지',
    role: '신입 기획자',
    rating: 4,
    content: '퇴근 후 듣기 힘들 줄 알았는데, 수업이 너무 재밌어서 시간 가는 줄 몰랐습니다. 특히 네트워킹 시간이 정말 유익했어요.',
    date: '2023.11.20',
    image: 'https://picsum.photos/seed/user3/100/100'
  },
  {
    id: 4,
    name: '정현우',
    role: '영업팀 대리',
    rating: 5,
    content: '숫자로 설득하는 법을 배우고 나서 매출 보고 시간이 두렵지 않습니다. 팀장님께 칭찬받았어요!',
    date: '2023.12.05',
    image: 'https://picsum.photos/seed/user4/100/100'
  }
];

export const PRICING_OPTIONS: PricingOption[] = [
  {
    id: 'basic',
    name: '베이직 (VOD Only)',
    price: 150000,
    originalPrice: 200000,
    features: ['전체 강의 VOD 무제한 시청', '강의안 PDF 제공', '수료증 발급'],
    isPopular: false
  },
  {
    id: 'standard',
    name: '스탠다드 (Live + VOD)',
    price: 350000,
    originalPrice: 450000,
    features: ['베이직 모든 혜택', '주 1회 오프라인/라이브 강의', '과제 1:1 피드백', '커뮤니티 초대'],
    isPopular: true
  },
  {
    id: 'premium',
    name: '프리미엄 (1:1 코칭)',
    price: 600000,
    originalPrice: 800000,
    features: ['스탠다드 모든 혜택', '강사 1:1 커리어 코칭(2회)', '포트폴리오 첨삭', '시크릿 네트워킹 파티'],
    isPopular: false
  }
];
