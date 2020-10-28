import React from 'react';
import { Button, Table, Typography } from 'antd';
import { DeleteOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import {
  ButtonContainer,
  CartContainer,
  CartMainContainer,
  CartTitle,
  Container,
  TableContainer
} from './BasketScreen.style';
import Header from '../header/Header';
import { cartColumns } from '../../config/cart-columns';

function BasketScreen() {
  const { Text } = Typography;

  const products = [
    {
      id: 1,
      label: "Titre unitaire",
      description: "Titre permettant de voyager sur l'ensemble du réseau. Correspondances illimitées dans l'heure suivant la première validation.",
      price: 150,
      category_id: 1,
      thumbnail_url: "https://picsum.photos/256/256",
      quantity: 5
    },
    {
      id: 2,
      label: "2 x Titre Unitaire",
      description: "Pack aller-retour. Titres permettant de voyager sur l'ensemble du réseau. Correspondances illimitées dans l'heure suivant la première validation.",
      price: 250,
      category_id: 1,
      thumbnail_url: "https://picsum.photos/256/256", 
      quantity: 1
    }
  ];

  const tableData = products.map((product, i) => {
    return {
      key: i,
      id: product.id,
      name: product.label,
      quantity: product.quantity,
      price: product.price/100,
      totalprice: product.quantity * product.price/100,
      action: <DeleteOutlined className='delete-icon' />
    }
  });

  const cartTable = (
    <Table
      columns={cartColumns}
      dataSource={tableData}
      pagination={false}
      bordered
      summary={product => {
        let totalCart = 0;

        product.forEach(({totalprice}) => {
          totalCart += totalprice;
        });

        return (
          <>
            <Table.Summary.Row>
              <Table.Summary.Cell colSpan={3}>Total</Table.Summary.Cell>
              <Table.Summary.Cell colSpan={2}>
                <Text className='total-cart'>{totalCart} €</Text>
              </Table.Summary.Cell>
            </Table.Summary.Row>
          </>
        );
      }}
    />
  )

  return (
    <Container>
      <Header />
      <CartMainContainer>
        <CartContainer>
          <CartTitle>
            <ShoppingCartOutlined className='cart-icon' />
            Votre panier
          </CartTitle>
          <TableContainer>
            {cartTable}
          </TableContainer>

          <ButtonContainer>
            <Button type='primary'>
              <span className='button-text'>Accéder au paiement</span>
            </Button>
          </ButtonContainer>
          
        </CartContainer>
      </CartMainContainer>
    </Container>
  );
}
  
export default BasketScreen;
  