import React from 'react'
import SongSelector from '../components/SongSelector'
// import SongDetail from '../components/SongDetail'

class SongContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      songs: [],
    }
  }

  componentDidMount() {
    fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
    .then(res => res.json())
    .then(songs => this.setState({ songs: songs}))
    .catch(err => console.error(err))
  }

  render() {
    return (
      <div>
        <h2>Song Container</h2>
        <SongSelector songs={this.state.songs}/>

      </div>
    )
  }
}

export default SongContainer
