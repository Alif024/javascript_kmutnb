function yayOrNay() {
  return new Promise((resolve, reject) => {
    const val = Math.round(Math.random() * 1);
    console.log("Generated value:", val);
    val ? resolve('Lucky!!') : reject('Nope! 😝');
  });
};

async function msg() {
  try {
    const msg = await yayOrNay();
    console.log(msg);
  } catch (err) {
    console.log(err);
  }
};

msg();
msg();
msg();

// Possible Output:
// Generated value: 1
// Generated value: 2
// Generated value: 3
// Lucky!!
// Nope! 😝
// Lucky!!