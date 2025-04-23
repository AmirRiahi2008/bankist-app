export function formattedTime(date, locale) {
  const calcDate = (date2, date1) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const displayTime = calcDate(new Date(), date);
 
  if (displayTime === 0) return "Today";
  if (displayTime === 1) return "Yeterday";
  if (displayTime <= 7) return `${displayTime} days ago`;

  return new Intl.DateTimeFormat(locale).format(date);
}
