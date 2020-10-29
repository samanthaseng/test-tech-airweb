import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;

  .button-text {
    text-transform: uppercase;
  }
`;

export const CartContainer = styled.div`
  width: 700px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const CartMainContainer = styled.div`
  width: 100%;
  margin-top: 50px;
  display: flex;
  justify-content: center;
`;

export const CartTitle = styled.h1`
  color: ${themeGet('colors.color1', '#1C2E40')};
  font-weight: bold;
  margin-bottom: 20px;

  .cart-icon {
    margin-right: 20px;
  }

  @media screen and (max-width: 768px) {
    margin: 0 20px 20px 20px;
  }
`;

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: ${themeGet('backgrounds.image1', '#1C2E40')};
`;

export const TableContainer = styled.div`
  .delete-icon {
    cursor: pointer;
    font-size: 20px;
    color: ${themeGet('colors.color3', '#AE0000')};
  }

  .total-cart {
    font-weight: bold;
  }
`;