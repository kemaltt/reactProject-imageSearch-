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
            <div className="over">
              {image.description}
              <div className="over-info">
                <p>Photographer: {image.user.name}</p>
                <a
                  href={`https://www.instagram.com/${image.user.instagram_username}`}
                  target="_blank"
                >
                  <i class="fab fa-instagram">
                    {image.user.instagram_username}
                  </i>{" "}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
