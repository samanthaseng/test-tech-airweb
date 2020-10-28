import React from 'react';
import { Button, Card } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import {
  CardFirstPart,
  CardSecondPart,
  Price,
  PriceContainer,
  ProductCardContainer,
  ProductDescription,
  ProductImageContainer,
  ProductInfos,
  ProductTitle
} from './HomeScreen.style';

export default function ProductCard(props) {
  const { id, name, description, price, image } = props;

  const displayImage = image 
    ? <ProductImageContainer>
        <img src={image} alt={name} />
      </ProductImageContainer>
    : '';

  return (
    <ProductCardContainer>
      <Card className='product-card'>
        <CardFirstPart>
          {displayImage}

          <ProductInfos>
            <ProductTitle>{name}</ProductTitle>
            <ProductDescription>{description}</ProductDescription>
          </ProductInfos>
        </CardFirstPart>

        <CardSecondPart>
          <PriceContainer>
            <Price>{price/100} €</Price>
          </PriceContainer>

          <Button type='primary' icon={<ShoppingCartOutlined />}>
            <span className='button-text'>
              Ajouter au panier
            </span>
          </Button>
        </CardSecondPart>
      </Card>
    </ProductCardContainer>
  );
}
  