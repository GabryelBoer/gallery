import styled from "styled-components";

export const Container = styled.div`
  background-color: #3d3f43;
  border-radius: 10px;
  padding: 10px;
  position: relative;

  img {
    max-width: 100%;
    display: block;
    margin-bottom: 10px;
    border-radius: 10px;
    cursor: pointer;
  }
`;

export const DelButton = styled.div`
  background-color: #3d3f43;
  border-radius: 10px;
  position: absolute;
  right: 0px;
  top: 0%;
  padding: 10px;
  cursor: pointer;
  transition: font-size 0.1s;

  &:hover {
    font-size: 1.1em;
  }
`;
