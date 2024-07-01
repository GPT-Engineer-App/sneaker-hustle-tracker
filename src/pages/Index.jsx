import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Sneaker Accounting</h1>
      <p className="mb-6">Track your sneaker transactions easily.</p>
      <Link to="/add-transaction">
        <Button className="mr-2">Add Transaction</Button>
      </Link>
      <Link to="/transaction-list">
        <Button variant="outline">View Transactions</Button>
      </Link>
    </div>
  );
};

export default Index;