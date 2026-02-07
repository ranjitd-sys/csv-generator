import { Effect } from "effect";
import { convertData } from "./serialize-1";
import { getNonZeroFeesPerRow } from "./serialize-2";
import { stringify } from "csv-stringify/sync";

const serilize1 = await Effect.runPromise(convertData);
const serilize2 = getNonZeroFeesPerRow(serilize1);
// console.log(serilize2)
// console.log(serilize2)
const csv = stringify(serilize2, {
  header: true,
});

console.log(csv)
await Bun.write("../output/output.csv", csv)

