import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  max-height: 100vh;
  overflow-y: hidden;
  background-color: #071928;
  display: grid;
  grid-template-rows: 195px 100px 1fr;
  padding: 50px 0;
  .logo {
    height: 100%;
    margin: 0 auto;
  }
  .header {
    color: #f79e01;
    margin: 0px auto;
    padding-top: 30px;
    height: 100%;
    font-size: 43px;
  }
  .roles-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 50px;
    height: 100%;
    padding: 100px 150px;
  }
  .role {
    height: 200px;
    width: 100%;
    /* background-color: white; */

    border-radius: 20px;
    transition: all 1.5s;
    display: grid;
    grid-template-rows: 120px 1fr;
    grid-gap: 10px;
    padding: 10px 0;
    .role-img {
      height: 100%;
      max-width: 90%;
      margin: 5px auto;
    }
    .role-name {
      margin: 0 auto;
      padding: 0;
      color: #f79e01;
    }
  }
  .role:hover {
    transform: scale(1.05);
  }
  @media screen and (max-width: 700px) {
    max-height: fit-content;
    max-width: 100vw;
    overflow-x: hidden;
    grid-template-rows: 105px 100px 1fr;
    .roles-container {
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 50px;
      height: 100%;
      padding: 20px 0px;
    }
  }
`;
