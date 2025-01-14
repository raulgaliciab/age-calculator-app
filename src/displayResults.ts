export const displayResults = ( years:number, months:number, days:number ) => {

  // QuerySelectors for output

  const yearHTML = document.querySelector('#year-output');
  const monthHTML = document.querySelector('#month-output');
  const dayHTML = document.querySelector('#day-output');

  // Change DOM content

  if(yearHTML) yearHTML.innerHTML = `${years} `;
  if(monthHTML) monthHTML.innerHTML = `${months} `;
  if(dayHTML) dayHTML.innerHTML = `${days} `
}