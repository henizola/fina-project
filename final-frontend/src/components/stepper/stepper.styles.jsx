import styled from 'styled-components';

export const Contanier = styled.div`
  width: 80vw;
  height: 40px;
  display: flex;
  flex-direction: column;
  margin: 10px auto;
  padding: 20px;
  .nav {
    display: flex;
    height: 100%;
    width: 80vw;
    justify-content: space-between;
    position: relative;
    margin: 0 auto;
    z-index: 4;
  }
  .tab {
    font-size: 18px;
    font-weight: 500;
    min-width: 50px;
    text-align: center;
  }
  .circle {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid rgba(170, 170, 170, 0.3);
    margin: 0 auto;
    background-color: #071928;
    position: relative;
    z-index: 1;
  }
  .inner-circle {
    width: 10px;
    height: 10px;
    margin: 0 auto;
    margin-top: 50%;
    border: none;
    background-color: white;
    transform: translateY(-50%);
  }
  .active-inner {
    background-color: #f79e01;

    border: 1px solid rgba(170, 170, 170, 0.3);
  }
  .active-outer {
    background-color: white;
    -webkit-box-shadow: 0px 6px 20px -7px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 6px 20px -7px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 6px 20px -7px rgba(0, 0, 0, 0.75);
  }
  .progress {
    width: 92%;
    height: 3px;
    background-color: #2c3e50;
    border: none;
    position: absolute;
    margin: 0 auto;
    left: 50px;
    top: 15px;
    z-index: 0;
  }
  @media screen and (max-width: 450px) {
    width: 100vw;
    padding: 10px;
    .circle {
      width: 20px;
      height: 20px;
    }
    .nav {
      width: 100%;
    }
    .inner-circle {
      width: 5px;
      height: 5px;
    }
    .tab {
      font-size: 18px;
      font-weight: 400;
    }
    .tab-name {
      display: none;
    }
    .active {
      display: block;
    }
    .progress {
      top: 10px;
      width: 78%;
      left: 50px;
    }
    span {
      font-size: 14px;
    }
  }
`;
