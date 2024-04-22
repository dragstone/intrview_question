/**
 * Que: Write a function that calculates overtime and pay associated with overtime. Working 9 to 5: regular hours
 * After 5pm is overtime Your function gets an array with 4 values: Start of working day, in decimal format,
 * (24-hour day notation) End of working day. (Same format) Hourly rate Overtime multiplier Your function should spit out:
 * $ + earned that day (rounded to the nearest hundreth) overTime([16, 18, 30, 1.8]) ➞ "$84.00" example explained:
 * From 16 to 17 is regular, so 1 * 30 = 30 From 17 to 18 is overtime, so 1 * 30 * 1.8 = 54 30 + 54 = $84.00
 */

function overTime(workHours) {
  const startHour = workHours[0];
  const endHour = workHours[1];
  const hourlyRate = workHours[2];
  const overtimeMultiplier = workHours[3];

  const regularHours = Math.min(17, endHour) - startHour;
  const overtimeHours = Math.max(0, endHour - 17);

  const regularPay = regularHours * hourlyRate;
  const overtimePay = overtimeHours * hourlyRate * overtimeMultiplier;

  const totalPay = regularPay + overtimePay;

  return "$" + totalPay.toFixed(2);
}

const result = overTime([16, 18, 30, 1.8]);
console.log(result); // Output: "$84.00"
