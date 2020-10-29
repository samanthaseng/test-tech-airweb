import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const BackTopButton = styled.div`
  height: 40px;
  width: 40px;
  line-height: 40px;
  border-radius: 4px;
  background-color: ${themeGet('colors.color1', '#1C2E40')};
  color: #ffffff;
  text-align: center;
`;

export const CardFirstPart = styled.div`
  display: flex;
`;

export const CardSecondPart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;

  @media screen and (max-width: 576px) {
    flex-direction: column;
    align-items: flex-end;
    margin-top: 0;
  }
`;

export const CatalogContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0;

  @media screen and (max-width: 576px) {
    width: 100%;
    margin: 10px 0;
  }
`;

export const CategoryContainer = styled.div`
  margin: 20px 0;
  width: 498px;

  @media screen and (max-width: 576px) {
    width: 100%;
    padding: 0 20px 0 20px;
    margin: 10px 0;
  }
`;

export const CategoryContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CategoryDescription = styled.p`
  
`;

export const CategoryTitle = styled.h2`
  margin-bottom: 0;
  font-weight: bold;
  color: ${themeGet('colors.color1', '#1C2E40')};
`;

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: ${themeGet('backgrounds.image1', '#1C2E40')};
`;

export const FiltersContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

export const Price = styled.p`
  margin: 0;
  font-weight: bold;
`;

export const PriceContainer = styled.div`
  background-color: ${themeGet('colors.color2', '#808080')};
  padding: 4px 4px;
  width: 60px;
  text-align: center;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
  border-radius: 2px;
`;

export const ProductCardContainer = styled.div`
  margin: 5px 0;

  .product-card {
    min-width: 500px;
    max-width: 500px; 
    cursor: default;
  }

  .button-text {
    text-transform: uppercase;
  }

  @media screen and (max-width: 576px) {
    .product-card {
      min-width: 100%;
      max-width: 100%;
    }

    .ant-card-body {
      padding: 10px;
      display: flex;
    }

    .button-text {
      display: none;
    }
  }
`;

export const ProductDescription = styled.p`
  margin: 0;
`;

export const ProductImageContainer = styled.div`
  img {
    border-radius: 50%;
    width: 80px;
    margin-right: 24px;
  }

  @media screen and (max-width: 576px) {
    img {
      width: 60px;
      margin-right: 15px;
    }
  }
`;

export const ProductInfos = styled.div`
  width: 100%;
`;

export const ProductTitle = styled.h3`
  color: ${themeGet('colors.color1', '#1C2E40')};
`;