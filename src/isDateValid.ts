export const isDateValid = ( day:number, month:number, year:number ):boolean => {

  // Queries for error handle in DOM

  const dayLabel = document.querySelector<HTMLInputElement>('#day-label');
  const dayInput = document.querySelector<HTMLInputElement>('#day-input');
  const dayError = document.querySelector<HTMLInputElement>('#day-error');

  const monthLabel = document.querySelector<HTMLInputElement>('#month-label');
  const monthInput = document.querySelector<HTMLInputElement>('#month-input');

  const yearLabel = document.querySelector<HTMLInputElement>('#year-label');
  const yearInput = document.querySelector<HTMLInputElement>('#year-input');

  // Getting the full date

  const dateInput = new Date (`${year}-${month}-${day}`);

  // Verification for a valid Date

  if ( dateInput.getDay() !== day ||
      dateInput.getMonth() !== month ||
      dateInput.getFullYear() !== year ) {

    dayLabel!.classList.add('label-error');
    dayInput!.classList.add('input-error');
    dayError!.innerHTML = 'Must be a valid date';

    monthLabel!.classList.add('label-error');
    monthInput!.classList.add('input-error');

    yearLabel!.classList.add('label-error');
    yearInput!.classList.add('input-error');

    return false;
  }

  // If the date is valid, reset the error styles

  dayLabel!.classList.remove('label-error');
  dayInput!.classList.remove('input-error');
  dayError!.innerHTML = '';

  monthLabel!.classList.remove('label-error');
  monthInput!.classList.remove('input-error');

  yearLabel!.classList.remove('label-error');
  yearInput!.classList.remove('input-error');

  // If none of the validation fails, returns true
  
  return true;
}