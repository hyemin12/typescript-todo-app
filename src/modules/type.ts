import { Dispatch, SetStateAction } from "react";

// Action Type 정의
export const GET_TODO = "todos/GET_TODO" as const;
export const ADD_TODO = "todos/ADD_TODO" as const;
export const TOGGLE_TODO = "todos/TOGGLE_TODO" as const;
export const DELETE_TODO = "todos/DELETE_TODO" as const;

// type 초기값
export type TodoProps = {
  id: number;
  text: string;
  done: boolean;
};

export type TodosState = TodoProps[];

export interface CreateModeProps {
  createMode: boolean;
  setCreate: Dispatch<SetStateAction<boolean>>;
}
