import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import PictureList from "./PictureList";
import AddForm from "./AddForm";

/** Site-wide routes.
 *
 * Parts of site should only be visitable when logged in.
 *
 * Visiting a non-existant route navigates to the homepage.
 */

function RoutesList({ pictures, add }) {
  console.debug("Routes", "pictures", pictures);

  return (
    <div className="pt-5">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<AddForm add={add} />} />
        {/* <Route path="/edit" element={<EditForm edit={edit} />} /> */}
        <Route path="/pictures" element={<PictureList pictures={pictures} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default RoutesList;
