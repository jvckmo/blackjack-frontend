import React from 'react'
import Skeleton from '@yisheng90/react-loading';
import {connect} from 'react-redux'
import fetchPlayer from '../actions/fetchPlayer'

class LoadGame extends React.Component {

  componentDidMount() {
    this.props.fetchPlayer(sessionStorage.userId)
  }

  componentDidUpdate() {
    this.props.history.push('/play')
  }

  render() {
    return (
      <div>
        <Skeleton rows={50}/>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPlayer: (playerId) => dispatch(fetchPlayer(playerId))
  }
}

const mapStateToProps = state => {
  return {
    player: state.player
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoadGame)