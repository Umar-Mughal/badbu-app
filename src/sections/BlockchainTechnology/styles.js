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
  
    .token_1_blockchain {
          height: 120px;
          width: 110px;
          position: absolute;
          right: -53px;
          top: 400px;
    }
    .token_2_blockchain {
      height: 115px;
      width: 101px;
      position: absolute;
      left: -150px;
      top: -180px;
    }

  .token_3_blockchain {
    width: 59px;
    height: 65px;
    position: absolute;
    right: -105px;
    top: 300px;
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