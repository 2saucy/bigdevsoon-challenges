import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import clsx from "clsx";
import { FaPlus } from "react-icons/fa";

interface Invoice {
  invoice: string;
  client: string;
  amount: number;
  status: "Paid" | "Overdue" | "Outstanding";
  date: string;
}

const Invoices = () => {
  const invoices: Invoice[] = [
    {
      invoice: "INV-001",
      client: "John Doe",
      amount: 100,
      status: "Paid",
      date: "01/01/2024",
    },
    {
      invoice: "INV-002",
      client: "Jane Doe",
      amount: 200,
      status: "Overdue",
      date: "01/01/2024",
    },
    {
      invoice: "INV-003",
      client: "Bob Smith",
      amount: 300,
      status: "Paid",
      date: "01/01/2024",
    },
    {
      invoice: "INV-004",
      client: "Alice Johnson",
      amount: 400,
      status: "Outstanding",
      date: "01/01/2024",
    },
    {
      invoice: "INV-005",
      client: "Charlie Brown",
      amount: 500,
      status: "Paid",
      date: "01/01/2024",
    }
  ]

  const statusColors = {
    Overdue: "bg-red-500",
    Paid: "bg-emerald-500",
    Outstanding: "bg-yellow-500",
  }

  const balance = invoices.reduce((acc, invoice) => acc + invoice.amount, 0).toFixed(2)

  const pending = invoices.reduce((acc, invoice) => {
    if (invoice.status === "Outstanding") return acc + invoice.amount
    return acc
  }, 0).toFixed(2);

  return (
    <main className="min-h-screen bg-[#d1d3df] px-16 flex flex-col justify-center gap-6">
      <div className="flex items-center gap-6">
        <div className="basis-1/2 rounded-xl shadow-lg bg-white p-4">
          <h2 className="text-xl font-semibold">Balance</h2>
          <span className="text-3xl font-bold">$ {balance}</span> 
        </div>
        <div className="basis-1/2 rounded-xl shadow-lg p-4 bg-slate-900 text-slate-50">
          <h2 className="text-xl font-bold">Pending</h2>
          <span className="text-3xl font-bold">$ {pending}</span>
        </div>
      </div>
      <div className="rounded-xl shadow-lg bg-white p-4 space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold">Invoices</h1>
          <div className="flex gap-4">
            <Button variant="outline">
              View all Invoices
            </Button>
            <Button>
              <FaPlus className="mr-2"/> New Invoice
            </Button>
          </div>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Invoice</TableHead>
              <TableHead>Client</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.invoice}>
                <TableCell><Checkbox className="mr-2" />{invoice.invoice}</TableCell>
                <TableCell>{invoice.client}</TableCell>
                <TableCell>${invoice.amount.toFixed(2)}</TableCell>
                <TableCell>
                  <span className={clsx("bg-opacity-50 shadow-md rounded-full px-3 py-1", statusColors[invoice.status])}>{invoice.status}</span>
                </TableCell>
                <TableCell>{invoice.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </main>
  );
}

export default Invoices;
