import styled from 'styled-components/macro';

import forAppBg from '../../assets/images/for-app-bg.png';
import forConnectBg from '../../assets/images/for-connect-bg.png';
import forTraxBg from '../../assets/images/for-trax-bg.png';
import tokenMirror from '../../assets/images/token-mirror.svg';

export const StyledWhoBudboIsFor = styled.div`
    border-radius: 24px;
    transform: translate3d(0,10%,0);
    position: relative;
    width: 100%;
    padding-top: 80px;
    @media (min-width: 992px) {
        width: 110%;
        transform: translate3d(-5%,20%,0);
        padding: 60px 40px;
    }
    @media (min-width: 1600px) {
        padding: 80px 120px;
    }
    h2 {
        width: 100%;
        padding: 0 50px;
        text-align: center;
        margin-bottom: 32px;
    }
    .content {
        li {
            width: 100%;
            margin-bottom: 24px; 
            padding: 16px;
            @media (min-width: 992px) {
                width: calc(50% - 12px);    
                padding: 16px 8px;
            }
            &:last-child {
                @media (min-width: 992px) {
                    transform: translateX(calc(50% + 12px));
                    margin-bottom: 0 !important;
                }
            }
        }
    }
    &.budbo-app {
        background: url(${forAppBg}) center center/140% no-repeat;
        background-color: #e0ccff;
        h2 {
            span {
                color: var(--primary);
            }
        }
        .content {
            li {
                &:last-child {
                    @media (min-width: 992px) {
                        width: auto !important;
                        padding: 16px 24px;
                        transform: translateX(0%);
                        width: 100% !important;
                    }
                }
            }
        }
    }
    &::before {
        content: '';
        display: block;
        width: 109px;
        height: 120px;
        background: url(${tokenMirror}) center center/contain no-repeat;
        position: absolute;
        right: 50%;
        transform: translate3d(50%, -50%, 0);
        top: 0;
        z-index: 0;
    }
    &.budbo-trax {
        background: url(${forTraxBg}) center center/220% no-repeat;
        background-color: #CEF1FF;
        h2 {
            span {
                color: var(--aqua);
            }
        }
    }
    &.budbo-connect {
        background: url(${forConnectBg}) center center/180% no-repeat;
        background-color: #ffe6d0;
        @media (max-width: 767px) {
            transform: translate3d(0,-8%,0);
            margin-top: 180px;
        }
        h2 {
            span {
                color: var(--orange);
            }
        }
        .content {
            li:last-child {
                transform: translate(0);
            }
        }
    }
`