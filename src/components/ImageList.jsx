import React from "react";

export default function ImageList({ images }) {
  console.log(images);
  return (
    <div className="img-container">
      <div className="img-list">
        {images.map((image) => (
          <div className="img-body">
            <img
              src={image.urls.regular}
              alt={image.alt_description}
              key={image.id}
            />
            <div className="over">{image.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
