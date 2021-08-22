import React, { useCallback } from "react";
import { Container, Icon, Button } from "./SearchStyle";
import { useDispatch } from "react-redux";

interface ScrollProps {
  scroll: boolean;
}

const Search: React.FC<ScrollProps> = ({ scroll }) => {
  //Toggle search input display
  const dispatch = useDispatch();
  const handleToggle = useCallback(() => {
    dispatch({
      type: "TOGGLE_INPUT"
    });
  }, [dispatch]);
  return (
    <Container>
      <Button onClick={handleToggle}>
        <Icon scroll={scroll}>
          <i className="fas fa-search" />
        </Icon>
      </Button>
    </Container>
  );
};

export default Search;
