import { Effect } from "effect";
import { convertData } from "./serilize-1";
import { getNonZeroFeesPerRow } from "./serilize-2";
import { stringify } from "csv-stringify/sync";

const serilize1 = await Effect.runPromise(convertData);
const serilize2 = getNonZeroFeesPerRow(serilize1);


const csv = stringify(serilize2, {
  header: true,
});

console.log(csv)
await Bun.write("../output/date.csv", csv)

