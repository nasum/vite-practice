import { Module } from "vuex";
import { RootState } from "../index";

type User = {
  id: number;
  name: string;
};

type State = {
  users: Array<User>;
};

export const UsersState: State = {
  users: []
};

export const Users: Module<State, RootState> = {
  states: UsersState
};
