// 문제 데이터 풀 (전체 30개)
// 실제 퀴즈에서는 utils/getRandomQuestions.js를 통해 이 중 일부만 무작위로 뽑혀 출제됩니다.
//
// id: 고유 식별자
// title: 문제 텍스트
// options: 보기 배열 (화면에 보여줄 순서 그대로)
// answerIndex: 정답 보기의 인덱스 (0부터 시작)
export const questions = [
  {
    id: 1,
    title: '"CVR"이 뜻하는 것은?',
    options: ["전환율", "클릭율", "노출수", "이탈율"],
    answerIndex: 0,
  },
  {
    id: 2,
    title: '"CPC"가 의미하는 것은?',
    options: ["노출당 비용", "클릭당 비용", "전환당 비용", "설치당 비용"],
    answerIndex: 1,
  },
  {
    id: 3,
    title: '"CTR"이 의미하는 것은?',
    options: ["전환율", "재방문율", "클릭률", "이탈률"],
    answerIndex: 2,
  },
  {
    id: 4,
    title: '"ROAS"가 뜻하는 것은?',
    options: [
      "고객 생애 가치",
      "월간 활성 사용자",
      "총 방문자 수",
      "광고비 대비 매출액",
    ],
    answerIndex: 3,
  },
  {
    id: 5,
    title: '"LTV"가 의미하는 것은?',
    options: ["고객 생애 가치", "월간 활성 사용자", "이탈률", "전환당 비용"],
    answerIndex: 0,
  },
  {
    id: 6,
    title: '"CAC"가 뜻하는 것은?',
    options: [
      "광고 클릭 수",
      "고객 획득 비용",
      "구매 전환율",
      "장바구니 포기율",
    ],
    answerIndex: 1,
  },
  {
    id: 7,
    title: '"KPI"가 의미하는 것은?',
    options: [
      "키워드 성과 지표",
      "클릭 성과 지표",
      "핵심 성과 지표",
      "고객 만족 지수",
    ],
    answerIndex: 2,
  },
  {
    id: 8,
    title: '"MAU"가 뜻하는 것은?',
    options: [
      "일일 활성 사용자 수",
      "신규 가입자 수",
      "최대 접속자 수",
      "월간 활성 사용자 수",
    ],
    answerIndex: 3,
  },
  {
    id: 9,
    title: "마케팅 퍼널(Funnel)에서 가장 아래(최종) 단계는?",
    options: ["구매/전환", "인지", "관심", "고려"],
    answerIndex: 0,
  },
  {
    id: 10,
    title: '"UTM"의 주된 용도는?',
    options: ["가격 책정", "유입 경로 추적", "이메일 발송", "재고 관리"],
    answerIndex: 1,
  },
  {
    id: 11,
    title: '"MDF(Marketing Development Fund)"란?',
    options: [
      "영업 파이프라인 관리 툴",
      "고객 만족도 조사 방식",
      "파트너사의 마케팅 활동을 지원하는 자금",
      "브랜드 로고 사용 규정",
    ],
    answerIndex: 2,
  },
  {
    id: 12,
    title: '"ABM(Account-Based Marketing)"이란?',
    options: [
      "불특정 다수 대상 대량 마케팅",
      "특정 타겟 기업을 정해 맞춤형으로 진행하는 마케팅",
      "검색엔진 최적화 기법",
      "이메일 자동 발송 시스템",
    ],
    answerIndex: 1,
  },
  {
    id: 13,
    title: '"ISV(Independent Software Vendor)"란?',
    options: [
      "독립 소프트웨어 벤더",
      "내부 영업팀",
      "투자 유치 단계",
      "고객 지원 부서",
    ],
    answerIndex: 0,
  },
  {
    id: 14,
    title: '"MQL(Marketing Qualified Lead)"이란?',
    options: [
      "영업팀이 최종 승인한 리드",
      "결제까지 완료한 고객",
      "마케팅 활동을 통해 관심도가 검증된 리드",
      "이탈 위험이 높은 고객",
    ],
    answerIndex: 2,
  },
  {
    id: 15,
    title: '마케팅에서 "SQL(Sales Qualified Lead)"이란?',
    options: [
      "영업팀이 검증해 실제 상담이 가능한 리드",
      "데이터베이스 쿼리 언어",
      "이메일 구독자",
      "단순 웹사이트 방문자",
    ],
    answerIndex: 0,
  },
  {
    id: 16,
    title: '"B2B"가 의미하는 것은?',
    options: [
      "기업과 소비자 간 거래",
      "기업과 기업 간 거래",
      "정부와 기업 간 거래",
      "소비자 간 거래",
    ],
    answerIndex: 1,
  },
  {
    id: 17,
    title: '"SaaS"가 의미하는 것은?',
    options: [
      "서비스형 소프트웨어",
      "판매형 소프트웨어",
      "오프라인 설치형 소프트웨어",
      "개발자 전용 소프트웨어",
    ],
    answerIndex: 0,
  },
  {
    id: 18,
    title: '"Churn(이탈률)"이 의미하는 것은?',
    options: [
      "신규 고객 유입률",
      "일정 기간 내 고객이 이탈하는 비율",
      "재구매율",
      "평균 구매 금액",
    ],
    answerIndex: 1,
  },
  {
    id: 19,
    title: '"NPS(고객 순추천지수)"가 측정하는 것은?',
    options: [
      "다른 사람에게 추천할 의향",
      "순수 이익률",
      "신규 방문자 수",
      "네트워크 성과 점수",
    ],
    answerIndex: 0,
  },
  {
    id: 20,
    title: '영업에서 "파이프라인(Pipeline)"이란?',
    options: [
      "완료된 거래 목록",
      "진행 중인 영업 거래를 단계별로 정리한 흐름",
      "마케팅 예산 배분표",
      "고객 문의 내역",
    ],
    answerIndex: 1,
  },
  {
    id: 21,
    title: '"ARR(Annual Recurring Revenue)"이란?',
    options: ["월간 반복 매출", "연간 반복 매출", "총 매출", "순이익"],
    answerIndex: 1,
  },
  {
    id: 22,
    title: '"MRR(Monthly Recurring Revenue)"이란?',
    options: ["월간 반복 매출", "연간 반복 매출", "일회성 매출", "광고 매출"],
    answerIndex: 0,
  },
  {
    id: 23,
    title: '"리드 너처링(Lead Nurturing)"이란?',
    options: [
      "잠재고객을 단계적으로 육성해 구매로 유도하는 과정",
      "신규 리드를 즉시 영업팀에 전달하는 것",
      "리드 데이터를 삭제하는 작업",
      "광고 타겟팅 알고리즘",
    ],
    answerIndex: 0,
  },
  {
    id: 24,
    title: '"디맨드젠(Demand Generation)"이란?',
    options: [
      "기존 고객 리텐션 관리",
      "시장의 수요와 관심을 만들어내는 마케팅 활동",
      "가격 협상 전략",
      "재고 수요 예측",
    ],
    answerIndex: 1,
  },
  {
    id: 25,
    title: '영업의 "Win Rate"란?',
    options: [
      "영업 기회 중 실제 계약으로 이어진 비율",
      "광고 클릭 성공률",
      "이메일 오픈율",
      "고객 만족도",
    ],
    answerIndex: 0,
  },
  {
    id: 26,
    title: '"콜드 아웃리치(Cold Outreach)"란?',
    options: [
      "기존 고객 대상 리마인드 메일",
      "사전 관계가 없는 대상에게 처음으로 접촉하는 것",
      "이탈 고객 재유치 캠페인",
      "내부 팀 커뮤니케이션",
    ],
    answerIndex: 1,
  },
  {
    id: 27,
    title: '마케팅에서 "페르소나(Persona)"란?',
    options: [
      "가상의 대표 고객 프로필",
      "실제 고객 명단",
      "경쟁사 분석 보고서",
      "브랜드 로고 가이드라인",
    ],
    answerIndex: 0,
  },
  {
    id: 28,
    title: '"콘텐츠 신디케이션(Content Syndication)"이란?',
    options: [
      "자체 채널에만 콘텐츠 게시",
      "제3자 채널을 통해 콘텐츠를 배포하는 것",
      "콘텐츠 저작권 등록",
      "콘텐츠 삭제 정책",
    ],
    answerIndex: 1,
  },
  {
    id: 29,
    title: '"코마케팅(Co-marketing)"이란?',
    options: [
      "경쟁사 견제 전략",
      "파트너사와 함께 진행하는 공동 마케팅",
      "단독 브랜드 캠페인",
      "내부 직원 대상 마케팅",
    ],
    answerIndex: 1,
  },
  {
    id: 30,
    title: '"TAM(Total Addressable Market)"이란?',
    options: [
      "특정 캠페인의 예산",
      "해당 시장에서 확보 가능한 최대 규모",
      "팀 내부 목표 지표",
      "고객 평균 구매 주기",
    ],
    answerIndex: 1,
  },
];
