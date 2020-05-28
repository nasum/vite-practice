import { createStore } from "vuex";

import { Projects, ProjectsState } from "./modules/projects";
import { Users, UsersState } from "./modules/users";

export type RootState = {
  Projects: ProjectsState;
  Users: UserState;
};

export default createStore({
  modules: {
    Projects,
    Users
  }
});
