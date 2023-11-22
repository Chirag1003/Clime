import { MONTHS, DAYS } from "./AllConstant";

const date = new Date();

export function getDayMonth() {
  const month = MONTHS[date.getMonth()].slice(0, 3);
  const day = date.getDate();

  return day + " " + month;
}

export function transformDateFormat() {
  const month = date.toLocaleString("en-US", { month: "2-digit" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const year = date.getFullYear();
  const time = date.toLocaleString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
  });

  const newFormatDate = year.toString().concat("-", month, "-", day, " ", time);
  return newFormatDate;
}

export function getWeekDays() {
  const day = new Date().getDay();
  const days = DAYS.slice(day, DAYS.length).concat(DAYS.slice(0, day));
  return days;
}
