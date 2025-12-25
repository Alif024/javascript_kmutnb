const names = ['Justin', 'Sarah', 'Christopher']
for (let index = 0; index < names.length; index++) {
  console.log(names[index]);
}

names.forEach(myFunction);
function myFunction(name) {
  console.log(name);
}

for (let name of names) {
  console.log(name);
}