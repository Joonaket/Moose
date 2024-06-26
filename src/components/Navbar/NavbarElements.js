// Filename - ./components/Navbar.js

// Kirjoita käsin alempi rivi, niin ide tarjoaa importtia
import { FaBars } from "react-icons/fa"
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    
    height: 85px;
    display: flex;
    justify-content: center;
    padding: 0.2rem calc((100vw - 1000px) / 2);
    z-index: 12;
    
    align-items: normal;
`;

export const NavLink = styled(Link)`
    color: #808080;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    justify-content: center;
    

    &.active {
        color: #ededf1;
    }
`;

export const Bars = styled(FaBars)`
	display: none;
	color: #808080;
    
	@media screen and (max-width: 768px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 75%);
		font-size: 1.8rem;
		cursor: pointer;
	}
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;
    font-weight: bold;
    text-decoration: none;
    color: #fff;
    background-color: #0a130a;
    border: none;
    border-radius: 25px;
    font-size: 16px;
    /* Second Nav */
    /* margin-right: 24px; */
    /* Third Nav */
    /* width: 100vw;
white-space: nowrap; */
    @media screen and (max-width: 768px) {
        display: none;
    }
`;
