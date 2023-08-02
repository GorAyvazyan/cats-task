import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { catsSelectors, useCatsActions } from "@redux";
import CatsList from "components/CatsList";
import SideBar from "../../components/SideBar";
import { StyledWrapper, StyledDiv, StyledLoadButton } from "./styles";

const Main = () => {
  const cats = useSelector(catsSelectors.getCats);
  const categories = useSelector(catsSelectors.getCategories);
  const { fetchCats, fetchCategories } = useCatsActions();

  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    if (selectedCategory !== null) {
      fetchCats(selectedCategory, 10, page);
    }
  }, [selectedCategory, page]);

  const handleCategoryClick = (category_id: number) => {
    setSelectedCategory(category_id);
    setPage(1);
  };

  const handleLoadMoreClick = () => {
    setPage((prevPage) => prevPage + 1);
  };
  return (
    <StyledWrapper>
      <>
        <SideBar
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryClick={handleCategoryClick}
        />
        <StyledDiv>
          <CatsList cats={cats} />
          {cats.length ? (
            <StyledLoadButton onClick={handleLoadMoreClick}>Load More</StyledLoadButton>
          ) : null}
        </StyledDiv>
      </>
    </StyledWrapper>
  );
};

export default Main;
