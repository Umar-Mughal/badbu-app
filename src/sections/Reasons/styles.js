import styled from 'styled-components';

import reason1Square from '../../assets/images/reason1-img-square.png';
import logo1 from '../../assets/images/reason1-logo.png';
import logo2 from '../../assets/images/reason1-logo2.png';
import logo3 from '../../assets/images/reason1-logo3.png';
import reason5mob from '../../assets/images/reason5-bg-mob.png';
import token from '../../assets/images/token.svg';

export const StyledReasons = styled.div`
    .reasons-title {
        margin-bottom: 30px;
        padding-top: 80px;
        max-width: 860px;
        span:first-of-type {
            text-decoration: underline;
        }
        @media (max-width: 768px) {
            padding-top: 0;
            margin-bottom: 20px;
        }
    }
    .width-wrapper {
        @media (min-width: 1440px) {
            margin: 0 auto;
        }
    }
    .reasons {
        padding: 50px 0;
        max-width: 850px;
        @media (max-width: 767px) {
            padding: 48px 0;
        }
        h6:first-of-type {
            color: var(--text-purple);
        }
    }
    .reason1 {
        
    }
    .reason2 {
        padding-bottom: 88px;
        @media (min-width: 768px) {
            padding-bottom: 170px;
        }
    }
    .ecosystem {
        margin-top: 60px;
        @media (max-width: 768px) {
            margin-top: 32px;
        }
        li {
            margin-bottom: 48px;
            padding-bottom: 48px;
            
            @media (max-width: 768px) {
                margin-bottom: 32px;
                padding-bottom: 32px;
            }
            span {
                font-size: 20px;
                font-weight: bold;
                padding: 0 32px;
            }
            >div {
                >div {
                    overflow: hidden;
                    height: 120px;
                    width: 250px;
                    position: relative;
                    @media (max-width: 992px) {
                        width: 100%;
                    }
                    @media (max-width: 767px) {
                        margin-bottom: 550px;
                    }
                    &::after {
                        content: '';
                        position: absolute;
                        bottom: 0;
                        right: 0;
                        width: 30%;
                        height: 100%;
                    }
                }
                &:nth-child(2) {   
                    @media (max-width: 767px) {
                        height: 245px;
                    }
                }
            }
            
            p {
                @media (min-width: 992px) {
                    width: calc(100% - 270px);
                }
            }
            &:last-child {
                margin: 0;
                padding: 0;
                border: none !important;
            }
             &:nth-of-type(1) {
                    div {
                        &::after {
                            background: url(${logo1}) bottom right/contain no-repeat;
                        }
                        &:nth-child(2) {
                            &::before {
                                content: '';
                                position: absolute;
                                bottom: 0;
                                right: -95px;
                                width: 344px;
                                height: 465px;
                                background: url(${reason1Square}) bottom right/contain no-repeat;
                                @media (max-width: 992px) {
                                    width: 260px;
                                    right: -75px;
                                }
                                @media (max-width: 767px) {
                                  right: 0;
                                  width: 150px;
                                  height: 183px;
                                }

                            }
                        }   
                    }

                }
                &:nth-of-type(2) {
                    div {
                        &::after {
                            background: url(${logo2}) bottom right/contain no-repeat;
                        }
                        &:nth-child(2) {
                            background-position: right !important;
                            right: auto;
                        }
                    }
                }
                &:nth-of-type(3) {
                    div {
                        &::after {
                            background: url(${logo3}) bottom right/contain no-repeat;
                        }
                    }
                }
        }
    }
    .reason3 {
        .table {
            margin: 20px 0 0 0;
            @media (min-width: 1900px) {
                width: 120%;
            }
        }
    }
    .reason4 {
        .mentor {
            margin: 80px 0 80px;
            @media (min-width: 992px) {
                margin: 100px 0 120px;
            }
            img {
                width: 160px;
            }
            li {
                position: relative;
                p {
                    color: var(--text-purple);
                    font-size: 14px;
                    @media (min-width: 992px) {
                        text-shadow: rgba(0, 0, 0, 0.25) 0 4px 4px;
                    }
                }
                &:last-child {
                    margin-bottom: 0 !important;
                }
                &::before {
                    content: '';
                    background-color: var(--text-purple);
                    position: absolute;
                    top: 9px;
                    left: -14px;
                    width: 5px;
                    height: 5px;
                    border-radius: 50%;
                    @media (min-width: 992px) {
                        box-shadow: rgba(0, 0, 0, 0.25) 0 4px 4px;
                    }
                }
            }
        }
        @media (max-width: 767px) {
            .mob-font-size {
                font-size: 20px;
            }
        }
    }

    .reason5 {
        .img-wrapper {
            z-index: 1;
            @media (max-width: 767px) {
                height: 619px;
                margin-top: 48px;
                &::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -16px;
                    width: 100vw;
                    height: 100%;
                    background: url(${reason5mob}) left center /contain no-repeat;
                }
            }
            img {
                margin-top: 78px;
            }
            @media (min-width: 992px) {
                &::before {
                    content: '';
                    display: block;
                    width: 109px;
                    height: 120px;
                    background: url(${token}) center center/cover no-repeat;
                    position: absolute;
                    left: -50px;
                    bottom: 20%;
                    z-index: -1;
                }
            }
        }
        .with-indent {
            &::before {
                box-shadow: none;
            }
        }
    }
    
    .reason6 {
        h4 {
            line-height: 32px;
        }
        .mentor {
            margin: 50px 0 0;
            @media (min-width: 992px) {
                margin: 80px 0 100px;    
            }
            ul {
                @media (min-width: 992px) {
                    margin-left: 100px;
                }
                p {
                    max-width: 480px;
                    &::before {
                        content: '';
                        background-color: var(--text-purple);
                        position: absolute;
                        top: 9px;
                        left: -14px;
                        width: 5px;
                        height: 5px;
                        border-radius: 50%;
                    }
                }
            }
             
            div {
                position: relative;
                p {
                    font-weight: 500;
                    font-size: 14px;
                    bottom: -50px;
                    line-height: 16px;
                    left: 0;
                    @media (min-width: 992px) {
                        bottom: -55px;
                    }
                }
            }
        }
    }

    .reason7 {
        padding-top: 90px;
        @media (max-width: 767px) {
            padding-top: 48px;
        }
        .map-wrapper {
            p {
                max-width: 582px;
                bottom: 0;
                left: 40px;
                position: absolute;
                z-index: 99;
                
                @media (max-width: 767px) {
                    margin-top: 26px;
                    position: relative;
                    left: 0;
                }
                @media (max-width: 1600px) {
                    font-size: 16px;
                    line-height: 24px;
                    left: 10px;
                }
            }
            @media (max-width: 767px) {
              .reason7-map-mobile {
                width: 100%;
                height: 253px;
              }
            }
        }
        .reason7-map {
            width: 100%;
            @media (min-width: 1600px) {
                width: 110%;
            }
        }
    }
`