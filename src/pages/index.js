import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Jumbotron, Button, ListGroup } from 'react-bootstrap'
import styled from 'styled-components'

const Icon = styled.i`
  vertical-align: middle;
  margin-right: 8px;
`

const ListContainer = styled.div`
  max-width: 30rem;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Jumbotron>
      <h1>Pixwel Sandbox</h1>
      <p>
        This is a way to quickly prototype new pages and components for 
        Pixwel Platform 3.x
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

    <ListContainer>
      <ListGroup>
        <ListGroup.Item>
          <Link to="/airbnb-filters/">Airbnb style filters</Link>
        </ListGroup.Item>
      </ListGroup>
    </ListContainer>
  </Layout>
)

export default IndexPage
