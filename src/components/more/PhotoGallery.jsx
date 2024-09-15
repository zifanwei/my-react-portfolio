import React from 'react';
import '../../style/PhotoGallery.css';
import useFetchData from "../hooks/useFetchData";

const PhotoGallery = () => {
  const { data } = useFetchData('/data/hobbies.json');

  return (
    <div className="photo-gallery">
      {data && data.map((photo, index) => (
        <div key={index} className="photo-item">
          <img
            src={process.env.PUBLIC_URL +`/hobbies/${photo['img-url']}`} 
            alt={photo.Title}
            className="photo-img"
            loading="lazy"
          />
          <div className="photo-overlay">
            <div className="photo-caption">
              <h4>{photo.Title}</h4>
              <p>{photo.Description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PhotoGallery;
