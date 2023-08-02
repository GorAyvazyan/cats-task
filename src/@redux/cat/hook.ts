import { useCallback } from "react";
import { useDispatch } from "react-redux";
import types from "./types";

export default function () {
  const dispatch = useDispatch();

  const API_URL = `https://api.thecatapi.com/v1/images/search?`;
  const fetchCats = useCallback(
    async (breed_id: number, limit: number, page: number) => {
      try {
        const response = await fetch(
          `${API_URL}?breed_ids=${breed_id}&limit=${limit}&page=${page}`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const catData = await response.json();
        console.log(catData, 111);

        dispatch({ type: types.SET_CATS, payload: catData });
      } catch (error) {
        console.log("Error while fetching cat data:", error);
      }
    },
    [dispatch]
  );

  const fetchCategories = useCallback(async () => {
    try {
      const response = await fetch(`https://api.thecatapi.com/v1/categories`);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const categories = await response.json();

      dispatch({ type: types.SET_CATEGORIES, payload: categories });
    } catch (error) {
      console.log("Error while fetching cat data:", error);
    }
  }, [dispatch]);

  return {
    fetchCats,
    fetchCategories
  };
}
