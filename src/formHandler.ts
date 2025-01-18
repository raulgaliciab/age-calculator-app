import { ageCalculator } from "./ageCalculator";
import { isDateValid } from "./isDateValid";
import { isFormFilled } from "./isFormFilled";
import { isInputValid } from "./isInputValid";

export const getDataForm = ( event:any ):void => {

  // Prevents browser refresh
  event.preventDefault();

  // Get inputs from the Form
  const formData = new FormData(event.target);

  const day:number = Number(formData.get('day-input'));
  const month:number = Number(formData.get('month-input'));
  const year:number = Number(formData.get('year-input'));


  // Is the form filled?

  if ( !isFormFilled( day, month, year )) {
    return;
  }
  

  // Are the individual inputs valid?

  if ( !isInputValid( day, month, year ) ) {
    return;
  }

  // Is a valid Date?
  
  if ( !isDateValid( day, month, year ) ) {
    return;
  }

  // Saves the input in a Date format
  const dateInput:Date = new Date(`${year}-${month}-${day}`);

  ageCalculator( dateInput );
}