import styled from 'styled-components';

export const Container = styled.div`
  width: 700px;
  margin: 100px auto;
  text-align: center;

  h1 {
    margin-bottom: 50px;
  }
  .cont {
    display: flex;
  }
  .left {
    margin: 0 auto;
    display: grid;
    grid-template-columns: 200px 1fr;
    grid-gap: 15px;
    width: 300px;
    margin-top: 100px;
    padding: 0;
    height: fit-content;
  }
  .right {
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    text-align: left;
    grid-gap: 15px;
    width: 500px;
    margin-top: 50px;
    padding: 25px;
    height: fit-content;
    background-color: #071928;
    border-radius: 5px;
    margin-left: 100px;
  }
  .input {
    width: 200px;
    height: 40px;
    padding-left: 10px;
    border: 1px solid #c9c9c9;
    border-radius: 3px;
  }
  span {
    margin-top: 10px;
    font-size: 20px;
    color: #ffff;
  }
  .find {
    background-color: #071928;
    margin: 0px 0;
    padding: 5px;
    width: 200px;
    border: none;
    border-radius: 3px;
    color: #f79e01;
    font-size: 20px;
  }
  .export {
    width: 170px;
    height: 35px;
    border: 1px solid gray;
    color: #f79e01;
    justify-self: right;
    background-color: transparent;
    border-radius: 5px;
  }
`;
