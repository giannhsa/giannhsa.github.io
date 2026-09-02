export const ANNIVERSARY_DATE = new Date(2026, 4, 2);

export function isMonthlyAnniversary(date = new Date()) {
  return date >= ANNIVERSARY_DATE && date.getDate() === ANNIVERSARY_DATE.getDate();
}

export function getNextMonthlyAnniversary(date = new Date()) {
  if (date < ANNIVERSARY_DATE) return new Date(ANNIVERSARY_DATE);

  const year = date.getFullYear();
  const month = date.getMonth();
  const anniversaryDay = ANNIVERSARY_DATE.getDate();

  if (date.getDate() < anniversaryDay) {
    return new Date(year, month, anniversaryDay);
  }

  return new Date(year, month + 1, anniversaryDay);
}

export function getRelationshipStats(date = new Date()) {
  const elapsedMilliseconds = Math.max(0, date.getTime() - ANNIVERSARY_DATE.getTime());
  const days = Math.floor(elapsedMilliseconds / 86400000);
  let months =
    (date.getFullYear() - ANNIVERSARY_DATE.getFullYear()) * 12 +
    date.getMonth() -
    ANNIVERSARY_DATE.getMonth();

  if (date.getDate() < ANNIVERSARY_DATE.getDate()) months -= 1;

  return { days, months: Math.max(0, months) };
}
