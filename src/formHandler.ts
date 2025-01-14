import { ageCalculator } from "./ageCalculator";

export const getDataForm = ( event:any ):void => {

  // Prevents browser refresh
  event.preventDefault();

  // Get inputs from the Form
  const formData = new FormData(event.target);

  const day:number = Number(formData.get('day-input'));
  const month:number = Number(formData.get('month-input'));
  const year:number = Number(formData.get('year-input'));

  // Returns the input in a Date format
  const dateInput:Date = new Date(`${year}-${month}-${day}`);

  ageCalculator( dateInput );
}