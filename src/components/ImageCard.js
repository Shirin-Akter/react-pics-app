import React from 'react';

class ImageCard extends React.Component{

    render(){
        const {description, urls} = this.props.image;
        return(
            <div>
                <img 
                ref={this.imageRef}
                alt={}
                
                />

            </div>

        );
    }
}
export default ImageCard;