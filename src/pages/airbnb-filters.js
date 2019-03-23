import React, { Component } from "react"
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Form } from 'react-bootstrap'
import ProjectsFilter from '../components/airbnb-filters/projects-filter'

const CATEGORY_ACTIVE = {
  label: 'Active',
  value: { archived: false }
}

const CATEGORY_ARCHIVED = {
  label: 'Archived',
  value: { archived: true }
}

let categoryFilters = {
  options: [
    CATEGORY_ACTIVE,
    CATEGORY_ARCHIVED
  ],
  selected: CATEGORY_ACTIVE.value
}

const STUDIO_1 = {
  label: "Studio 1",
  value: "fake-studio-1",
}

const STUDIO_2 = {
  label: "Studio 2",
  value: "fake-studio-2",
}

const STUDIO_3 = {
  label: "Studio 3",
  value: "fake-studio-3",
}

let studioFilters = {
  options: [
    STUDIO_1,
    STUDIO_2,
    STUDIO_3
  ],
  selected: []
}

const initFilters = {
  category: categoryFilters,
  studios: studioFilters,
  searchText: null
}

class AirbnbFiltersPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filters: initFilters
    }

    this.updateSelected = this.updateSelected.bind(this)
  }

  updateSelected(name, selected) {
    const { filters } = this.state
    filters[name].selected = selected

    this.setState({ filters })
  }

  render() {
    return (
      <Layout>
        <SEO title="Airbnb style filters" />

        <Form>
          <Form.Group controlId="formSearch">
            <Form.Control type="text" placeholder="Search&hellip;" />
          </Form.Group>
          <Form.Group>
            <ProjectsFilter filters={this.state.filters} updateCallback={this.updateSelected} />
          </Form.Group>
        </Form>

        <pre>{JSON.stringify(this.state.filters, null, 2)}</pre>
      </Layout>
    )
  }
}

export default AirbnbFiltersPage
