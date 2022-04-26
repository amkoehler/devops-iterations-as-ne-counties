#!/usr/bin/env zx

import "zx/globals";
import counties from "./counties.mjs";

for (const county of counties) {
  const path = "\\" + "Layer" + "\\" + "Iteration" + "\\" + county;
  await $`az boards iteration project delete -y --path ${path}`;
}
