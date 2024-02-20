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
