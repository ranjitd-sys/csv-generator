import { readFile, utils, type WorkSheet } from 'xlsx';
import type { TransactionRecord } from './types';
import {  Effect } from 'effect';
import { NotFound } from './error';


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
