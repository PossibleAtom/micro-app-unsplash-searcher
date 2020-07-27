import React from "react";
import './PhotoCard.css';

class PhotoCard extends React.Component {
    render() {
        return (
            <div className="photoCardContainer">
                <img
                    src={this.props.src}
                    alt={this.props.alt || 'no desc'}
                />
                <div className="hoverMeta">
                    <p>{this.props.description || this.props.alt}</p>
                </div>
            </div>
        )
    }
}

export default PhotoCard;
