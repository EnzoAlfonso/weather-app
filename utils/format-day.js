const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const DAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

export function getDate(date) {
  if (date > 3 && date < 21) return `${date}th`;
  switch (date % 10) {
    case 1:
      return `${date}st`;
      break;
    case 2:
      return `${date}nd`;
      break;
    case 3:
      return `${date}rd`;
      break;
    default:
      return `${date}th`;
      break;
  }
}

export function getMonth(month) {
  return MONTHS[month];
}

export function modifyDays(daily) {
  const date = new Date();
  const today = date.getDay();
  let counter = today;
  daily.forEach(element => {
    if (counter === 6) {
      element['day'] = counter;
      counter = 0;
    } else {
      element['day'] = counter;
      counter++;
    }
  });
  return daily;
}

export function getDay(day) {
  return DAYS[day];
}
