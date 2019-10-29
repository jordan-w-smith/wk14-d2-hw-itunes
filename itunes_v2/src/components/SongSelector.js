import React, { Component, Fragment } from 'react';

class SongSelector extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    const options = this.props.songs.map((song, index) => {
      return <option value={index} key={index}>{song.name}</option>
    })

    return (
      <Fragment>
        <select id="song-selector">
          {options}
        </select>
      </Fragment>
    )
  }


}

export default SongSelector
