import React, {Component} from 'react';
import SongDetail from './SongDetail';

class SongList extends Component {






    render() {

    //   const options = (props) => {
    //     this.props.data.feed(0).map((song) => {
    //     return {song}
    //   })
    // }
        //         <SongDetail name={song}></SongDetail>

        // const oneSong = this.props.songs.feed.entry.map((song, index) => {
        //   return song
        // })


        return (

            <div>

                <ul>
                  {this.props.songs}
                </ul>
            </div>
        )
    }
}

export default SongList;
