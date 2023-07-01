import styled from "styled-components";

export const StyledHeader = styled.header`
  padding: 19px 24px 25px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    .menu {
      margin-right: 16px;
      cursor: pointer;
    }
    .avatar {
      margin-left: 22.18px;
      width: 24px;
      height: 24px;
      cursor: pointer;
      border: solid 4px #fff;
      border-radius: 50%;
      transition: all 0.3s ease;
      &:hover {
        border-color: #FF7E1B;
      }
    }
  }
  @media (min-width: 1440px) {
    padding: 28px 0px 0px 0px;
    border-bottom: 1px solid #e4e9f2;
    .navBox {
      margin-top: 13px;
      display: flex;
      align-items: flex-start;
      gap: 56.5px;
    }
    div {
      .avatar {
        margin-left: 26.18px;
        width: 50px;
        height: 50px;
      }
    }
  }
`;

export const StyledNav = styled.nav`
  background-color: #fff;
  position: absolute;
  top: 0px;
  left: 0px;
  padding: 24.78px 130px 0px 25px;
  height: 100vh;
  font-size: 18px;
  line-height: 26px;
  font-weight: 700;
  li {
    list-style-type: none;
    cursor: pointer;
  }
  img {
    margin-bottom: 53.78px;
    cursor: pointer;
  }
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
  }
  @media (min-width: 1440px) {
    font-weight: 400;
    font-size: 15px;
    color: #69707d;
    padding: 0px;
    position: unset;
    height: unset;
    ul {
      flex-direction: row;
      align-items: flex-start;
      gap: 32px;
      li {
        padding-bottom: 41px;
        border-bottom: solid 4px #fff;
        transition: all 0.3s ease;
        &:hover {
          border-color: #ff7e1b;
        }
      }
    }
  }
`;



