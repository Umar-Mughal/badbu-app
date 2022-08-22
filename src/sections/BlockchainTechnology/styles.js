import styled from 'styled-components/macro';

export const StyledBlockChainTechnology = styled.div`
    margin: 82px 0 300px;
    .container {
        > div {
            @media (max-width: 1440px) {
                margin: 0 auto;
            }
        }
    }
  
    .blockchain-list {
        li {
            margin-bottom: 57px;
            .logo {
                max-height: 40px ;
            }
            h6 {
                /* font-size: 24px; */
                line-height: 32px;
                font-weight: 700;
            }
            img {
                &:not(.logo) {
                    margin: 24px 0;
                    @media (max-width: 768px) {
                      margin: 0;
                      width: 100% !important;
                    }
                }
            }
          div {
            border-radius: 48px;
            @media (max-width: 768px) {
              border-radius: 24px;
            }
          }
        }
    }
`