import styled from "styled-components";

const pxToRem = (size) => `${size / 16}rem`;

const TextWrap01 = styled.div`
  padding-top: ${pxToRem(8)};
  font-weight: 300;

  font-size: ${pxToRem(20)};
  color: white;
`;
const ProfileImage = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #512da8;
  font-size: 15px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1024px) {
    width: 40px;
    height: 40px;
  }
`;
const Button = styled.button`
  font-size: ${pxToRem(16)};
  border: none;

  margin-top: 30px;
  margin-left: ${pxToRem(10)};
`;

export { TextWrap01, ProfileImage, Button };
