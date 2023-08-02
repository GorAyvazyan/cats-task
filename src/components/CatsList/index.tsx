import React from "react";
import { StyledList } from "./styles";

type CatsListProps = {
  cats: any[];
};

const CatsList = ({ cats }: CatsListProps) => {
  return (
    <>
      <StyledList>
        {cats.map((cat) => (
          <img width={100} key={cat.id} src={cat.url} alt="Cat" />
        ))}
      </StyledList>
    </>
  );
};

export default CatsList;
