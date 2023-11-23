import { Months, Days } from "./AllConstant";

const date = new Date();

// Return a string representing day and month - "15 Jan" 
export function getDayMonth() {
  const month = Months[date.getMonth()].slice(0, 3);
  const day = date.getDate();

  return day + " " + month;
}

// Return the date in format YYYY-MM-DD HH:MM:SS - "2024-01-15 12:20:45"
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

// Return an array of week days starting from the day after the current day. Suppose today is Thursday, then it will return -
// ['Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday']
export function getWeekDays() {
  const day = new Date().getDay();
  const days = Days.slice(day, Days.length).concat(Days.slice(0, day));
  return days;
}
