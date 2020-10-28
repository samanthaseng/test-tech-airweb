import React from 'react';
import {
  CategoryContainer,
  CategoryContent,
  CategoryDescription,
  CategoryTitle
} from './HomeScreen.style';
import ProductCard from './ProductCard';

export default function Category(props) {
    const { name, description, products } = props;

    const productsToDisplay = products.map(product => {
        return (
            <ProductCard 
                id={product.id}
                name={product.label}
                description={product.description}
                price={product.price}
                image={product.thumbnail_url}
            />
        )
    })

    return (
        <CategoryContainer>
            <CategoryTitle>{name}</CategoryTitle>
            <CategoryDescription>{description}</CategoryDescription>
            <CategoryContent>
                {productsToDisplay}
            </CategoryContent>            
        </CategoryContainer>
    );
}
  