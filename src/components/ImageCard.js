import React from 'react';

class ImageCards extends React.Component{
    render(){
        return(
            <div>
                <img 
                src={this.props.image.urls.regular}
                alt={this.props.image.description}
                />
            </div>
        );
    }
}

export default ImageCards;