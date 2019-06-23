import React from 'react'
import PropTypes from 'prop-types'
import { getIconByName } from 'resources/images/icons/index'
import Styled from './styles'

const MyHistory = ({ games }) => {
  if (games.length === 0) {
    return (
      <Styled>
        <div className="col1">
          <img src={getIconByName('support')} alt="No Lists" />
        </div>
        <div className="col2">
          <h1>Huston we have a problem!</h1>
          <p>No games found!!</p>
        </div>
      </Styled>
    )
  }
  return (
    <Styled>
      <h1>Lists</h1>
    </Styled>
  )
}

MyHistory.propTypes = {
  games: PropTypes.arrayOf(PropTypes.shape({})),
}

MyHistory.defaultProps = {
  games: [],
}

export { MyHistory }
