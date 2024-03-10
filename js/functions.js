const MS_PER_MINUTE = 60000;
const isMeetingDuringWork = (workStart, workEnd, meetingStart, meetingDuration) => {
  const workStartDate = new Date(`March 9, 2024 ${workStart}`);
  const workEndDate = new Date(`March 9, 2024 ${workEnd}`);
  const meetingStartDate = new Date(`March 9, 2024 ${meetingStart}`);
  const meetingEndDate = new Date(meetingStartDate.getTime() + meetingDuration * MS_PER_MINUTE);

  return meetingStartDate >= workStartDate && meetingEndDate <= workEndDate;
};

isMeetingDuringWork('08:00', '09:0', '8:55', 4);
isMeetingDuringWork('8:0', '10:0', '8:0', 120);
isMeetingDuringWork('08:00', '14:30', '14:00', 90);
isMeetingDuringWork('14:00', '17:30', '08:0', 90);
isMeetingDuringWork('8:00', '17:30', '08:00', 900);

const isStringLengthValid = (str, maxLength) =>
  str.length <= maxLength;

const isPalindrome = (str) => {
  const normalizedStr = str.toLowerCase().replaceAll(' ','');
  const reversedStr = normalizedStr.split('').reverse().join('');
  return normalizedStr === reversedStr;
};

const getNumber = (value) => {
  const strNumbers = value.toString().match(/[0-9]/g);
  return (strNumbers) ? Number(strNumbers.join('')) : NaN;
};

isStringLengthValid('проверяемая строка', 20);
isStringLengthValid('проверяемая строка', 18);
isStringLengthValid('проверяемая строка', 10);

isPalindrome('топот');
isPalindrome('ДовОд');
isPalindrome('Кекс');
isPalindrome('Лёша на полке клопа нашёл ');

getNumber('2023 год');
getNumber('ECMAScript 2022');
getNumber('1 кефир, 0.5 батона');
getNumber('агент 007');
getNumber('агент 007');
getNumber('а я томат');
getNumber(2023);
getNumber(-1);
getNumber(1.5);
