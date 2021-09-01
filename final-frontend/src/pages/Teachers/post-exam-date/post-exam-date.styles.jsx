import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 100vw;
  max-height: 100vh;
  text-align: center;
  .container {
    width: 40vw;

    padding: 0 100px;
  }

  h1 {
    margin: 80px auto;
    font-weight: 600;
  }
  .upload {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 40px;

    margin: 0 auto;
  }
  .post {
    background-color: #071928;
    padding: 10px 100px;
    border: none;
    margin-left: 08%;
    border-radius: 3px;
    color: #f79e01;
    font-size: 20px;
    margin-top: 50px;
  }
`;
