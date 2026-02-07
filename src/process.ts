import { readFile, utils, type WorkSheet } from 'xlsx';
import type { TransactionRecord } from './types';
import { Data, Effect } from 'effect';
import { NotFound } from './error';
import { daemonChildren } from 'effect/Effect';

import { Record } from "effect";
import { feeFields, type FeeField } from "./types";

export const convertData = Effect.gen(function* () {
    const data = yield* Effect.try({
        try: () => {
            const workbook = readFile('../public/data.xlsx');
            const sheetName = workbook.SheetNames[4];
            const worksheet = workbook.Sheets[sheetName || ""];
            if (!worksheet) throw new NotFound();
            return utils.sheet_to_json<TransactionRecord>(worksheet)
        },
        catch: (e) => e instanceof NotFound
    });
    return data;
})

function getNonZeroFeesPerRow(
  records: TransactionRecord[]
): Array<Partial<Record<FeeField, number>>> {
  return records.map((row) =>
    Object.fromEntries(
      feeFields
        .filter((key) => row[key] !== 0)
        .map((key) => [key, row[key]])
    )
  );
}
const data = await Effect.runPromise(convertData)
const res = getNonZeroFeesPerRow(data);
console.log(res)