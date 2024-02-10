import { differenceInCalendarDays, differenceInCalendarMonths, differenceInCalendarYears } from 'date-fns';

export const calculateDatesDifference = (hireDate: Date) => {
  const currentDate = new Date();
  const targetDate = new Date(hireDate)

  const yearsDifference = differenceInCalendarYears(currentDate, targetDate);
  const monthsDifference = differenceInCalendarMonths(currentDate, targetDate);
  const daysDifference = differenceInCalendarDays(currentDate, targetDate);

  const formattedDiff = `${yearsDifference}y - ${monthsDifference % 12}m - ${daysDifference % 30}d`;

  return formattedDiff;
}