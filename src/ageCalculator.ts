import { addMonth, addYear, diffDays, diffMonths, diffYears } from "@formkit/tempo";
import { displayResults } from "./displayResults";

export const ageCalculator = ( dateInput:Date ) => {

  // Gets today's date
  
  const dateToday:Date = new Date();

  // Calculate the year difference

  const yearOutput:number = diffYears( dateToday, dateInput );

  // Calculate the months difference

  const monthsLeft:Date = addYear( dateInput, yearOutput )
  const monthsOutput:number = diffMonths( dateToday, monthsLeft );

  // Calculate the days difference

  const daysLeft:Date = addMonth( monthsLeft, monthsOutput );
  const daysOutput:number = diffDays( dateToday, daysLeft );

  // Call the displayResults module that modifies the DOM

  displayResults( yearOutput, monthsOutput, daysOutput );
}