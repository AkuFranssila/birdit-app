import { isValid, format, isSameDay } from 'date-fns';

export function formatEventStartDate(start, end) {
  const startDate = new Date(start);
  const endDate = new Date(end);

  if (isValid(startDate) && isValid(endDate)) {
    if (!isSameDay(startDate, endDate)) {
      return `${format(startDate, 'dd/mm/yyyy • HH:mm')} - ${format(
        endDate,
        'dd/mm/yyyy'
      )}`;
    } else {
      return `${format(startDate, 'dd/mm/yyyy • HH:mm')} - ${format(
        endDate,
        'HH:mm'
      )}`;
    }
  } else if (isValid(startDate)) {
    return format(startDate, 'dd/mm/yyyy • HH:mm');
  }
  return '';
}
