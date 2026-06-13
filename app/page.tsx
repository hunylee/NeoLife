const navItems = [
  { label: "서비스", href: "#service" },
  { label: "시장", href: "#market" },
  { label: "비즈니스", href: "#business" },
  { label: "투자", href: "#investment" },
];

const metrics = [
  ["5,000억+", "디지털 운세 시장"],
  ["37조+", "인테리어 시장"],
  ["80%", "MZ 이용자 비중"],
  ["111억", "3년차 매출 목표"],
];

const serviceCards = [
  ["AI 통합 분석", "이름, 생년월일, MBTI, 혈액형, 관상, 아파트 도면을 하나의 분석 흐름으로 연결합니다."],
  ["라이프 코칭", "초개인화 리포트와 일일 행동 미션으로 연애, 커리어, 인간관계 코칭을 제공합니다."],
  ["풍수 인테리어", "오행과 도면 좌표를 결합해 컬러, 소재, 가구 배치, 풍수 소품을 추천합니다."],
];

const businessCards = [
  ["B2C 리포트", "9,900~29,000원/건"],
  ["AI 구독", "7,900~12,900원/월"],
  ["커머스 수수료", "판매가의 10~20%"],
  ["B2B API", "월 500만~5,000만원"],
];

export default function Home() {
  return (
    <main>
      <header className="header">
        <a className="brand" href="#top">
          NeoLife AI
        </a>
        <nav aria-label="Main menu">
          {navItems.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <section className="hero" id="top">
        <p className="eyebrow">Investment Deck 2026</p>
        <h1>가장 나다운 삶을 설계하는 AI 라이프케어 플랫폼</h1>
        <p className="lead">
          NeoLife AI는 운세, 성향, 관상, 주거 도면, 풍수 인테리어를 통합 분석해 개인화 리포트와
          커머스 추천까지 연결합니다.
        </p>
        <div className="metrics" aria-label="Key investment metrics">
          {metrics.map(([value, label]) => (
            <article key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="service">
        <div className="section-title">
          <span>서비스</span>
          <h2>분석에서 행동, 공간, 구매까지 한 번에</h2>
        </div>
        <div className="cards three">
          {serviceCards.map(([title, body]) => (
            <article className="card" key={title}>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section split" id="market">
        <div>
          <span>시장</span>
          <h2>디지털 운세 5,000억 × 인테리어 37조 교차점</h2>
        </div>
        <p>
          고비용 풍수 상담, 분리된 사주·MBTI 정보, 이커머스 미연결 문제를 AI 기반 원스톱
          플랫폼으로 해결합니다. MZ 자기이해 트렌드와 공간 맞춤 소비가 만나는 시장입니다.
        </p>
      </section>

      <section className="section" id="business">
        <div className="section-title">
          <span>비즈니스</span>
          <h2>4중 수익 구조로 확장</h2>
        </div>
        <div className="cards four">
          {businessCards.map(([title, body]) => (
            <article className="card compact" key={title}>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section investment" id="investment">
        <span>투자</span>
        <h2>Seed 4~5억 원으로 MVP와 초기 시장 검증</h2>
        <p>
          특허 출원 10-2026-0034858, 10-2026-0078271 기반으로 18~24개월 BEP와 3년차
          영업이익률 25~30%를 목표로 합니다.
        </p>
        <div className="cta">
          <strong>문의: 010-7370-8381 김종호</strong>
        </div>
      </section>
    </main>
  );
}
