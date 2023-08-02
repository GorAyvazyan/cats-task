import React from "react";
import { StyledSideBar, StyledButton, StyledSideBarWrapper } from "./styles";

type SideBarProps = {
  categories: any[];
  selectedCategory: number | null;
  onCategoryClick: (category_id: number) => void;
};

const SideBar = ({ categories, onCategoryClick }: SideBarProps) => {
  return (
    <StyledSideBarWrapper>
      <StyledSideBar>
        {categories.map((category) => (
          <StyledButton key={category.id} onClick={() => onCategoryClick(category.id)}>
            {category.name}
          </StyledButton>
        ))}
      </StyledSideBar>
    </StyledSideBarWrapper>
  );
};

export default SideBar;
