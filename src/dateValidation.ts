import { isAfter } from "@formkit/tempo";

export const dateValidation = ( day:number, month:number, year:number ):boolean => {

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

  // Validation for day

  if ( day < 1 || day > 31 ) {
    dayLabel!.classList.add('label-error');
    dayInput!.classList.add('input-error');
    dayError!.innerHTML = 'Must be a valid day';
    return false;
  }

  dayLabel!.classList.remove('label-error');
  dayInput!.classList.remove('input-error');
  dayError!.innerHTML = '';

  // Validation for month

  if ( month < 1 || month > 12 ) {
    monthLabel!.classList.add('label-error');
    monthInput!.classList.add('input-error');
    monthError!.innerHTML = 'Must be a valid month';
    return false;
  }

  monthLabel!.classList.remove('label-error');
  monthInput!.classList.remove('input-error');
  monthError!.innerHTML = '';

  // Validation for date in the past

  const inputDate = new Date( `${year}-${month}-${day}` );
  const currentDate = new Date();

  if ( isAfter( inputDate, currentDate ) ) {
    yearLabel!.classList.add('label-error');
    yearInput!.classList.add('input-error');
    yearError!.innerHTML = 'Must be in the past';
    return false;
  }

    yearLabel!.classList.remove('label-error');
    yearInput!.classList.remove('input-error');
    yearError!.innerHTML = '';

  // If none of the validation fails, returns true

  return true;
}