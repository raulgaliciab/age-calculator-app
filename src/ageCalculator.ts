import { addMonth, addYear, diffDays, diffMonths, diffYears } from "@formkit/tempo";

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


  console.table( {
    date: dateInput.toLocaleDateString(),
    years: yearOutput,
    months: monthsOutput,
    days: daysOutput
  } );
}