import type { CatsStore } from "./types";

export type State = { cats: CatsStore };

const getCats = (state: State) => state.cats.cats;
const getCategories = (state: State) => state.cats.categories;

export default {
  getCats,
  getCategories
};
