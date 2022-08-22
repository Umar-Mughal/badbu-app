import styled from 'styled-components/macro';

export const StyledBudboWork = styled.div`
    h2 {
        margin-top: 148px;
    }
      .mob-img {
        position: relative;
        margin: 40px -15px;
      }
  p {
        color: var(--text-purple);
        font-weight: 500;
        @media (max-width: 767px) {
            font-size: 16px;
        }
    }
  @media (max-width: 767px) {
    .mob__img_container_budbo_work {
      margin: 0 -15px;
    }
    
  }

    .benefits {
        li {
            padding: 32px 24px;
            border-radius: 16px;
            margin-bottom: 32px;
            @media (min-width: 992px) {
                width: calc(50% - 16px);
                padding: 66px 48px;
            }
            img {
                width: 30px;
                height: 30px;
            }
        }
    }
    .company-logos {
        gap: 50px;
        margin-top: 60px;
        padding-bottom: 60px;
        @media (min-width: 768px) {
            margin: 133px 0 110px;
            padding-bottom: 0;
        }
        img {
            width: 180px;
            &:nth-child(1) {
                width: 121px;
            }
            &:nth-child(2) {
                width: 142px;
            }
            &:nth-child(3) {
                width: 173px;
            }
            
            &:nth-child(5) {
                width: 176px;
            }
        }
    }
    
`