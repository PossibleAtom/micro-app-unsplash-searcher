import React from "react";
import './PhotoGrid.css';
import PhotoCard from "../PhotoCard/PhotoCard";

class PhotoGrid extends React.Component {
    render() {
        return (
            <div className="photoGridContainer">
                {this.props.data.map(({urls, alt_description, description}, index) => {
                    return <PhotoCard
                        key={index}
                        src={urls.full}
                        alt={alt_description}
                        description={description}
                    />;
                })}
            </div>
        )
    }
}

export default PhotoGrid;
