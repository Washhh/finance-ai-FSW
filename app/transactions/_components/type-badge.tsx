import { Badge } from "@/app/_components/ui/badge";
import { Transaction } from "@prisma/client";
import { CircleIcon } from "lucide-react";

interface TransactionTypeBadgeProps {
  transaction: Transaction;
}

const TransactionTypeBadge = ({ transaction }: TransactionTypeBadgeProps) => {
  switch (transaction.type) {
    case "DEPOSIT":
      return (
        <Badge className="pointer-events-none bg-muted font-bold text-primary">
          <CircleIcon className="mr-2 fill-primary" size={10} />
          Depósito
        </Badge>
      );
    case "EXPENSE":
      return (
        <Badge className="font bold pointer-events-none bg-danger bg-opacity-10 text-danger">
          <CircleIcon className="mr-2 fill-danger" size={10} />
          Despesa
        </Badge>
      );
    case "INVESTMENT":
      return (
        <Badge className="font bold pointer-events-none bg-white bg-opacity-10 text-white">
          <CircleIcon className="mr-2 fill-white" size={10} />
          Investimento
        </Badge>
      );
  }
};

export default TransactionTypeBadge;
