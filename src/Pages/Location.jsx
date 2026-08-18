// ---------------------------------------------------------
// Location.jsx
// ---------------------------------------------------------
//
// This is the Location page.
//
// Its main job is to display the Map component.
// ---------------------------------------------------------


// Import our Map component.
import Map from "../Components/Map";



// ---------------------------------------------------------
// LOCATION PAGE
// ---------------------------------------------------------

function Location() {

  return (

    <div>

      {/* Page title */}
      <h1
        style={{
          textAlign: "center",
        }}
      >
        📍 Our Location
      </h1>


      {/* Small description */}
      <p
        style={{
          textAlign: "center",
        }}
      >
        Find our site and your current location on the map.
      </p>


      {/* Display the Leaflet map */}
      <Map />

    </div>

  );
}



// Export Location page.
export default Location;