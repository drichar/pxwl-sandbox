import React from 'react'
import styled from 'styled-components'
import MainNav from './nav'
import './layout.css'

const Root = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  height: 100vh;
`

const Main = styled.div`
  padding: 1.5rem;
`

export default ({ children }) => (
  <Root>
    <MainNav />
    <Main>{children}</Main>
  </Root>
)
