export type PageContent = {
  id: number;
  title: string;
  content: string;
};

export type PageCategory = {
  name: string;
  pages: PageContent[];
};

export const pagesConfig: PageCategory[] = [
  {
    name: "Introduction",
    pages: [
      { id: 1, title: "Vision & Identity", content: "NeoLife AI: 가장 나 다운 삶을 설계하는 혁신 플랫폼. 이름, 생년월일, MBTI, 혈액형, 풍수 인테리어 분석 기반 개인화 LifeCare & E-commerce 통합 플랫폼." },
      { id: 2, title: "Executive Summary", content: "투자 핵심 요약: 문제(시장 공백), 솔루션(AI 통합 분석), 시장(디지털 운세 x 인테리어 교차점), 수익(다층 구조), 투자(Seed 4~5억 원)." }
    ],
  },
  {
    name: "Market & Problem",
    pages: [
      { id: 3, title: "Digital Fortune Market", content: "디지털 운세 · Soul-Tech 시장의 진화. 5,000억+ 규모 성장 및 AI 전환 가속. MZ세대 중심의 자기이해 열풍." },
      { id: 4, title: "Interior & Feng Shui Market", content: "37조 인테리어 × 풍수 초개인화 시장. 홈스타일링 핵심 차별화 요소로 부상 중." },
      { id: 5, title: "Problem Definition", content: "시장의 명확한 공백: 고비용 전문가 의존, 파편화된 정보, 이커머스 미연결 문제 해결." }
    ],
  },
  {
    name: "Solution & Service",
    pages: [
      { id: 6, title: "Core Solution", content: "6가지 데이터를 AI로 통합 분석 (이름, 사주, MBTI, 혈액형, 도면, 관상). AI 코칭 및 커머스 연동." },
      { id: 7, title: "Service Flow", content: "데이터 입력 → AI 통합 분석 → 결과 & 코칭 → 이커머스 연동 (4단계 원스톱 경험)." },
      { id: 8, title: "Target Audience", content: "20~30대 자기계발·연애 세그먼트 중심. 높은 지불 의향과 바이럴 가능성 보유." }
    ],
  },
  {
    name: "Strategy & Roadmap",
    pages: [
      { id: 9, title: "Growth Strategy", content: "[Page 9 Content - Placeholder]" },
      { id: 10, title: "Expansion Plan", content: "[Page 10 Content - Placeholder]" },
      { 
        id: 14, 
        title: "3-Year Roadmap", 
        content: "MVP 출시 → 스케일업 & 커머스 확대 → 글로벌 확장 & IPO 로드맵." 
      },
      { id: 15, title: "Investment Plan", content: "Seed 4~5억 원 투자 유치 계획. 시스템 개발(40%), 마케팅(25%), 운영(30%) 활용 계획." }
    ],
  },
  {
    name: "Tech & Team",
    pages: [
      { id: 16, title: "Technology & Patents", content: "특허 출원 2건 (개인화 코칭 및 AI 풍수 인테리어 추천 시스템). 독자적 알고리즘 및 데이터 확보." },
      { id: 17, title: "Future Outlook", content: "글로벌 라이프케어 플랫폼으로 도약. 일본, 대만, 중국 등 아시아 풍수 문화권 공략 계획." },
      { id: 18, title: "Investment Points", content: "교차 시장 선점, 특허 기반 진입장벽, 다층 수익 구조, 글로벌 확장성 및 데이터 자산 가치." },
      { id: 19, title: "Team & Network", content: "CEO(사업 총괄), CTO(AI 개발) 및 명리학 전문가/커머스 파트너십 네트워크 구성." }
    ],
  },
  {
    name: "Contact",
    pages: [
      { id: 20, title: "Closing", content: "NeoLife AI: 가장 나다운 삶을 설계하는 혁신 플랫폼. 문의: 010-7370-8381 (김종호)." }
    ],
  },
];

// Helper to generate all possible pages up to 20 for the navigation/routing structure
const allPages = [];
for (let i = 1; i <= 20; i++) {
  const foundPage = pagesConfig.flatMap(cat => cat.pages).find(p => p.id === i);
  if (foundPage) {
    allPages.push(foundPage);
  } else {
    allPages.push({ id: i, title: `Page ${i}`, content: "[Visual/Image Content - Placeholder]" });
  }
}

export const allPages = allPages;
