"use client";

import { Pie, PieChart } from "recharts";

import { Card, CardContent } from "@/app/_components/ui/card";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/app/_components/ui/chart";
import { TransactionType } from "@prisma/client";
import { TransactionPercentagePerType } from "@/app/_data/get-dashboard/types";
import { PiggyBankIcon, TrendingDownIcon, TrendingUpIcon } from "lucide-react";
import PercentageItem from "./percentage-item";

const chartConfig = {
  [TransactionType.INVESTMENT]: {
    label: "Investido",
    color: "#FFF",
  },
  [TransactionType.DEPOSIT]: {
    label: "Receita",
    color: "#55b02e",
  },
  [TransactionType.EXPENSE]: {
    label: "Despesa",
    color: "#e93030",
  },
} satisfies ChartConfig;

interface TransactionPieChartProps {
  depositsTotal: number;
  investmentsTotal: number;
  expensesTotal: number;
  typesPercentage: TransactionPercentagePerType;
}

const TransactionPieChart = ({
  depositsTotal,
  expensesTotal,
  investmentsTotal,
  typesPercentage,
}: TransactionPieChartProps) => {
  const chartData = [
    {
      type: TransactionType.INVESTMENT,
      amount: investmentsTotal,
      fill: "#FFF",
    },
    {
      type: TransactionType.DEPOSIT,
      amount: depositsTotal,
      fill: "#55b02e",
    },
    {
      type: TransactionType.EXPENSE,
      amount: expensesTotal,
      fill: "#e93030",
    },
  ];
  return (
    <Card className="flex flex-col p-12">
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="amount"
              nameKey="type"
              innerRadius={75}
            />
          </PieChart>
        </ChartContainer>
        <div className="space-y-2">
          <PercentageItem
            icon={
              <div className="rounded-md bg-white bg-opacity-5 p-3">
                <PiggyBankIcon size={16} />
              </div>
            }
            title="Investimento"
            value={typesPercentage.INVESTMENT}
          />
          <PercentageItem
            icon={
              <div className="rounded-md bg-green-300 bg-opacity-5 p-3">
                <TrendingUpIcon size={16} className="text-primary" />
              </div>
            }
            title="Receita"
            value={typesPercentage.DEPOSIT}
          />
          <PercentageItem
            icon={
              <div className="rounded-md bg-red-500 bg-opacity-5 p-3">
                <TrendingDownIcon size={16} className="text-red-500" />
              </div>
            }
            title="Despesa"
            value={typesPercentage.EXPENSE}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default TransactionPieChart;
