import React from 'react';
import { Badge } from 'antd';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    CartContainer,
    Container,
    LogoContainer
} from './Header.style';

function Header(props) {
    return (
      <Container>
        <LogoContainer>
            <Link to="/">
                <img src='./logo.svg' alt='logo' />
            </Link>
        </LogoContainer>

        <CartContainer>
            <Badge count={props.cart.length}>
                <Link to="/basket">
                    <img src='./shopping-cart.svg' alt="shopping cart" />
                </Link>
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
  