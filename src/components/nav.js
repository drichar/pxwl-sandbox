import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Menu = styled.div`
  display: flex;
  flex-flow: column;
  background: #fafafa;
`

const MenuItem = styled.div`
  padding: 1rem 1.5rem;
`

const Icon = styled.i`
  color: #007bff;
`

const Pixwel = styled.svg`
  width: 2.5rem;
  height: 2.5rem;
  margin: 1rem;
`

const MainNav = ({ active }) => (
  <Menu>
    <Pixwel viewBox="0 0 240 167" width="40px" height="40px">
      <defs>
        <linearGradient
          id="pixwelSm_0_"
          gradientUnits="userSpaceOnUse"
          x1="2456.626"
          y1="-287.691"
          x2="2456.626"
          y2="-443.05"
          gradientTransform="matrix(-1 0 0 1 2610.478 450)"
        >
          <stop offset="0" stop-color="#007bff" />
          <stop offset="1" stop-color="#007bff" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="pixwelSm_1_"
          gradientUnits="userSpaceOnUse"
          x1="86.148"
          y1="-339.191"
          x2="86.148"
          y2="-451.9"
          gradientTransform="translate(0 450)"
        >
          <stop offset="0" stop-color="#007bff" />
          <stop offset="1" stop-color="#007bff" stop-opacity="0" />
        </linearGradient>
      </defs>
      <path d="M79.9 167H67.7L182.2.8H240L79.9 167z" fill="url(#pixwelSm_0_)" />
      <path d="M159.4 167h12.9L57.8.8H0L159.4 167z" fill="url(#pixwelSm_1_)" />
    </Pixwel>
    <MenuItem>
      <Icon className="im im-video" />
    </MenuItem>
    <MenuItem>
      <Icon className="im im-share" />
    </MenuItem>
    <MenuItem>
      <Icon className="im im-edit" />
    </MenuItem>
    <MenuItem>
      <Icon className="im im-download" />
    </MenuItem>
    <MenuItem>
      <Icon className="im im-external-link" />
    </MenuItem>
    <MenuItem>
      <Icon className="im im-shopping-cart" />
    </MenuItem>
  </Menu>
)

MainNav.propTypes = {
  active: PropTypes.string,
}

MainNav.defaultProps = {
  active: ``,
}

export default MainNav
