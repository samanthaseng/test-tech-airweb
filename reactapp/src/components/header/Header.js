import React from 'react';
import { Badge, Button, Dropdown, Menu } from 'antd';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    CartContainer,
    Container,
    LogoContainer,
    MenuButtonContainer,
    MenuItemDescription,
    MenuItemTitle,
    MenuTitle
} from './Header.style';

function Header(props) {
    const { cart } = props;
    
    let totalPrice = 0;
    const menuItems = cart.map((product, i) => {
        totalPrice += product.quantity * product.price /100;

        return (
            <Menu.Item key={i}>
                <MenuItemTitle>{product.label}</MenuItemTitle>
                <MenuItemDescription>Quantité : {product.quantity}</MenuItemDescription>
            </Menu.Item>
        )
    })

    const menu = (
        <Menu>
            <Menu.Item>
                <MenuTitle>Votre panier</MenuTitle>
            </Menu.Item>

            {menuItems}

            <Menu.Item>
                <MenuItemTitle>Total : {totalPrice} €</MenuItemTitle>
            </Menu.Item>        
            <Menu.Item>
            <MenuButtonContainer>
                <Link to='/basket' className='button-cart'>
                    <Button type='primary'>Voir le panier</Button>
                </Link>      
                </MenuButtonContainer>            
            </Menu.Item>
        </Menu>
    );

    return (
      <Container>
        <LogoContainer>
            <Link to="/">
                <img src='./logo.svg' alt='logo' />
            </Link>
        </LogoContainer>

        <CartContainer>
            <Badge count={cart.length}>
                <Dropdown overlay={menu} placement='bottomRight' arrow>
                    <Link to='/basket'>
                        <img src='./shopping-cart.svg' alt='access to shopping cart' />
                    </Link>
                </Dropdown>
            </Badge>
        </CartContainer>
      </Container>
    );
}

function mapStateToProps(state) {
    return { cart: state.cart }
}
  
export default connect(
    mapStateToProps, 
    null
)(Header);
  