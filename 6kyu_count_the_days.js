// DESCRIPTION:
// Little Annie is very excited for upcoming events. She wants to know how many days she has to wait for a specific event.

// Your job is to help her out.

// Task: Write a function which returns the number of days from today till the given date. The function will take a Date object as parameter. You have to round the amount of days.

// If the event is in the past, return "The day is in the past!"
// If the event is today, return "Today is the day!"
// Else, return "x days"

function countDays(d) {
    let date = Date.parse(d);
    let today = Date.parse(new Date());
  
    const oneDay = 24 * 60 * 60 * 1000;
    let countDays = Math.round((date - today) / oneDay);
  
    if (countDays < 0) {
      return 'The day is in the past!';
    } else if (countDays == 0) {
      return 'Today is the day!'
    } else {
      return `${countDays} days`;
    }
}
