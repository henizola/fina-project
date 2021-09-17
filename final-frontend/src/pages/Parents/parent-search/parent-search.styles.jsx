import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 100vw;
  max-height: 100vh;
  text-align: center;
  h1 {
    margin-top: 100px;
    margin-bottom: 50px;
  }
  .cont {
    display: flex;
    width: 70vw;
    flex-direction: column;

    margin: 0 auto;
  }
  .left {
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 15px;
    width: 100%;
    margin-top: 100px;
    padding: 0;
    height: fit-content;
  }
  .right-cont {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 50px;
  }
  .right {
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-align: left;
    grid-gap: 15px;
    width: 100%;
    margin-top: 50px;
    padding: 25px;
    height: 200px;
    background-color: #071928;
    border-radius: 5px;
    color: #707070 !important;
  }
  .flex {
    display: flex;
    flex-direction: column;
  }
  .center {
    text-align: center;
  }
  .input {
    width: 100%;
    height: 40px;
    padding-left: 10px;
    border: 1px solid #c9c9c9;
    border-radius: 3px;
  }
  span {
    margin-top: 10px;
    font-size: 20px;
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
  svg {
    margin-top: 3px;
  }
  @media screen and (max-width: 700px) {
    width: 100vw;
    .right-cont {
      grid-template-columns: 1fr;
      width: 90vw;
    }
    /* padding: ; */
    .cont {
      width: 95vw;
      margin: 0 auto;
      flex-direction: column;
    }
    .left {
      grid-template-columns: 1fr;
      margin: 0px 0;
    }
    .find {
      margin: 0 auto;
    }
    .right {
      margin: 0px auto;
      grid-template-columns: 1fr;
      width: 90vw;
      height: fit-content;
    }
  }
`;
