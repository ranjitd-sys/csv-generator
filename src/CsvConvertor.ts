import { Effect } from "effect";
import { convertData } from "./serilize";
import { getNonZeroFeesPerRow } from "./serilizetorecordType";
import { stringify } from "csv-stringify/sync";
import { cons } from "effect/List";

type FeeDetail = {
  TrasnactionType: string;
  transactionAmount: number;
  "Order Invoice Date": string;
  orderId: string;
  invoiceNumbr: string;
  "Hsn Code": string;
  cgs: number;
  sgst: number;
  igst: number;
  taxRate: number;
};

function flattenFees(data: Array<Record<string, FeeDetail>>) {
  return data.flatMap((order) =>
    Object.entries(order).map(([feeType, detail]) => ({
      feeType,
      transactionAmount: detail.transactionAmount,
      orderId: detail.orderId,
      invoiceNumber: detail.invoiceNumbr,
      orderDate: detail["Order Invoice Date"],
      hsnCode: detail["Hsn Code"],
      cgst: detail.cgs,
      sgst: detail.sgst,
      igst: detail.igst,
      taxRate: detail.taxRate,
    })),
  );
}


const serilize1 = await Effect.runPromise(convertData);
const serilize2 = getNonZeroFeesPerRow(serilize1);
console.log(serilize2)
const csv = stringify(serilize2, {
  header: true,
});
console.log(csv)
await Bun.write("date.csv", csv)

