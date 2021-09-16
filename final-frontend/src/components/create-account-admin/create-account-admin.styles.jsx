import styled from 'styled-components';

export const Container = styled.div`
  width: 700px;
  margin: 100px auto;
  text-align: center;

  h1 {
    margin-bottom: 50px;
  }
  .form {
    width: fit-content;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 100px 1fr 130px 1fr;
    grid-gap: 20px;
    margin-top: 50px;
    text-align: right;
  }
  .input {
    width: 200px;
    height: 40px;
    border: 1px solid #c9c9c9;
    border-radius: 3px;
  }
  span {
    margin-top: 10px;
    font-size: 20px;
  }
  .default {
    background-color: #071928;
    padding: 5px 30px;

    border: none;
    border-radius: 3px;
    color: #f79e01;
    font-size: 20px;
    margin: 50px auto;
  }
  @media screen and (max-width: 700px) {
    width: 100vw;
    padding: 0;
    svg {
      /* display: none; */
      width: 70px;
    }
    span {
      font-size: 15px;
    }
    .form {
      grid-template-columns: 100px 1fr;
      width: 100%;
      margin: 0 !important;
    }
    .input {
      width: 80%;
    }
  }
`;
