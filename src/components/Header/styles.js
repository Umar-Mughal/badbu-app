import styled from 'styled-components/macro';


export const StyledHeader = styled.header`
    display: flex;
    position: fixed;
    z-index: 180;
    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: #e6e6e6; 
    }
    a {
        color: var(--text-purple);
        &.active {
            color: var(--primary);
            font-weight: bold;
        }
    }
    .header-top {
        a, span, p {
            white-space: nowrap;
            font-weight: 600;
            @media (max-width: 1600px) {
                font-size: 12px;
            }
        }
        >  .social-links {
            gap: 24px;
            svg {
                &:hover {
                    path {
                        fill: var(--primary);
                    }
                    
                }
            }
            @media (max-width: 1600px) {
                    gap: 5px;
                }
        }
        .left-list {
            a {
                &:hover {
                    svg {
                        path {
                            stroke: var(--primary);
                        }
                    }
                    span {
                        color: var(--primary);
                    }
                }
            }
        }
        .right-list {
            li {
                padding: 0 1vw;
                border-left: 1px solid #dee2e6;
                @media (max-width: 1600px) {
                    padding: 0 5px;
                    &:nth-child(3) {
                        padding: 0 10px !important;
                    }
                }
                &:first-child {
                    padding-left: 0;
                    border: none;
                }
                &:nth-child(3) {
                    padding: 0 2vw;
                }
                &:last-child {
                    padding-right: 0;
                }
                .progress {
                    width: 5vw;
                    height: 4px;
                    background-color: #F1EAFE;
                    position: relative;
                    border-radius: 4px;
                    div {
                        width: 84%;
                        height: 100%;
                        background-color: #01D9B1;
                        border-radius: 4px;
                    }
                }
            }
        }
    }
    .header-bottom {
        img {
            @media (max-width: 1600px) {
                max-width: 100px;
            }
            max-width: 150px;
        }
        >div:first-of-type {
            margin: 0 3.5vw;
            @media (max-width: 1600px) {
                margin: 0 25px;
            }
        }
        a {
            @media (max-width: 1600px) {
                font-size: 14px;
            }
            &:hover {
                color: var(--primary);
            }
        }
        .btn {
            background-color: #F1EAFE;
            color: var(--primary);
            padding: 14px 3.5vw;
            font-weight: bold;
            @media (max-width: 767px) {
                padding: 11px 3.5vw;
            }
            @media (max-width: 1600px) {
                padding: 8px 16px;
            }
            
            &:hover {
                background-color: var(--primary);
                color: #fff;
            }
        }
        .mobile {
            a {
                background-color: var(--primary);
                color: #fff;
                @media (max-width: 767px) {
                    background-color: #F1EAFE;
                    color: var(--primary);
                }
            }
        }
        .hamburger {
            width: 18px;
            height: 12px;
            position: relative;
            &-line {
                height: 2px;
                border-radius: 8px;
                background-color: #000;
                transition: all .3s ease-in-out;
                &:nth-child(1) {
                    position: absolute;
                    top: 0;
                }
                &:nth-child(3) {
                    position: absolute;
                    bottom: 0;
                }
            }
            &.active {
                .hamburger-line {
                    &:nth-child(1) {
                        top: 5px;
                        transition: all .3s ease-in-out;
                        transform: rotate(-45deg);
                        transform-origin: center;
                    }
                    &:nth-child(2) {
                        opacity: 0;
                        transition: all .3s ease-in-out;
                    }
                    &:nth-child(3) {
                        bottom: 5px;
                        transition: all .3s ease-in-out;
                        transform: rotate(45deg);
                        transform-origin: center;
                    }
                }
            }
            
        }
    }
    .header-mobile-menu {
        right: -100%;
        transition: all 0.3s ease-in-out;
        z-index: -1;
        bottom: 0;
        width: 100%;
        @media (min-width: 768px) and (max-width: 1200px) {
            border-left: 1px solid #dee2e6;
            width: 40%;
        }
        > a {
            &:first-of-type {
                @media (max-width: 767px) {
                    margin-top: 110px;
                }
            }
            &:last-of-type {
                display: none;
            }
        }
        .social-links {
            position: relative;
            gap: 5px;
            &::before {
                content: '';
                position: absolute;
                left: -50vw;
                top: -1.5rem;
                width: 300vw;
                height: 1px;
                background-color: #e6e6e6;
            }
        }
        @media (max-width: 480px) {
            overflow-y: scroll !important;
            padding: 20px 0;
        }
        &.active {
            right: 0;
            transition: all 0.3s ease-in-out;

        }
    }
`