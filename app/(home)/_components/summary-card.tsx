import { Card, CardContent, CardHeader } from "@/app/_components/ui/card";
import { ReactNode } from "react";

interface SummaryCardProps {
  icon: ReactNode;
  title: string;
  amount: number;
  size: "small" | "large";
  customButton?: ReactNode;
  customAmountColor?: string;
}

const SummaryCard = ({
  icon,
  title,
  amount,
  size,
  customButton,
  customAmountColor,
}: SummaryCardProps) => {
  return (
    <Card>
      <CardHeader className="flex-row items-center gap-4">
        {icon}
        <p
          className={
            size === "small"
              ? "m-0 text-muted-foreground"
              : "text-white opacity-70"
          }
        >
          {title}
        </p>
      </CardHeader>
      <CardContent className="flex justify-between">
        <p
          className={`font-bold ${size === "small" ? "text-2xl" : "f text-4xl"} ${customAmountColor}`}
        >
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(amount)}
        </p>
        {!!customButton && customButton}
      </CardContent>
    </Card>
  );
};

export default SummaryCard;
