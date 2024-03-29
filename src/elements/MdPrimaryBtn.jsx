import React from "react";
import styled from "styled-components";
const MdPrimaryBtn = ({
  bgColor,
  color,
  radius,
  children,
  height,
  padding,
  border,
  width,
  onClick,
  type
}) => {
  const styles = {
    bgColor,
    color,
    radius,
    height,
    children,
    padding,
    border,
    width,
    type
  };
  return (
    <StMdSeconBtn {...styles} onClick={onClick}>
      {children}
    </StMdSeconBtn>
  );
};
// props 정리, props의 타입모듈.
MdPrimaryBtn.defaultProps = {
  bgColor: "#7e54a2",
  color: "#fff",
  radius: "5px",
  onclick: () => {},
  width: "150px",
  height: "55px",
  border: "none",
};
const StMdSeconBtn = styled.button`
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ color }) => color};
  border-radius: ${({ radius }) => radius};
  width: ${({ width }) => width};
  padding: ${({ padding }) => padding};
  height: ${({ height }) => height};
  border: ${({ border }) => border};
  type :${({ type }) => type};
  cursor: pointer;
`;
export default MdPrimaryBtn;
