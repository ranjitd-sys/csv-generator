import { feeFields, type TransactionRecord } from "./types";

const test = [
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
  }, {
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
function extractNonZeroFees(row:TransactionRecord){
  const fees  = {};

  for (const key of feeFields) {
    console.log(key)
    const value = Number(row[key]);
    if (!Number.isNaN(value) && value !== 0) {
      fees[key] = value;
    }
  }

  return fees;
}



console.log(extractNonZeroFees(test))

// console.log(test);
