import axios from 'axios';
import { locationType } from '../Utils/Types';

const proxyUrl = "https://cors-proxy-l7uu.onrender.com/"

export const FetchLocations = async(query : String)=>{
    try {
          const {data} = await axios.get(`${proxyUrl}https://mvvvip1.defas-fgi.de/mvv/XML_STOPFINDER_REQUEST?%20language=de&outputFormat=RapidJSON&type_sf=any&name_sf=${query}`)  
          return data?.locations?.map((location: locationType) => ({
            id: location.id,
            name: location.name,
            coord: location.coord,
            type: location.type,
          }));

    } catch (error) {
        console.log("Couldn't fetch locations")
    }
}