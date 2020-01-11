let dateObject = new Date();
let [month, day, year] = [dateObject.getMonth() + 1,
                          dateObject.getUTCDate(),
                          dateObject.getFullYear()]
let date = `${day}/${month}/${year}`;
let noveltyScore = dateObject.getTime();

export {date, noveltyScore};
