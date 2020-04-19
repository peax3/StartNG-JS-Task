function YuGiOh(num) {
  // if num is not an integer return -1
  if (!Number.isInteger(num)) {
    return -1;
  }

  const result = [];
  let value;

  for (i = 1; i <= num; i++) {
    if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0) {
      value = "YU-GI-OH";
    } else if (i % 2 === 0) {
      if (i % 3 === 0) {
        value = "YU-GI";
      } else if (i % 5 === 0) {
        value = "YU-OH";
      } else {
        value = "YU";
      }
    } else if (i % 3 === 0) {
      if (i % 5 === 0) {
        value = "GI-OH";
      } else {
        value = "GI";
      }
    } else if (i % 5 === 0) {
      value = "OH";
    } else {
      value = i;
    }

    result.push(value);
  }

  return result;
}

YuGiOh(100);

YuGiOh(30);
