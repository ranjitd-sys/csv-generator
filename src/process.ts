import { readFile, utils, type WorkSheet } from 'xlsx';
import type { TransactionRecord } from './types';
import { Data, Effect } from 'effect';
import { NotFound } from './error';
import { daemonChildren } from 'effect/Effect';


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

export const main = Effect.gen(function* () {
    const jsonCsv = yield* convertData;
    const filterDate = jsonCsv.filter(res => {
        if (res['Closing Fee'] !== 0 || 
            res['Courier Fee'] !== 0 || 
            res['Compensation Cess'] !== 0 ||
             res['Marketing Fee'] !== 0 ||
             res['Fulfillment Fee']||

              res['Payment Collection Fee']) {
                return res;
        }
    })
    console.log(filterDate)
})

const res = await Effect.runPromise(main);
console.log(res)