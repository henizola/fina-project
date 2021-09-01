import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100px;
  max-width: 100vw;
  max-height: 100px;
  display: flex;
  justify-content: space-between;
  background-color: #071928;
  padding: 0 50px;
  a {
    color: #f79e01;
  }
  .logo {
    height: 70px;
    margin: 15px auto;
  }
  .links {
    width: fit-content;
    display: flex;
    max-width: 83vw;
    justify-content: space-between;
    height: fit-content;
    margin-top: 40px;
    /* transform: translateY(-50%); */
  }
  .links a {
    margin-left: 50px;
  }
  .links svg {
    margin-left: 50px;
  }
`;
