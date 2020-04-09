export function generateYears() {
  const yearList = [];
  for (let year = 2020; year > 1949; year--) {
    yearList.push(year);
  }

  return yearList;
}


export function generateMinutes() {
  const minutesList = [];

  for (let minutes = 0; minutes < 255; minutes += 15) {
    minutesList.push(minutes);

  }
  return minutesList;


}

