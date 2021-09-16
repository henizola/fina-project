import styled from 'styled-components';

export const Container = styled.div`
  width: 900px;
  margin: 100px auto;
  text-align: center;

  h1 {
    margin-bottom: 50px;
  }
  .form {
    width: fit-content;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    margin-top: 50px;
    text-align: right;
  }
  .box {
    display: grid;
    grid-template-columns: 180px 1fr;
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
  span:nth-child(even) {
    text-align: left;
    margin-left: 20px;
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
    margin: 0 !important;
    max-width: 100vw;
    span{font-size: 13px;}
    .box{
      grid-template-columns: 100px 1fr;
    }
      width: 300px;
    }
    .form {
      grid-template-columns: 1fr;
      margin: 0 !important;
    }
  }
`;
