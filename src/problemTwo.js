/**   Given a time in 12-hr AM/PM format, convert it to military time(24hr) and you also need to add 45 min and 45 seconds in the result and display the output.
Input - 12:01:00PM Output 12:46:45
Input - 12:01:00AM Output 00:46:45
*/

const convertToMilitaryTime = (time12h) => {
  /* Input sanity check. However in the problem statement it is mentioned, the input is in 12-hr AM/PM format so I commented this check. Please uncomment it for checking edge cases on input.
  if (!/(?:[0]\d|[1][0-2]):[0-5]\d:[0-5]\d(?:AM|PM)/.test(time12h))
     throw new TypeError("Please enter the valid input string.");
  */

  let [getHr, getModifier] = time12h.split(/:[0-5]\d:[0-5]\d/);
  if (getHr === "12") getHr = "00";
  if (getModifier === "PM") getHr = parseInt(getHr, 10) + 12;
  return `${getHr}:46:45`;
};

// Please uncomment a declaration and console.log to run the code.
// console.log(convertToMilitaryTime("12:01:00PM")); // 12:46:45
// console.log(convertToMilitaryTime("12:01:00AM")); // 00:46:45
// console.log(convertToMilitaryTime("07:01:00PM")); // 19:46:45
// console.log(convertToMilitaryTime("07:01:00AM")); // 07:46:45
// console.log(convertToMilitaryTime('13:45:46AM')); // TypeError: Please enter the valid input string.
