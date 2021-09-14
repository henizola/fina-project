import styled from 'styled-components';

export const Container = styled.div`
  width: 340px;
  margin: 0 auto;
  height: 100px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  /* justify-content: space-around; */
  border: 1px solid rgba(170, 170, 170, 0.5);
  height: 200px;
  padding: 40px 20px;
  background-color: white;
  border-radius: 15px;
  -webkit-box-shadow: 0px 9px 7px -1px rgba(0, 0, 0, 0.35);
  -moz-box-shadow: 0px 9px 7px -1px rgba(0, 0, 0, 0.35);
  box-shadow: 0px 9px 7px -1px rgba(0, 0, 0, 0.35);
  padding-top: 60px;
  .icon {
    width: 40px;
  }
  .sign-btn {
    width: 300px;
    height: 50px;
    margin: 0 auto;
    border: 1px solid rgba(170, 170, 170, 0.3);
    padding: 10px;
    display: flex;
    justify-content: space-around;
    border-radius: 8px;
    font-size: 22px;
    font-weight: 400;
    background: #2c3e50;
    border: 0;
    color: #fff;
    cursor: pointer;
    margin-bottom: 20px;
  }
  .txts {
    margin-top: 10px;
  }
  @media screen and (max-width: 450px) {
    max-width: 80vw;
    .sign-btn {
      width: 70vw;
      font-size: 18px;
    }
  }
`;
