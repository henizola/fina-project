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
  position: relative;
  .mobile {
    display: none;
  }

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

  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  ::-webkit-scrollbar-thumb {
    background: #888;
  }
  ::selection {
    background: rgb(0, 123, 255, 0.3);
  }
  .content {
    max-width: 1250px;
    margin: auto;
    padding: 0px 0px;
  }
  .navbar {
    position: fixed;
    z-index: 5;
    width: 100%;
    padding: 0;
    transition: all 0.3s ease;
    z-index: 99999999;
  }
  .navbar.sticky {
    padding: 10px 0;
    background-color: #071928;

    box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.1);
  }
  .navbar .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .navbar .logo a {
    color: #fff;
    font-size: 30px;
    font-weight: 600;
    text-decoration: none;
  }
  .navbar .menu-list {
    display: inline-flex;
  }
  .menu-list li {
    list-style: none;
  }
  .menu-list li a {
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    margin-left: 25px;
    text-decoration: none;
    transition: all 0.3s ease;
  }
  .menu-list li a:hover {
    color: #007bff;
  }
  .banner {
    height: 100vh;
    background: url('banner.jpg') no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
  }
  .about {
    padding: 40px 0;
  }
  .about .title {
    font-size: 35px;
    font-weight: 700;
  }
  .about p {
    padding-top: 20px;
    text-align: justify;
  }
  .icon {
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    display: none;
  }
  .icon.cancel-btn {
    position: absolute;
    right: 30px;
    top: 20px;
  }
  .navbar.sticky .icon.cancel-btn {
    top: 10px;
  }
  @media (max-width: 868px) {
    body.disabledScroll {
      overflow: hidden;
    }
    .icon {
      display: block;
      height: 50px;
      width: 50px;
      text-align: center;
      line-height: 50px;
      border-radius: 50%;
      z-index: 9;
    }
    .icon.cancel-btn {
      display: none;
    }
    .icon.cancel-btn.show {
      display: block;
    }
    .icon.hide {
      display: none;
    }
    .navbar .menu-list {
      position: fixed;
      top: 0;
      left: 0;
      height: 100vh;
      width: 100%;
      background-color: #071928;

      display: block;
      padding: 40px 0;
      text-align: center;
      clip-path: circle(
        1px at calc(100% - 55px) calc(0% + 50px)
      );
      transition: all 0.3s ease;
    }
    .navbar.sticky .menu-list {
      clip-path: circle(
        25px at calc(100% - 55px) calc(0% + 35px)
      );
    }
    .navbar .menu-list.active {
      clip-path: circle(75%);
    }
    .navbar .menu-list li {
      margin-top: 45px;
    }
    .navbar .menu-list li a {
      font-size: 23px;
    }
  }

  ul div {
    display: flex !important;
    flex-direction: column !important;
    font-size: 30px;
    justify-content: space-between;
    padding-top: 20px;
    width: 60vw;
    margin: 0 auto;
    height: 100%;
  }
  .show {
    position: absolute;
    right: 100px;
    top: 0px;
    font-size: 50px;
  }
  img {
    height: 70px;
  }
  @media screen and (max-width: 700px) {
    background-color: transparent !important;

    .desktop {
      display: none !important;
    }
    .mobile {
      display: block;
    }
    .logo {
      display: none;
    }
    .logo-mobile {
      position: absolute;
      left: 0;
      top: 15px;
    }
    .shoew {
    }
  }
`;
