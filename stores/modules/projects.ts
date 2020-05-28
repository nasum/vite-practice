import { Module, ActionTree, MutationTree } from "vuex";
import { RootState } from "../index";

type Project = {
  id: number;
  name: string;
};

export type ProjectsState = {
  projects: Array<Project>;
};

const state: ProjectsState = {
  projects: []
};

const MUTATION_TYPES = {
  ADD_PROJECT: "addProject"
};

const actions: ActionTree<ProjectsState, RootState> = {
  addProject: ({ commit }, projectName: string) => {
    commit(MUTATION_TYPES.ADD_PROJECT, projectName);
  }
};

const mutations: MutationTree<ProjectsState> = {
  [MUTATION_TYPES.ADD_PROJECT](state: ProjectState, projectName: string) {
    state.projects.push({
      id: 0,
      name: projectName
    });
  }
};

export const Projects: Module<ProjectsState, RootState> = {
  namespaced: true,
  state,
  actions,
  mutations
};
