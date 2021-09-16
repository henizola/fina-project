import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 100vw;
  max-height: 100vh;
  .top {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    margin-top: 50px;
    padding: 0 50px;
    a {
      justify-self: right;
      border: 1px solid #071928;
      padding: 15px;
      border-radius: 3px;
    }
    h1 {
      justify-self: center;
    }
    .input {
      margin-right: 20px;
      height: 50px;
      font-size: 20px;
      padding-left: 15px;
    }
    svg {
      border: 1px solid #071928;
    }
  }
  .cards {
    margin: 50px auto;
    width: 60vw;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 50px;
  }
  .card {
    height: 30vh;
    background-color: #071928;
    color: #f79e01;
    text-align: center;
    padding: 15px;
    display: flex;
    flex-direction: column;
  }
  .status {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 20px;
    grid-row-gap: 40px;

    select {
      background-color: transparent;
      color: #f79e01;
      border: 1px solid #f79e01;
      font-size: 20px;
    }
    svg {
      margin: 0 auto;
      font-size: 42px;
    }
    button {
      background-color: transparent;
      color: #f79e01;
      border: 1px solid #f79e01;
      font-size: 20px;
      width: 100px;
      margin: 0 auto;
      border-radius: 3px;
    }
  }
  .table {
    width: 80vw;
    margin: 50px auto;
    height: 60vh;
  }
`;
