import { Dispatch, SetStateAction } from "react";

// type 초기값
export type TodoProps = {
  id: number;
  text: string;
  complete: boolean;
};

export type TodosProps = TodoProps[];

export interface CreateModeProps {
  createMode: boolean;
  setCreate: Dispatch<SetStateAction<boolean>>;
}

export type FilterTypes = "All" | "Active" | "Complete";
