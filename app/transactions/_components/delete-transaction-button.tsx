"use client";

import { deleteTransaction } from "@/app/_actions/delete-transaction";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/app/_components/ui/alert-dialog";
import { Button } from "@/app/_components/ui/button";
import { TrashIcon } from "lucide-react";
import { useState } from "react";

interface DeleteTransactionButtonProps {
  id: string;
}

const DeleteTransactionButton = ({ id }: DeleteTransactionButtonProps) => {
  const [openDialog, setOpenDialog] = useState(false);
  const handleDeleteTransaction = async () => {
    await deleteTransaction(id);
    setOpenDialog(false);
  };
  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="text-muted-foreground"
        onClick={() => {
          setOpenDialog(true);
        }}
      >
        <TrashIcon />
      </Button>

      <AlertDialog open={openDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Você deseja excluir essa transação?
            </AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel
              onClick={() => {
                setOpenDialog(false);
              }}
            >
              Cancelar
            </AlertDialogCancel>
            <AlertDialogAction onClick={handleDeleteTransaction}>
              Excluir
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default DeleteTransactionButton;
