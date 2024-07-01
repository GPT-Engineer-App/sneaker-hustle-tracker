import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const placeholderTransactions = [
  { id: 1, date: "2023-10-01", amount: 100, type: "income", category: "Nike" },
  { id: 2, date: "2023-10-02", amount: 200, type: "expense", category: "Adidas" },
  { id: 3, date: "2023-10-03", amount: 150, type: "income", category: "Puma" },
];

const TransactionList = () => {
  const [transactions, setTransactions] = useState(placeholderTransactions);

  const handleDelete = (id) => {
    setTransactions(transactions.filter((transaction) => transaction.id !== id));
    toast.success("Transaction deleted successfully!");
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Transaction List</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow key={transaction.id}>
              <TableCell>{transaction.date}</TableCell>
              <TableCell>{transaction.amount}</TableCell>
              <TableCell>{transaction.type}</TableCell>
              <TableCell>{transaction.category}</TableCell>
              <TableCell>
                <Link to={`/edit-transaction/${transaction.id}`}>
                  <Button variant="outline" size="sm" className="mr-2">Edit</Button>
                </Link>
                <Button variant="destructive" size="sm" onClick={() => handleDelete(transaction.id)}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TransactionList;