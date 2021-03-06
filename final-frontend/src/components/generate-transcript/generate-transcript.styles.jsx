import styled from 'styled-components';

export const Container = styled.div`
  width: 80vw;
  margin: 0 auto;
  text-align: center;
  margin-top: 100px;
  h1 {
    margin-bottom: 50px;
  }
  .cont {
    display: flex;
    flex-direction: column;
  }
  .left {
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 15px;
    width: 50vw;
    padding: 0;
    height: fit-content;
  }
  .right {
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    text-align: left;
    grid-gap: 15px;
    width: 400px;
    margin-top: 50px;
    padding: 25px;
    height: fit-content;
    background-color: #071928;
    border-radius: 5px;
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
    color: #fff;
  }
  .left span {
    color: #071928;
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
    width: 120px;
    height: 35px;
    border: 1px solid gray;
    color: #f79e01;
    justify-self: right;
    background-color: transparent;
    border-radius: 5px;
  }
  .result {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 80vw;
  }
`;
