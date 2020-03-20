export function todaysDate(): string {
  const date = new Date();
  const dayOfWeek: string = dayOfTheWeekShort();
  const month: string = writtenShortMonth();
  const day: number = date.getDate();
  const year: number = date.getFullYear();

  const fullDate: string = `${dayOfWeek} ${month} ${day}, ${year}`;
  return fullDate;
}

export function todaysDateAlt(): string {
  const date = new Date().toDateString();
  const length = date.length;
  const d = date.substr(0, length - 5);
  const year: number = new Date().getFullYear();
  return `${d}, ${year}`;
}

export function currentTime(): string {
  const date = new Date();
  const hours = amPmTime();
  let minsNum = date.getMinutes();
  let mins: string = `${minsNum}`;

  if (minsNum.toString().split("").length !== 2) {
    mins = `0${minsNum}`;
  }
  const time = `${hours[0]}:${mins} ${hours[1]}`;
  return time;
}

export function currentDate(): string {
  const d = new Date();
  let month = addZero(d.getMonth() + 1);
  let day = addZero(d.getDate());
  let currDate = `${d.getFullYear()}-${month}-${day}`;
  return currDate;
}

function addZero(num: number) {
  if (num.toString().length < 2)
    // Integer of less than two digits
    return "0" + num; // Prepend a zero!
  return num.toString(); // return string for consistency
}

function amPmTime(): any {
  const date = new Date();
  const hours = date.getHours() > 11 ? date.getHours() - 12 : date.getHours();
  const amPm: string = date.getHours() > 11 ? "PM" : "AM";

  return [hours, amPm];
}

function writtenShortMonth(): string {
  const date = new Date();
  let month = [];
  month[0] = "Jan";
  month[1] = "Feb";
  month[2] = "Mar";
  month[3] = "April";
  month[4] = "May";
  month[5] = "Jun";
  month[6] = "July";
  month[7] = "Aug";
  month[8] = "Sept";
  month[9] = "Oct";
  month[10] = "Nov";
  month[11] = "Dec";
  return month[date.getMonth()];
}

function dayOfTheWeekShort(): string {
  const date = new Date();
  let day = [];
  day[0] = "Sun";
  day[1] = "Mon";
  day[2] = "Tue";
  day[3] = "Wed";
  day[4] = "Thurs";
  day[5] = "Fri";
  day[6] = "Sat";
  return day[date.getDay()];
}
