import { MONTHS } from "./AllConstant";

const date = new Date();

export function transformDateFormat() {
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const month = MONTHS[date.getMonth()].slice(0, 3);
  const year = date.getFullYear();
  const time = date.toLocaleString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h12",
  });

  const DateTime = day
    .toString()
    .concat("-", month, "-", year, ", ", time);
  return DateTime;
}

export function getDayMonthFromDate() {
  const month = MONTHS[date.getMonth()].slice(0, 3);
  const day = date.getUTCDate();

  return day + " " + month;
}
