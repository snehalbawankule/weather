import styled from "styled-components";

const pxToRem = (size) => `${size / 16}rem`;

const Article = styled.text`
  font-weight: 600;
  font-size: ${pxToRem(20)};
`;

const TextWrap03 = styled.div`
  font-weight: 300;
  color: #000000;
  padding-top: ${pxToRem(24)};
  font-size: ${pxToRem(20)};
  @media (max-width: 767px) {
    font-size: ${pxToRem(16)};
  }
`;
const TextWrap01 = styled.div`
  font-weight: 300;
  font-size: ${pxToRem(16)};
`;
const TextWrap02 = styled.div`
  font-weight: 500;
  font-size: ${pxToRem(20)};
  text-align: center;
  margin-right: ${pxToRem(25)};
  margin-bottom: ${pxToRem(10)};
`;
const Card = styled.div`
  margin-left: ${pxToRem(30)};
  margin-top: ${pxToRem(25)};
  width: 100%;
  background-color: white;
  border: "none";
  box-shadow: "none";
  border-radius: ${pxToRem(30)};
  justify-content: "flex";
`;
export { TextWrap02, TextWrap03, TextWrap01, Article, Card };
