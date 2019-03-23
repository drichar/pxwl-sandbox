import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Jumbotron, Button } from 'react-bootstrap'
import styled from "styled-components"

const Icon = styled.i`
  vertical-align: middle;
  margin-right: 8px;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Jumbotron>
      <h1>Pixwel Sandbox</h1>
      <p>
        This is a way to quickly prototype new pages for Pixwel Platform 3.x
      </p>
      <p>
        <Button
          variant="primary"
          size="lg"
          href="https://github.com/drichar/pxwl-sandbox"
        >
          <Icon className="im im-github" />
          View on Github
        </Button>
      </p>
    </Jumbotron>
  </Layout>
)

export default IndexPage
