import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  max-height: 100vh;
  max-width: 100vw;
  overflow: hidden;
  display: grid;
  grid-template-rows: 200px 1fr;
  .logo {
    height: 100%;
    margin: 50px auto;
  }
`;

export const FormContainer = styled.div`
  width: 50vw;
  height: 50%;
  margin: 150px auto;
  .input {
    width: 60%;
    border: 1px solid gray;
    height: 60px;
    margin: 20px auto;
    margin-left: 50%;
    transform: translateX(-50%);
    border-radius: 5px;
    padding-left: 20px;
    font-size: 20px;
  }
  .input:active {
    outline: none;
  }
  .default {
    background-color: #071928;
    padding: 10px 70px;

    border: none;
    margin-left: 38%;
    border-radius: 3px;
    color: #f79e01;
    font-size: 20px;
  }
`;