import { Link } from "react-router-dom";

/** Homepage of site.
 *
 * Shows welcome message.
 *
 * Routed at /
 *
 * Routes -> Home
 */

function Home() {
  console.debug("Home");

  return (
    <div className="Home">
      <div className="container text-center">
        <h1 className="mb-4 fw-bold">Pixly</h1>
        <p className="lead">All the pictures in one, convenient place.</p>
      </div>
    </div>
  );
}

export default Home;