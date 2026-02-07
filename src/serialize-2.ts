import { marketPlaceData } from "./market";
import { feeFields, type FeeField, type TransactionRecord } from "./types";

export function getNonZeroFeesPerRow(records: TransactionRecord[]) {
  return records.flatMap((row) =>
    feeFields
      .filter((key) => row[key] !== 0)
      .map((key, index) => ({
        transactionType: key,
        transactionAmount: row[key],
        "Order Invoice Date": row["Order Invoice Date"],
        orderId: row["Sub Order No"],
        invoiceNumbr: row["Invoice Number"],
        "Hsn Code": row["Hsn Code"],
        "Marketplace Trasaction Type":marketPlaceData[index],
        cgst: row.Cgst,
        sgst: row.Sgst,
        igst: row.Igst,
        taxRate: Number(row["Igst Rate"]) / 100,
      })),
  );
}
