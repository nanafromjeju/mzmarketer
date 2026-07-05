// 점수 구간별 등급 정보
// min/max: 해당 등급에 해당하는 점수 범위 (양 끝 포함)
// 구간을 바꾸거나 등급을 추가/삭제해도 utils/getGrade.js 로직은 그대로 동작합니다.
export const grades = [
  {
    id: "intern",
    label: "인턴냥",
    min: 0,
    max: 3,
    comment: "아직은 낯선 용어가 많아요. 마케팅 용어 사전을 자주 펼쳐보세요.",
  },
  {
    id: "junior",
    label: "주니어냥",
    min: 4,
    max: 7,
    comment: "절반 이상은 익숙해졌어요! 조금만 더 하면 마케터냥이에요.",
  },
  {
    id: "marketer",
    label: "마케터냥",
    min: 8,
    max: 10,
    comment: "마케팅 용어 마스터! 이 정도면 마케터냥 명함 파도 되겠어요.",
  },
];
