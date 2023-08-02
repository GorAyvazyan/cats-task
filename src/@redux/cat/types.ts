export default {
  SET_CATS: "SET_CATS",
  SET_CATEGORIES: "SET_CATEGORIES"
};

export type CatsType = {
  id: string;
  url: string;
};
export type CatsStore = {
  cats: Array<CatsType>;
  categories: Array<string>;
};

export type Payload = {
  type: string;
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  payload?: any;
};
