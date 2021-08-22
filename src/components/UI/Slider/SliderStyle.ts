import styled from "styled-components";
import { fonts, colours } from "../../utils";
const thumbStyle = `
    transform: translateY(-14px);
    -webkit-appearance: none;
    appearance: none;
    outline:none;
    cursor: grab;
    height: 1em;
    width: 0.5em;
    background: ${colours.primaryText};
    transition:0.2s;
    &:active{ 
      transform:translateY(-17px);
     height:1.5em;
     width:1em;
    }
    ;`;

export const SlideWrapper = styled.div`
  p {
    font-family: ${fonts.raleway};
  }
  .multi-range,
  .multi-range * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  .multi-range {
    position: relative;
    width: 100%;
    height: 28px;
    hr {
      border: 2px solid ${colours.pink};
      border-radius: 1em;
      position: absolute;
      width: 100%;
      top: 50%;
    }
    input[type="range"] {
      -webkit-appearance: none;
      width: calc(100% - 16px);
      position: absolute;
      bottom: 5px;
      left: 0;
      &:last-of-type {
        margin-left: 16px;
      }

      &::-webkit-slider-thumb {
        ${thumbStyle}
      }
      &::-moz-range-thumb {
        ${thumbStyle}
      }
      &::-ms-thumb {
        ${thumbStyle}
      }
      &::-webkit-slider-runnable-track {
        -webkit-appearance: none;
        height: 0px;
      }
      &::-moz-range-track {
        -webkit-appearance: none;
        height: 0px;
      }
      &::-ms-track {
        -webkit-appearance: none;
        height: 0px;
      }
    }
  }
`;
