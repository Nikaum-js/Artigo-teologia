import styled from 'styled-components'

const Container = styled.main`
  display: flex;
  justify-content: center;
`

const Content = styled.main`
  width: 40%;

  margin-top: 10%;

  .presentation {
    display: flex;
    align-items: center;
    height: 80px;

    margin: 24px 0;

    .avatar {
      margin-right: 12px;

      img {
        border-radius: 50%;
        width: 38px;
        height: 38px;
      }
    }

    .info {
      p {
        color: #2b2b2b;
        font-size: 12.456px;
        line-height: 22.683px;
        opacity: 0.7;
      }
    }
  }

  h1 {
    color: #2b2b2b;
    font-size: 35.031px;
    font-weight: 500;
    line-height: 50.6px;
  }

  strong {
    display: inline-block;

    margin-top: 24px;

    color: #2b2b2b;
    font-size: 16px;
    font-weight: 500;
    line-height: 36px;
    letter-spacing: 1px;
  }

  p {
    color: #2b2b2b;

    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;

    margin: 24px 0;
  }

  h2 {
    color: #2b2b2b;

    font-size: 24px;
    font-weight: 500;
    line-height: 36px; /* 150% */
    letter-spacing: 1px;

    margin: 24px 0;
  }

  .alight-center {
    text-align: center;
  }

  img {
    width: 100%;
  }

  @media (max-width: 960px) {
    width: 80%;
  }
`

export default {
  Container,
  Content,
}
