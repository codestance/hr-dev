import { Account } from "../types/types";

export const loadFromStorage = (key: string): Account => {
  const item = window.sessionStorage.getItem(key);
  return item != null ? JSON.parse(item) : null;
};

export const getWorkingDays = (start: Date, end: Date) => {
  let count = 0;
  const curr = new Date(start.getTime());
  while (curr <= end) {
    const dayOfWeek = curr.getDay();
    console.log(curr, dayOfWeek);
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      count++;
      console.log("count", count);
    }
    curr.setDate(curr.getDate() + 1);
  }
  return count;
};
