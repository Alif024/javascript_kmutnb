const checked_status_if = (status) => {
  if (status === 200) {
    return "OK";
  } else if (status === 404) {
    return "Error";
  } else {
    return "Unknown";
  }
};

const checked_status_switch = (status) => {
  switch (status) {
    case 200:
      return "OK";
    case 404:
      return "Error";
    default:
      return "Unknown";
  }
};

const checked_status_ternary = (status) => {
  const message = status === 200 ? "OK" : status === 404 ? "Error" : "Unknown";
  return message;
};


console.log(checked_status_if(200)); // OK
console.log(checked_status_switch(404)); // Error
console.log(checked_status_ternary(500)); // Unknown