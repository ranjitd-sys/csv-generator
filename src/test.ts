import { Record } from "effect";
import { feeFields, type FeeField, type TransactionRecord } from "./types";

const test : TransactionRecord[] = [
  {
    __rowNum__: 149,
    "Transaction Date": "06-DEC-2025",
    "Transaction Type": "COD Vendor Invoice",
    "Sub Order No": "68285388363",
    "Invoice Number": "S0D3E8/25/1998",
    "Hsn Code": "70181090",
    "Tax Rate": 0,
    "Tax Type": "GST",
    "Tax Amount": -10.6,
    "Order Invoice Date": "05-DEC-2025",
    "Seller Code": "S0d3e8",
    "Hold Flag": "Y",
    "Payment Date": "",
    "Service Tax": 0,
    "Swachh Bharat Cess": 0,
    "Krishi Kalyan Cess": 0,
    "Fulfillment Fee": 0,
    "Fulfillment Fee Waiver": 0,
    "Marketing Fee": 21.1,
    "Closing Fee": 0,
    "Payment Collection Fee": -20,
    "Courier Fee": -60,
    Sgst: 0,
    "Sgst Rate": "0.00",
    Cgst: 0,
    "Cgst Rate": "0.00",
    Utgst: 0,
    "Utgst Rate": "0.00",
    Igst: -10.6,
    "Igst Rate": "18.00",
    "Compensation Cess": 0,
    "Compensation Cess Rate": "0.00",
    Other: 0,
    "Cash Discount / Adjustment": 0,
    "Total Commission Amount": -69.5,
  },
  {
    __rowNum__: 150,
    "Transaction Date": "06-DEC-2025",
    "Transaction Type": "COD Vendor Invoice",
    "Sub Order No": "68337170967",
    "Invoice Number": "S0D3E8/25/2019",
    "Hsn Code": "71131110",
    "Tax Rate": 0,
    "Tax Type": "GST",
    "Tax Amount": -10.3,
    "Order Invoice Date": "06-DEC-2025",
    "Seller Code": "S0d3e8",
    "Hold Flag": "N",
    "Payment Date": "",
    "Service Tax": 0,
    "Swachh Bharat Cess": 0,
    "Krishi Kalyan Cess": 0,
    "Fulfillment Fee": 0,
    "Fulfillment Fee Waiver": 0,
    "Marketing Fee": 22.8,
    "Closing Fee": 0,
    "Payment Collection Fee": -20,
    "Courier Fee": -60,
    Sgst: 0,
    "Sgst Rate": "0.00",
    Cgst: 0,
    "Cgst Rate": "0.00",
    Utgst: 0,
    "Utgst Rate": "0.00",
    Igst: -10.3,
    "Igst Rate": "18.00",
    "Compensation Cess": 0,
    "Compensation Cess Rate": "0.00",
    Other: 0,
    "Cash Discount / Adjustment": 0,
    "Total Commission Amount": -67.5,
  },
];

function getNonZeroFeesPerRow(
  records: TransactionRecord[],
): Array<Partial<Record<FeeField, number>>> {
  return records.map((row) =>
    Object.fromEntries(
      feeFields
        .filter((key) => row[key] !== 0)
        .map((key) => [
          key,
          { TrasnactionType: key, 
            transactionAmount: row[key], 
            "Order Invoice Date":row["Order Invoice Date"],
            orderId:row["Sub Order No"],
            invoiceNumbr:row["Invoice Number"],
            "Hsn Code":row["Hsn Code"],
            cgs:row.Cgst,
            sgst:row.Sgst,
            igst:row.Igst,
            taxRate:row["Tax Rate"]
            }
          
        ]),
    ),
  );
}

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
    }))
  );
}

const res = getNonZeroFeesPerRow(test);
const mainrepose = flattenFees(res);
console.log(mainrepose)
