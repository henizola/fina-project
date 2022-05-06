import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  margin-top: 100px;
  .default {
    background-color: #071928;
    padding: 5px 30px;

    border: none;
    border-radius: 3px;
    color: #f79e01;
    font-size: 20px;
    margin: 50px auto;
    float: right;
    margin-right: 200px;
    margin-top: 100px;
  }
  @media screen and (max-width: 700px) {
    margin-top: 50px;
  }
`;
