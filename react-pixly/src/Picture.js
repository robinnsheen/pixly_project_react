import React from "react";
import { Link } from "react-router-dom";


/** Show limited information about a Picture
 *
 * Is rendered by PictureList to show a "card" for each Picture.
 *
 * PictureList -> Picture
 */
function Picture({ id, name, url }) {
  console.debug("Picture", id, name, url);

  return (
    <div className="Picture card">
      <div className="card-body">
        <h6 className="card-title">
          {name}
          {url && <img src={url}
            alt={name}
            className="float-end ms-5" />}
        </h6>
        <p><small>{id}: {name}</small></p>
      </div>
    </div>
  );
};

export default Picture;
