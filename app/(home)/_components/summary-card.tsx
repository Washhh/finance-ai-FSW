import { Card, CardContent, CardHeader } from "@/app/_components/ui/card";
import { ReactNode } from "react";

interface SummaryCardProps {
  icon: ReactNode;
  title: string;
  amount: number;
  size: "small" | "large";
  customButton?: ReactNode;
  customAmountColor?: string;
  customBgColor?: string;
}

const SummaryCard = ({
  icon,
  title,
  amount,
  size,
  customButton,
  customAmountColor,
  customBgColor,
}: SummaryCardProps) => {
  return (
    <Card className={customBgColor}>
      <CardHeader className="flex-row items-center gap-2">
        {icon}
        <p
          className={
            size === "small" ? "text-muted-foreground" : "text-white opacity-70"
          }
          style={{ margin: 0 }} // removendo margin forçado do space do cardHeader
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
