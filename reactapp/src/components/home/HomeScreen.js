import React, { useEffect, useState } from 'react';
import { Card } from 'antd';
import { connect } from 'react-redux';
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
    const categoriesList = [
      {
        id: 1,
        index: 1,
        label: "Titres Unitaires",
        description: "Correspondances illimitées dans l'heure suivant la première validation.",
        products: [
          {
            id: 1,
            label: "Titre unitaire",
            description: "Titre permettant de voyager sur l'ensemble du réseau. Correspondances illimitées dans l'heure suivant la première validation.",
            price: 150,
            category_id: 1,
            thumbnail_url: "https://picsum.photos/256/256"
          },
          {
            id: 2,
            label: "2 x Titre Unitaire",
            description: "Pack aller-retour. Titres permettant de voyager sur l'ensemble du réseau. Correspondances illimitées dans l'heure suivant la première validation.",
            price: 250,
            category_id: 1,
            thumbnail_url: "https://picsum.photos/256/256"
          }
        ]
      },
      {
        id: 2,
        index: 3,
        label: "Abonnements",
        description: "Validations illimité dans la periode de l'abonnement. Attention, la validation reste obligatoire à chaque montée.",
        products: [
          {
            id: 7,
            label: "Ticket Parking+Transport",
            description: "Titre permettant de se garer dans l'un de nos 48 parkings réservés, ainsi que de faire l'aller-retour sur notre réseau de transport. Valable pour tous les passagers de la voiture (jusqu'à 9)",
            price: 400,
            category_id: 2,
            thumbnail_url: "https://picsum.photos/256/256"
          },
          {
            id: 8,
            label: "Carnet 10 x Ticket Parking+Transportt",
            description: "Carnet de 10 titre permettant de se garer dans l'un de nos 48 parkings réservés, ainsi que de faire l'aller-retour sur notre réseau de transport. Valable pour tous les passagers de la voiture (jusqu'à 9)",
            price: 3000,
            category_id: 2,
            thumbnail_url: null
          }
        ]
      }
    ]

    async function loadData() {
      const options = {
        route: '/products'
      }
      const response = await apiCall(options);
      console.log(response)
      // setCategories(categoriesList);
    };
    loadData();

    setCategories(categoriesList)
  }, [])

  const CategoriesToDisplay = categories.length > 0 
    ? categories.map(category => {
      return (
        <Category
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

function mapDispatchToProps(dispatch) {
  return {
    addProduct: function(product) { 
      dispatch( { type: 'add', product: product } ) 
    }
  }
}

export default connect(
  null, 
  mapDispatchToProps
)(HomeScreen);
