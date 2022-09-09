import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderContainer = styled.div`
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-bottom: 25px;
`;

export const LogoContainer = styled(NavLink)`
    height: 100%;
    width: 70px;
    padding: 11px;
    text-align: center;
`;

export const OptionsContainer = styled.ul`
    display: flex;

    a {
        text-decoration: none;
    }

    li {
        height: 50px;
        text-transform: uppercase;
        color: black;
        margin: 0 0.8rem;
        font-size: 1.3rem;
        position: relative;
        list-style: none;
    }

    .current {
        li {
            border-bottom: 2px solid #5ece7b;
        }
    }
`;

export const CartCurrencyContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
