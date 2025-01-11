export const getDataForm = ( event:any ):Date => {

  // Prevents browser refresh
  event.preventDefault();

  // Get inputs from the Form
  const formData = new FormData(event.target);

  const day = formData.get('day-input');
  const month = formData.get('month-input');
  const year = formData.get('year-input');

  // Returns the input in a Date format
  return new Date(`${year}-${month}-${day}`);
}