import React from 'react';

class ImageCards extends React.Component{
    render(){
        const {urls, description} = this.props.image;
        return(
            <div>
                <img 
                src={urls.regular}
                alt={description}
                />
            </div>
        );
    }
}

export default ImageCards;