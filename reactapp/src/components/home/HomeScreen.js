import React, { useEffect, useState } from 'react';
import { BackTop, Card, Checkbox } from 'antd';
import { UpOutlined } from '@ant-design/icons';
import Category from './Category';
import {
  BackTopButton,
  CatalogContainer,
  Container,
  FiltersContainer
} from './HomeScreen.style';
import Header from '../header/Header';
import apiCall from '../../helpers/services/apiCall';

function HomeScreen() {
  const [ categories, setCategories ] = useState([]);
  const [ categoriesToDisplay, setCategoriesToDisplay ] = useState([]);
  const [ filtersList, setFiltersList ] = useState([]);

  useEffect(() => {
    async function loadData() {
      const options = {
        route: '/products'
      }
      const response = await apiCall(options);
      setCategories(response.categoriesList);
      setCategoriesToDisplay(response.categoriesList);
    };
    loadData();
  }, []);

  useEffect(() => {
    let categoriesToDisplayCopy = [...categoriesToDisplay];
    
    if (filtersList.length === 0) {
      categoriesToDisplayCopy = [...categories];
    } else {

      categoriesToDisplayCopy = categories.filter(category => filtersList.includes(category.label))
    }
    setCategoriesToDisplay(categoriesToDisplayCopy)
  }, [filtersList]);

  const filterManagement = (e) => {
    let filterValue = e.target.category;
    const findFilter = filtersList.find(name => name === filterValue);
    let newFiltersList = [...filtersList];

    if (findFilter === undefined) {
      newFiltersList.push(filterValue);
      setFiltersList(newFiltersList);
    } else {
      newFiltersList = newFiltersList.filter(name => name !== filterValue);
      setFiltersList(newFiltersList);
    };
  }

  const catalogToDisplay = categoriesToDisplay.length > 0 
    ? categoriesToDisplay.map(category => {
      return (
        <Category
          key={category.label}
          name={category.label}
          description={category.description}
          products={category.products}
        />
      );
    })
    : <Card style={{ width: 300, marginTop: 16 }} loading={true} />;

  const filters = categories.length > 0
    ? categories.map(category => {
        return (
          <Checkbox onChange={filterManagement} category={category.label}>{category.label}</Checkbox>
        )
      })
    : [];
    
  return (
    <Container>
      <Header />
      <FiltersContainer>
        {filters}
      </FiltersContainer>

      <CatalogContainer>
        {catalogToDisplay}
      </CatalogContainer>
      <BackTop>
        <BackTopButton>
          <UpOutlined />
        </BackTopButton>
      </BackTop>
    </Container>
  );
}

export default HomeScreen;
