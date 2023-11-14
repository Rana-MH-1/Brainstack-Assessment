Rana Meftah

** Handling cors **

In the Dev , i have used proxy (  "proxy": "https://mvvvip1.defas-fgi.de/mvv/") but in deployment it won't work. So To overcome this , I have used [CORS Anywhere] : a NodeJS reverse proxy which adds CORS headers to the proxied request. (https://github.com/Rob--W/cors-anywhere)

If you experience any latency while fetching the data for the first time, it's due to the cold start of the proxy server. So it could affect the performance of the demo

** Decisions **
I create a DropdownSearch Component that contains an input + dropdown list of locations.

-Once the parent Component is mounted , a call api is done to fetch initial locations so the user could search/ select a location and send it to DropdownSearch Component
- there is onInputChange event whenever a user type a serach text ==> call api fetchLocations ==> for better performance and less api call on the server ==> use of debounce functions to delay the call and get executed once the user stop typing and after that clean the debounced function to ovveride re-renders.

if the user delete the search text or the selected option ==> all locations are shown so he could search again or select another destination.


- onClick event ==> when user select a location ==> it will be dispalyed in a Map using react-leaflet according to its coordinates. 



