import AddTransactionButton from "@/app/_components/add-transaction-button";
import {
  PiggyBankIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  WalletIcon,
} from "lucide-react";
import SummaryCard from "./summary-card";

interface SummaryCardsProps {
  balance: number;
  depositsTotal: number;
  investmentsTotal: number;
  expensesTotal: number;
}

const SummaryCards = async ({
  balance,
  depositsTotal,
  expensesTotal,
  investmentsTotal,
}: SummaryCardsProps) => {
  return (
    <div className="space-y-6">
      <SummaryCard
        title="Saldo"
        amount={balance}
        size="large"
        icon={
          <div className="rounded-md bg-black bg-opacity-50 p-3">
            <WalletIcon size={16} />
          </div>
        }
        customButton={<AddTransactionButton />}
        customAmountColor={balance < 0 ? "text-red-500" : "text-primary"}
        customBgColor="bg-white bg-opacity-5"
      />

      <div className="grid grid-cols-3 gap-6">
        <SummaryCard
          title="Investido"
          amount={investmentsTotal}
          icon={
            <div className="rounded-md bg-white bg-opacity-5 p-3">
              <PiggyBankIcon size={16} />
            </div>
          }
          size="small"
        />
        <SummaryCard
          title="Receita"
          amount={depositsTotal}
          icon={
            <div className="rounded-md bg-green-300 bg-opacity-5 p-3">
              <TrendingUpIcon size={16} className="text-primary" />
            </div>
          }
          size="small"
        />
        <SummaryCard
          title="Despesa"
          amount={expensesTotal}
          icon={
            <div className="rounded-md bg-red-500 bg-opacity-5 p-3">
              <TrendingDownIcon size={16} className="text-red-500" />
            </div>
          }
          size="small"
        />
      </div>
    </div>
  );
};

export default SummaryCards;
