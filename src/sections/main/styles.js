import styled from 'styled-components/macro';

export const StyledMain = styled.section`
      min-height: 100vh;
      padding-top: 200px;
      padding-bottom: 230px;
 
    @media (max-width: 767px) {
        padding-top: 100px;
    }
    //@media (max-width: 1200px) {
    //    min-height: 70vh;
    //}
    > div {
        z-index: 1;
        h1 {
            color: var(--primary);
            
            .slogan {
                color: #000;    
            }
        }
        p {
            color: var(--text-purple);
            font-weight: 500;
            line-height: 28px;
            max-width: 600px;
        }
        button {
            padding: 25px 79px;
            font-size: 20px;
        }
    }
    #background {
        position: absolute;
        right: 0;
        top: 130px;
        width: 1920px;
        height: 880px;
        z-index: -1;
        @media (min-height: 1080px) {
            top: 140px;
            width: 2130px;
            height: 970px;
        }
        @media (max-width: 1440px) {
            top: 100px;
        }
        @media (max-width: 1024px) {
            top: 50px;
        }
        @media (max-width: 767px) {
            bottom: auto;
            top: -10px;
            width: 1200px;
        }
        @media (max-width: 480px) {
            top: 450px;
        }
    }
`