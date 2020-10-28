import React from 'react';
import { Button, Card } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
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

function ProductCard(props) {
  const { id, name, description, price, image, addProduct } = props;

  const displayImage = image 
    ? <ProductImageContainer>
        <img src={image} alt={name} />
      </ProductImageContainer>
    : '';

  const handleAdd = () => {
    const productInfos = {   
      id: id,
      label: name,
      description: description,
      price: price,
      image: image
    }
    addProduct(productInfos);
  }

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

          <Button type='primary' icon={<ShoppingCartOutlined />} onClick={handleAdd}>
            <span className='button-text'>
              Ajouter au panier
            </span>
          </Button>
        </CardSecondPart>
      </Card>
    </ProductCardContainer>
  );
}
  
function mapDispatchToProps(dispatch) {
  return {
    addProduct: function(product) { 
      dispatch({ type: 'addProduct', product: product }) 
    }
  }
}

export default connect(
  null, 
  mapDispatchToProps
)(ProductCard);
