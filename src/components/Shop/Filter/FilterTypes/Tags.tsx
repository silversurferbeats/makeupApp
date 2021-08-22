import React, { useCallback } from "react";
import styled from "styled-components";
import { fonts, colours, device } from "../../../utils";
import { getTags } from "../../../getTypes";
import { useDispatch } from "react-redux";
import { searchTags } from "../../../../store/searchFilter/action";
import Selectbox from "../../../UI/Selectbox/Selectbox";
const Tag = styled.div`
  margin: 0.3em;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  border-color: ${colours.pink};
  background: transparent;
  border-radius: 0.3em;
  padding: 0.5em;
  font-family: ${fonts.aBeeZee};
  text-transform: capitalize;
  color: ${colours.primaryText};
  cursor: pointer;
`;
const TagContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  padding-left: 0.5em;
  p {
    font-family: ${fonts.aBeeZee};
  }
  @media ${device.mobileS} {
    display: none;
  }
  @media ${device.laptop} {
    display: flex;
  }
`;
const MobileTag = styled.div`
  p {
    font-family: ${fonts.aBeeZee};
  }
  @media ${device.mobileS} {
    display: block;
  }
  @media ${device.laptop} {
    display: none;
  }
`;
interface Props {
  products: [];
  isLoading: boolean;
}

const Tags: React.FC<Props> = ({ products, isLoading }) => {
  const tags = getTags(products);
  const dispatch = useDispatch();
  const addTag = useCallback(
    (tag: string) => {
      dispatch(searchTags([tag]));
    },
    [dispatch]
  );

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.options[e.target.selectedIndex].value;
    addTag(value);
  };

  if (tags.length < 1)
    return (
      <>
        <TagContainer>
          <p>No tags for this product.</p>
        </TagContainer>
        <MobileTag>
          <p>No tags for this product</p>
        </MobileTag>
      </>
    );
  return (
    <>
      <TagContainer>
        {tags.map((tag, index) => (
          <Tag
            key={index}
            onClick={() => {
              addTag(tag);
            }}>
            <span>{tag}</span>
          </Tag>
        ))}
      </TagContainer>
      <MobileTag>
        <Selectbox
          options={tags}
          label="Tags :"
          defaultValue={`${isLoading ? "Loading.." : "Choose here.."}`}
          onChange={handleSelect}
        />
      </MobileTag>
    </>
  );
};

export default Tags;
