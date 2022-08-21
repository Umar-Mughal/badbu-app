import styled from 'styled-components/macro';

import whatChangedImgMob from '../../assets/images/what-changed-image.png'

export const StyledWhatChanged = styled.div`
    .width-wrapper {
        >div {
            > h2 {
                margin-top: 70px;
                @media (min-width: 768px) {
                    margin-top: 169px;
                }
            }
        }
    }   
    .mob-img {
        height: 320px;
        position: relative;
        &::after {
            content: '';
            position: absolute;
            top: 0;
            width: 90vw;
            height: 100%;
            background: url(${whatChangedImgMob}) center center /contain no-repeat;
        }
    } 
    >div {
        h3 {
            margin-bottom: 48px;
        }
    }
    
    .what-changed-img {
        margin: 90px 0 70px;
    }
    p {
        font-size: 20px;
        line-height: 28px;
        font-weight: 500;
        color: var(--text-purple);
        span {
            color: #000;
            font-weight: 700;
        }
        @media (max-width: 767px) {
            font-size: 16px;
        }
    }
    .offers {
        margin: 56px 0;
        @media (min-width: 992px) {
            margin: 96px 0;
        }
        
        li {
            margin-bottom: 48px;  
        }
    }
    .text {
        margin-bottom: 104px;
    }
   
`