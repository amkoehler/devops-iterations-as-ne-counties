#!/usr/bin/env zx

import "zx/globals";
import counties from "./counties.mjs";

function addDays(d, numDays) {
  const date = new Date(d);
  date.setDate(date.getDate() + numDays);
  return date;
}

function getDateString(d) {
  return d.toLocaleDateString("en-CA"); // 2022-06-13
}

let startDateCursor = new Date(2022, 5, 13);
let finishDateCursor = new Date(2022, 5, 24);

for (const county of counties) {
  const startDate = getDateString(startDateCursor);
  const finishDate = getDateString(finishDateCursor);

  console.log(
    `Creating iteration "${county}" for dates ${startDate} => ${finishDate}`
  );
  await $`az boards iteration project create --name ${county} --start-date ${startDate} --finish-date ${finishDate}`;

  startDateCursor = addDays(startDateCursor, 14);
  finishDateCursor = addDays(finishDateCursor, 14);
}

console.log(`Done ✅`);
