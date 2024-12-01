const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;
const MONTH = DAY * 31;
const YEAR = MONTH * 12;

const TIME_IN_MILLISECONDS = {
  SECOND,
  MINUTE,
  HOUR,
  DAY,
  MONTH,
  YEAR,
};

export default function getElapsedTime(createdAt: string | Date | undefined) {
  if (!createdAt) return 'Invalid date'; // createdAt이 undefined일 경우 예외 처리

  const now = new Date();
  const createdAtDate = new Date(createdAt);

  // 유효한 Date 객체인지 확인
  if (isNaN(createdAtDate.getTime())) return 'Invalid date';

  const elapsedTime = now.getTime() - createdAtDate.getTime();
  const { MINUTE, HOUR, DAY, MONTH, YEAR } = TIME_IN_MILLISECONDS;

  if (YEAR * 2 <= elapsedTime) {
    return `${Math.floor(elapsedTime / YEAR)} YEARs ago`;
  }
  if (YEAR <= elapsedTime) {
    return `1 YEAR ago`;
  }
  if (MONTH * 2 <= elapsedTime) {
    return `${Math.floor(elapsedTime / MONTH)} MONTHs ago`;
  }
  if (MONTH <= elapsedTime) {
    return `1 MONTH ago`;
  }
  if (DAY * 2 <= elapsedTime) {
    return `${Math.floor(elapsedTime / DAY)} DAYs ago`;
  }
  if (DAY <= elapsedTime) {
    return `1 DAY ago`;
  }
  if (HOUR * 2 <= elapsedTime) {
    return `${Math.floor(elapsedTime / HOUR)} HOURs ago`;
  }
  if (HOUR <= elapsedTime) {
    return `1 HOUR ago`;
  }
  if (MINUTE * 2 <= elapsedTime) {
    return `${Math.floor(elapsedTime / MINUTE)} MINUTEs ago`;
  }
  return `1 MINUTE ago`;
}
