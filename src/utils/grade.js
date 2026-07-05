import { grades } from "../data/grade";

export function getGrade(score) {
  return grades.find((g) => score >= g.min && score <= g.max) ?? grades[0];
}

// 배열을 무작위로 섞은 뒤 count개만 잘라서 반환하는 함수
export function getRandomQuestions(pool, count = 10) {
  const shuffled = [...pool];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled.slice(0, count);
}
