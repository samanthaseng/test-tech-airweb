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

function BasketScreen(props) {
  const { cart, deleteProduct } = props;
  const { Text } = Typography;

  const handleDelete = (id) => {
    deleteProduct(id);
  }

  const tableData = cart.map((product, i) => {
    return {
      key: i,
      id: product.id,
      name: product.label,
      quantity: product.quantity,
      price: product.price/100,
      totalprice: product.quantity * product.price/100,
      action: <DeleteOutlined className='delete-icon' onClick={() => handleDelete(product.id)} />
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
  
function mapStateToProps(state) {
  return { cart: state.cart }
}

function mapDispatchToProps(dispatch) {
  return {
    deleteProduct: function(id) { 
      dispatch({ type: 'deleteProduct', id }) 
    }
  }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(BasketScreen);
  