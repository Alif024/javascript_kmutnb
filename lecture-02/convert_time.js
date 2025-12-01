const registrationDate = new Date('2023-09-15T14:30:00Z');

const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  timeZone: 'Asia/Bangkok'
};

const formattedDate = registrationDate.toLocaleDateString('th-TH', options);
console.log(`วันที่สมัครสมาชิก: ${formattedDate}`);