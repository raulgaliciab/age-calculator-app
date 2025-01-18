export const isFormFilled = ( day:number, month:number, year:number ):boolean => {

  // Queries for error handle in DOM

  const dayLabel = document.querySelector<HTMLInputElement>('#day-label');
  const dayInput = document.querySelector<HTMLInputElement>('#day-input');
  const dayError = document.querySelector<HTMLInputElement>('#day-error');

  const monthLabel = document.querySelector<HTMLInputElement>('#month-label');
  const monthInput = document.querySelector<HTMLInputElement>('#month-input');
  const monthError = document.querySelector<HTMLInputElement>('#month-error');

  const yearLabel = document.querySelector<HTMLInputElement>('#year-label');
  const yearInput = document.querySelector<HTMLInputElement>('#year-input');
  const yearError = document.querySelector<HTMLInputElement>('#year-error');

  // Validation for empty day

  if ( day === 0) {
    dayLabel!.classList.add('label-error');
    dayInput!.classList.add('input-error');
    dayError!.innerHTML = 'This field is required';

    return false;
  }

  dayLabel!.classList.remove('label-error');
  dayInput!.classList.remove('input-error');
  dayError!.innerHTML = '';

  // Validation for empty month

  if ( month === 0) {
    monthLabel!.classList.add('label-error');
    monthInput!.classList.add('input-error');
    monthError!.innerHTML = 'This field is required';

    return false;
  }

  monthLabel!.classList.remove('label-error');
  monthInput!.classList.remove('input-error');
  monthError!.innerHTML = '';

  // Validation for empty year

  if ( year === 0 ) {
    yearLabel!.classList.add('label-error');
    yearInput!.classList.add('input-error');
    yearError!.innerHTML = 'This field is required';

    return false;
  }

  yearLabel!.classList.remove('label-error');
  yearInput!.classList.remove('input-error');
  yearError!.innerHTML = '';

  return true;
}