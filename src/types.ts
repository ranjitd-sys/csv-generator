export interface TransactionRecord {
  __rowNum__: number;
  "Transaction Date": string;
  "Transaction Type": string;
  "Sub Order No": string;
  "Invoice Number": string;
  "Hsn Code": string;
  "Tax Rate": number;
  "Tax Type": string;
  "Tax Amount": number;
  "Order Invoice Date": string;
  "Seller Code": string;
  "Hold Flag": "Y" | "N"; // Using a union type for better strictness
  "Payment Date": string;
  "Service Tax": number;
  "Swachh Bharat Cess": number;
  "Krishi Kalyan Cess": number;
  "Fulfillment Fee": number;
  "Fulfillment Fee Waiver": number;
  "Marketing Fee": number;
  "Closing Fee": number;
  "Payment Collection Fee": number;
  "Courier Fee": number;
  Sgst: number;
  "Sgst Rate": string;
  Cgst: number;
  "Cgst Rate": string;
  Utgst: number;
  "Utgst Rate": string;
  Igst: number;
  "Igst Rate": string;
  "Compensation Cess": number;
  "Compensation Cess Rate": string;
  Other: number;
  "Cash Discount / Adjustment": number;
  "Total Commission Amount": number;
}

export const feeFields = [
  "Courier Fee",
  "Closing Fee",
  "Marketing Fee",
  "Fulfillment Fee",
  "Payment Collection Fee",
  "Compensation Cess"
];