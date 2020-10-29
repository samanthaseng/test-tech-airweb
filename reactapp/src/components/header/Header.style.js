import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const CartContainer = styled.div`
    img {
        width: 40px;
    }

    @media screen and (max-width: 576px) {
        img {
            width: 30px;
        };
    }
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: ${themeGet('colors.color1', '#1C2E40')};
    padding: 25px 40px;

    @media screen and (max-width: 576px) {
        padding: 15px 25px;
    }
`;

export const LogoContainer = styled.div`
    img {
        width: 50px;
    }

    @media screen and (max-width: 576px) {
        img {
            width: 35px;
        };
    }
`;

export const MenuButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 10px 0 5px 0;
`;

export const MenuItemDescription = styled.p`
    margin: 0;
`;

export const MenuItemTitle = styled.h4`
    font-weight: bold;
    margin: 0;
`;

export const MenuTitle = styled.h3``;