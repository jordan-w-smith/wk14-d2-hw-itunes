import React from 'react'
import SongList from '../components/SongList'

class SongContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
    }

    componentDidMount() {
        const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json'
        fetch(url)
        .then(res => res.json())
        .then(data => this.setState( { data: data } ))
        .catch(err => console.error);
    }

    render() {
        // function oneSong() {
        //   this.state.data.feed.entry.map(song => {
        //     return {song}
        //   })
        // }
        return (
            <div>
                <SongList songs={this.state.data.feed}></SongList>
            </div>
        )
    }
}

export default SongContainer;
