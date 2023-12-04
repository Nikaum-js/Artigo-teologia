import styled from 'styled-components'

const Container = styled.main`
  display: flex;
  justify-content: center;
`

const Content = styled.main`
  width: 40%;

  margin-top: 10%;

  h1 {
    color: #2b2b2b;
    font-size: 35.031px;
    font-weight: 500;
    line-height: 50.6px;
  }

  li {
    color: #2b2b2b;

    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;

    margin: 18px 0;
  }
`

export default {
  Container,
  Content,
}
