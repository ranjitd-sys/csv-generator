import { readFile, utils, type WorkSheet } from 'xlsx';
import type { TransactionRecord } from './types';
import { Effect } from 'effect';
import { NotFound } from './ error';

export const convertData = Effect.gen(function* () {
    const workbook = readFile('data.xlsx');
    const sheetName  = workbook.SheetNames[4] ;
    const worksheet = workbook.Sheets[sheetName || ""] ;
    if(!worksheet){
        return new NotFound;
    }
    Effect.try({
        try:()=> {
            
            const data: TransactionRecord[] = utils.sheet_to_json(worksheet)},
        catch:(e)=>console.log(e)
    })
   
})
