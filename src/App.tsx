import "./Components/CSS/App.css";
import React, {useEffect,useState } from "react";
import { FetchLocations } from "./Api/FetchLocations";
import { locationType } from "./Utils/Types";
import SearchDropDown from "./Components/SearchDropDown/SearchDropDown";
import Layout from "./Components/Layout";
// Dynamic import using React.lazy
const Map = React.lazy(() => import("./Components/Map/Map"));

function App() {
  const [optionsLocations, setOptionsLocations] = useState([]);
  const [destination, setDestination] = useState<locationType | null>(null);
  const [isloading, setIsLoading] = useState<boolean>(false);

  let query: String;

  const FetchsInitialLocations = async (value: String) => {
    const locations = await FetchLocations(value);
    setOptionsLocations(locations);
    console.log("locations", locations);
  };

  const OnInputChange = async (value: String) => {
    setIsLoading(true);
    try {
      const Locations = await FetchLocations(value);
      setOptionsLocations(Locations);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const onClick = (option: locationType) => {
    setDestination(option);
  };

  useEffect(() => {
    FetchsInitialLocations(query);
  }, []);

  return (
    <Layout>
      <div className="wrapper">
        <div className="SearchPlanner">
          <p className="label">Select</p>
          <SearchDropDown
            options={optionsLocations}
            OnInputChange={OnInputChange}
            onClick={onClick}
            isloading={isloading}
          />
        </div>
        <div className="map">
          <Map
            coords={destination?.coord || [48.1351, 11.582]}
            locationInfo={{ name: destination?.name, type: destination?.type }}
          />
        </div>
      </div>
    </Layout>
  );
}

export default App;
