import styled from 'styled-components/macro';

export const StyledBillionDollar = styled.div`
    .width-wrapper {
        p {
            &.text {
                font-weight: 500;
                margin: 32px 0 106px;
                span {
                    color: #000;
                }
            }
        }
        >div {
            > h2 {
                margin-top: 150px;
            }
        }
        >div {
            > img {
                margin-top: 48px;
               transform: scale(1.05);

              @media(max-width: 767px){
                  margin-left: 3px;
                }
            }
        }
    }
`