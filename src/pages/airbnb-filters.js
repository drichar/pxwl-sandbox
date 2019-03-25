import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Form, Card } from "react-bootstrap"
import styled from "styled-components"
import ProjectsFilter from "../components/airbnb-filters/projects-filter"
import _ from 'lodash'

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 1rem;
  margin: 2rem 0;
`

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

const projects = [
  {
    id: "project01",
    name: "Project 1",
    studio: {
      label: "Studio 3",
      value: "fake-studio-3",
    },
    category: {
      archived: false,
    },
  },
  {
    id: "project02",
    name: "Project 2",
    studio: {
      label: "Studio 3",
      value: "fake-studio-3",
    },
    category: {
      archived: true,
    },
  },
  {
    id: "project03",
    name: "Project 3",
    studio: {
      label: "Studio 2",
      value: "fake-studio-2",
    },
    category: {
      archived: false,
    },
  },
  {
    id: "project04",
    name: "Project 4",
    studio: {
      label: "Studio 1",
      value: "fake-studio-1",
    },
    category: {
      archived: false,
    },
  },
  {
    id: "project05",
    name: "Project 5",
    studio: {
      label: "Studio 1",
      value: "fake-studio-1",
    },
    category: {
      archived: false,
    },
  },
  {
    id: "project06",
    name: "Project 6",
    studio: {
      label: "Studio 1",
      value: "fake-studio-1",
    },
    category: {
      archived: true,
    },
  }
]

class AirbnbFiltersPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filters: initFilters,
      projects,
    }

    this.updateSelected = this.updateSelected.bind(this)
  }

  componentDidMount() {
    this.filterProjects(this.state.filters)
  }

  filterProjects(filters) {
    let filteredProjects = projects

    filteredProjects = filteredProjects.filter(project => {
      if( !_.isEqual(project.category, filters.category.selected) ) {
        return false
      }

      if( filters.studios.selected.length > 0 && filters.studios.selected.indexOf(project.studio.value) === -1 ) {
        return false
      }

      if( filters.searchText && project.name.toLowerCase().search(filters.searchText.toLowerCase()) === -1 ) {
        return false
      }

      return true
    })

    this.setState({ projects: filteredProjects })
  }

  updateSelected(name, selected) {
    const { filters } = this.state
    filters[name].selected = selected

    this.setState({ filters })
    this.filterProjects(filters)
  }

  updateSearchText = (event) => {
    const { value } = event.target
    const { filters } = this.state

    filters.searchText = value

    this.setState({ filters })
    this.filterProjects(filters)
  }

  render() {
    const { projects } = this.state

    return (
      <Layout>
        <SEO title="Airbnb style filters" />

        <Form>
          <Form.Group controlId="formSearch">
            <Form.Control
              type="text"
              name="searchText"
              placeholder="Search&hellip;"
              onChange={this.updateSearchText}
              style={{maxWidth: '30rem'}}
            />
          </Form.Group>
          <Form.Group>
            <ProjectsFilter
              filters={this.state.filters}
              updateCallback={this.updateSelected}
            />
          </Form.Group>
        </Form>

        <ProjectsGrid>
          {projects.map((project, key) => (
            <Card key={key}>
              <Card.Img
                variant="top"
                src={`http://placehold.it/200x300&text=${project.name}`}
              />
              <Card.Body>
                <Card.Title>{project.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {project.studio.label}
                </Card.Subtitle>
                <Card.Text />
              </Card.Body>
            </Card>
          ))}
        </ProjectsGrid>
      </Layout>
    )
  }
}

export default AirbnbFiltersPage
