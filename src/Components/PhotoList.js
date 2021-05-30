import React, {Component} from 'react';
import Photo from './Photo'
import NoPhotos from './NoPhotos'



class PhotoList extends Component {
    // Render results if photos exist. Otherwise render a notification for no results. 
    render() {
        const results = this.props.photos;
        const tag = this.props.tag;
        let photos;

        if (results.length) {
            photos = results.map(photo => {
                let url = `http://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
                return (<Photo url={ url } key={ photo.id } />);
        });
        } else {
            photos = <NoPhotos />
        }

        return (
            <div className='photo-container'>
                {(tag.length)? <h2>Search Results: {this.props.tag}</h2> : ''}
                <ul> { photos } </ul>
            </div>
        )
    }
}

export default PhotoList; 



