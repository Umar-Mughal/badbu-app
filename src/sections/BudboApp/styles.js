import styled from 'styled-components/macro';

import budboBgMob from '../../assets/images/budbo-bg-mob.png';
export const StyledBudboApp = styled.div`
    .budbo-img {
        transform: translateY(-25%);
        width: 100%;
    }
    .budbo-title {
      padding-top: 30px;
        @media (max-width: 767px) {
          margin-top: -50px;
          padding-top: 0;
        }
        color: var(--primary);
    }
    .budbo-badge {
        display: block;
        font-size: 16px;
        color: var(--primary);
        margin-top: 65px; 
    }
    .what-inside-title {
        margin-top: 145px;
    }
    .mob-img {
        height: 396px;
        position: relative;
        margin: 120px 0;
        &::after {
            content: '';
            position: absolute;
            top: -50px;
            left: -16px;
            width: 100vw;
            height: 110%;
            background: url(${budboBgMob}) center center /cover no-repeat;
        }
    } 
`