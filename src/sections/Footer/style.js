import styled from 'styled-components/macro';

export const StyledFooter = styled.footer`
    background-color: #fff;
    padding: 64px 0;
  border-radius: 48px 0 0 0;
    margin-left: 30px;
    .container {
  
    }
  .footer_box_1{
    width: 50%;
    @media (max-width: 767px){
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .footer_box_2{
    width: 50%;
    text-align: left;
    padding-left: 20px;
    @media (max-width: 767px){
      width: 100%;
      text-align: center;
      padding: 0 10px;
    }
    .border_footer {
      border: 1px solid #E0DBED;
      margin-top: 40px;
    }
    div {
      @media (max-width: 767px){
        margin-top: 50px;
      }
      a {
        @media (max-width: 767px){
          width: 90%;
        }
      }
    }
  }
  .footer__text {
    font-size: 18px;
    @media(max-width: 767px){
      font-size: 20px;
      margin-top: 16px;
    }
  }
    @media (max-width: 767px) {
        margin-top: 112px;
        padding: 57px 0 40px;
      padding-bottom: 15px;
       margin-left: 0;
    }
    .exchange {
        p {
            font-size: 14px;
        }
        .info {
            font-size: 12px;
            position: relative;
            &:before {
                content: '';
                display: block;
                width: 10px;
                height: 1px;
                background-color: #dee2e6;
                position: absolute;
                top: 50%;
                left: -16px;
            }
        }
    }
    .top-footer {
        padding-bottom: 64px;
        .download-links {
            @media (max-width: 767px) {
                img {
                    height: 40px;
                }
            }
        }
    }
    .footer-content {
        padding: 64px 0 40px;
        @media (max-width: 767px) {
            padding-bottom: 0;
            border-bottom: none !important;
            > ul {
                > li {
                    &:last-child {
                        padding-top: 48px;
                        border-top: 1px solid #dee2e6;
                    }
                }
            }
        }
        @media (min-width: 768px) and (max-width: 1200px) {
            >ul {
                >li {
                    &:last-child {
                        width: 70%;
                        margin: 25px auto 0;
                        text-align: center;
                    }
                    .social-media {
                        justify-content: center;
                    }
                }
            }
        }
    }
    .email-action {
        input {
            padding: 10px 24px;
            &::placeholder {
                color var(--text-purple);
                font-weight: bold;
            }
            &:focus-visible {
                outline: none;
            }
            @media (max-width: 320px) {
                width: 120px;
            }
        }
        button {
            padding: 10px 24px;
        }
    }
    .social-media {
        display: flex;
        gap: 8px;
        svg {
            &:hover {
                path {
                    fill: var(--primary);
                }
            }
        }
    }
    .bottom-footer {
        padding-top: 40px;
        h6 {
            @media (min-width: 992px) {
                text-shadow: rgba(0, 0, 0, 0.25) 0 4px 4px;   
            }
        }
    }
    .location  {
        font-size: 12px;
        color: var(--text-purple);
        padding: 5px 8px;
    }
`