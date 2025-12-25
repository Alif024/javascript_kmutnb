const names = ['Taylor', 'Donald', 'Natasha'];

const announments = names.map(menubar => {
  return menubar + 'Joins the contest';
});

console.log(announments);


const keyArray = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
]

const reformattedArray = keyArray.map(({ key, value }) => ({ [key]: value }));
console.log(reformattedArray);
const notCorrectFormattedArray = keyArray.map(({ key, value }) => ({ key: value }));
console.log(notCorrectFormattedArray);