import React, { useState } from "react";
import "./Header.css";
import image1 from "../../accets/1aaeb0a6531bef88.webp";
import image2 from "../../accets/57bdf8f50cff60b1.webp";
import image3 from "../../accets/6b58218b9f0d577c.webp";
import image4 from "../../accets/78e89d02375d5222.webp";
import image5 from "../../accets/f21c8c88a0bb63e0.webp";

function Header() {
  const img = [image1, image2, image3, image4, image5];

  const [imageIndex, setImageIndex] = useState(0);

  function showPrevPage() {
    setImageIndex((index) => {
      if (index === img.length - 1) return 0;
      return index + 1;
    });
  }

  function showNextPage() {
    setImageIndex((index) => {
      if (index === 0) return img.length - 1;
      return index - 1;
    });
  }

  return (
    <div className="Header-main-section">
      <div className="header-wrapper">
        <div className="image-wrapper">
          {img.map((url, key) => {
            return (
              <img
                key={key}
                src={url}
                alt=""
                srcset=""
                style={{ translate: `${-100 * imageIndex}%` }}
              />
            );
          })}
        </div>
        <div className="header-buttons">
          <div className="header-button-wrapper">
            <button onClick={showPrevPage}>Prev</button>
            <button onClick={showNextPage}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
