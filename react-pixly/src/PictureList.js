import React from "react";
import Picture from "./Picture";

/** Show list of job cards.
 *
 * Used by both JobList and CompanyDetail to list jobs. Receives an apply
 * func prop which will be called by JobCard on apply.
 *
 * JobList -> JobCardList -> JobCard
 * CompanyDetail -> JobCardList -> JobCard
 *
 */

function PictureList({ pictures }) {
  console.debug("PictureList", "pictures=", pictures);

  return (
    <div className="PictureList">
      {pictures.map(picture => (
        <Picture
          key={picture.id}
          id={picture.id}
          name={picture.name}
          url={picture.url}
        />
      ))}
    </div>
  );
}

export default PictureList;
