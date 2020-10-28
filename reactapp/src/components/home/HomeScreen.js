import React, { useEffect, useState } from 'react';
import { Card } from 'antd';
import Category from './Category';
import {
  CatalogContainer,
  Container
} from './HomeScreen.style';
import Header from '../header/Header';
import apiCall from '../../helpers/services/apiCall';

function HomeScreen() {
  const [ categories, setCategories ] = useState([]);

  useEffect(() => {
    async function loadData() {
      const options = {
        route: '/products'
      }
      const response = await apiCall(options);
      setCategories(response.categoriesList);
    };
    loadData();
  }, [])

  const CategoriesToDisplay = categories.length > 0 
    ? categories.map(category => {
      return (
        <Category
          key={category.label}
          name={category.label}
          description={category.description}
          products={category.products}
        />
      )
    })
    : <Card style={{ width: 300, marginTop: 16 }} loading={true} />

  return (
    <Container>
      <Header />
      <CatalogContainer>
        {CategoriesToDisplay}
      </CatalogContainer>
    </Container>
  );
}

export default HomeScreen;
