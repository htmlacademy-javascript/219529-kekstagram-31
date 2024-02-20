const checkStringLength = (str, maxLength) =>
  str.length <= maxLength;

const checkPalindrome = (str) => {
  const spacelessStr = str.toLowerCase().replaceAll(' ','');
  const reversedStr = spacelessStr.split('').reverse().join('');
  return spacelessStr === reversedStr;
};

const getNumber = (str) => {
  const strNumbers = str.toString().match(/[0-9]/g);
  return (strNumbers) ? Number(strNumbers.join('')) : NaN;
};

checkStringLength('abc',1);
checkPalindrome('abc');
getNumber('123');

