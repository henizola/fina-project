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
  .table {
    width: 80vw;
    margin: 50px auto;
    height: 60vh;
  }
  tfoot {
    border: 0px !important;
  }
`;
