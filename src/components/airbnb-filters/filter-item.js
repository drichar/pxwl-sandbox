import React, { Component } from "react"
import PropTypes from "prop-types"
import { Button, Card, Form } from "react-bootstrap"
import styled from "styled-components"
import _ from "lodash"

const FilterContainer = styled.div`
  position: relative;
`

const FilterMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 0.5rem;
  z-index: 10;
`

class FilterItem extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    filter: PropTypes.object.isRequired,
    updateCallback: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)

    this.state = {
      selected: this.props.filter.selected,
      showMenu: false,
    }

    this.showMenu = this.showMenu.bind(this)
    this.closeMenu = this.closeMenu.bind(this)
  }

  componentWillMount() {
    this.id = _.uniqueId('filter_')
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu(event) {
    if( !this.dropdownMenu.contains(event.target) ) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });
    }
  }

  handleCheckboxChange = (event) => {
    const { target } = event
    const { name, filter } = this.props
    const { selected } = this.state

    const idx = filter.selected.indexOf(target.name)

    if( idx === -1 ) {
      selected.push(target.name)
    }
    else {
      selected.splice(idx, 1);
    }

    this.setState({ selected })

    this.props.updateCallback(name, selected)
  }

  handleRadioChange = (event) => {
    const { name, filter } = this.props
    const selected = _.find(filter.options, {
      label: event.target.value,
    })

    this.setState({
      selected: selected.value,
    })

    this.props.updateCallback(name, selected.value)
  }

  renderCheckboxes() {
    const { name, filter } = this.props
    const { selected } = this.state

    return (
      <Card.Body>
        <Card.Title>{`Select ${name}`}</Card.Title>
        {filter.options.map((option, key) => (
          <Form.Check
            custom
            type="checkbox"
            name={option.value}
            label={option.label}
            id={`option-${key}`}
            checked={selected.includes(option.value)}
            onChange={this.handleCheckboxChange}
            key={key}
          />
        ))}
      </Card.Body>
    )
  }

  renderRadios() {
    const { name, filter } = this.props

    return (
      <Card.Body>
        <Card.Title>{`Select ${name}`}</Card.Title>
        {filter.options.map((option, key) => (
          <Form.Check
            custom
            type="radio"
            name={`filter-${this.id}`}
            label={option.label}
            id={`${this.id}-${key}`}
            value={option.label}
            checked={_.isEqual(this.state.selected, option.value)}
            onChange={this.handleRadioChange}
            key={key}
          />
        ))}
      </Card.Body>
    )
  }

  render() {
    const { name, type } = this.props

    return (
      <FilterContainer>
        <Button variant="primary" onClick={this.showMenu} style={{textTransform: 'capitalize'}}>
          {name}
        </Button>
        {this.state.showMenu && (
          <FilterMenu
            ref={element => {
              this.dropdownMenu = element
            }}
          >
            <Card style={{ width: "18rem" }}>
              {type === "checkbox" && this.renderCheckboxes()}
              {type === "radio" && this.renderRadios()}
            </Card>
          </FilterMenu>
        )}
      </FilterContainer>
    )
  }
}

export default FilterItem
