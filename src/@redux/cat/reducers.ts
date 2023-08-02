import types, { CatsStore, Payload } from "./types";

export const initialValues: CatsStore = {
  cats: [],
  categories: []
};

export default function (state: CatsStore = initialValues, { type, payload }: Payload) {
  switch (type) {
    case types.SET_CATS:
      return {
        ...state,
        cats: [...state.cats, ...payload]
      };
    case types.SET_CATEGORIES:
      return {
        ...state,
        categories: payload
      };

    default:
      return state;
  }
}
