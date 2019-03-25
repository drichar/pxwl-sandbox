import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FilterItem from './filter-item'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-flow: row;
  & > div {
    margin-right: 0.5rem;
  }
`

class ProjectFilter extends Component {
  static propTypes = {
    filters: PropTypes.object.isRequired,
    updateCallback: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)

    this.updateSelected = this.updateSelected.bind(this)
  }

  updateSelected(name, selected) {
    this.props.updateCallback(name, selected)
  }

  render() {
    const { category, studios } = this.props.filters

    return (
      <Container>
        <FilterItem
          name="category"
          type="radio"
          filter={category}
          updateCallback={this.updateSelected}
        />
        <FilterItem
          name="studios"
          type="checkbox"
          filter={studios}
          updateCallback={this.updateSelected}
        />
      </Container>
    )
  }
}

export default ProjectFilter
