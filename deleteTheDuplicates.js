deleteTheDuplicates = (arr) => {
  const finalArr = [];
  const withoutDuplicates = new Set(arr);
  withoutDuplicates.forEach((item) => finalArr.push(item));
  return finalArr;
};

window.dpd = deleteTheDuplicates;
