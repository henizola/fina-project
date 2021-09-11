import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 100vw;
  max-height: 100vh;
  text-align: center;
  h1 {
    margin-top: 100px;
  }

  .card {
    background-color: #071928;
    border-radius: 5px;
    color: #707070 !important;
    width: 100%;
    padding: 15px;
    text-align: left;
    display: grid;
    grid-template-columns: 1fr 3fr;
    font-size: 18px;
    grid-row-gap: 25px;
  }
  .cards {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 50px;
    padding: 100px;
  }
  @media screen and (max-width: 700px) {
    .cards {
      grid-template-columns: 1fr;
      grid-gap: 30px;
      padding: 20px;
    }
  }
`;
