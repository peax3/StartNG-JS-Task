const data = [
  {
    principal: 2500,
    time: 1.8,
  },
  {
    principal: 1000,
    time: 5,
  },
  {
    principal: 3000,
    time: 1,
  },
  {
    principal: 2000,
    time: 3,
  },
];

// calculate interest
function interestCalculator(values) {
  const interestData = values.map((value, index) => {
    // get the rate for each object
    let rate = getRate(value.principal, value.time);
    // calculate interest
    let interest = (value.principal * value.time * rate) / 100;
    // return new object with rate and interest included
    return { ...values[index], rate, interest };
  });
  console.log(interestData);
  return interestData;
}

// return rate value
function getRate(principal, time) {
  let rate;
  if (principal >= 2500 && time > 1 && time < 3) {
    rate = 3;
  } else if (principal >= 2500 && time >= 3) {
    rate = 4;
  } else if (principal < 2500 && time <= 1) {
    rate = 2;
  } else {
    rate = 1;
  }

  return rate;
}

interestCalculator(data);
