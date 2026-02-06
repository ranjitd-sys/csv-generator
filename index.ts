import { readFile, utils, type WorkSheet } from 'xlsx';
import type { TransactionRecord } from './types';

// 1. Load the workbook
const workbook = readFile('data.xlsx');

// 2. Get the name of the first sheet
const sheetName  = workbook.SheetNames[0] ;

// @ts-ignore
const worksheet = workbook.Sheets[sheetName] ;

// 4. Convert the sheet data to JSON and print it
const data: TransactionRecord[] = utils.sheet_to_json(worksheet);

console.log("--- Spreadsheet Data ---");
data.map(data =>  console.log(data['Closing Fee']))