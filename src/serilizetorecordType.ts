import { raceWith } from "effect/Sink";
import { feeFields, type FeeField, type TransactionRecord } from "./types";
import { cons } from "effect/List";
import { test } from "./test";
import { Effect } from "effect";
import { convertData } from "./serilize";

export function getNonZeroFeesPerRow(records: TransactionRecord[]) {
  return records.flatMap((row) =>
    feeFields
      .filter((key) => row[key] !== 0)
      .map((key) => ({
        transactionType: key,
        transactionAmount: row[key],
        "Order Invoice Date": row["Order Invoice Date"],
        orderId: row["Sub Order No"],
        invoiceNumbr: row["Invoice Number"],
        "Hsn Code": row["Hsn Code"],
        cgst: row.Cgst,
        sgst: row.Sgst,
        igst: row.Igst,
        taxRate: row["Tax Rate"],
      }))
  );
}

