import "./style.css";

const URL =
  "https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=";
let SearchQuery = "a"; //let them enter a query
async function fetchData(URL, SearchQuery) {
  try {
    const response = await fetch(`${URL}${SearchQuery}`);
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    document.getElementById("apiData").textContent = data.objectIDs; //after getting object ids put the id->primary image on screen
  } catch (error) {
    console.error(error.message);
  }
}

fetchData(URL, SearchQuery);
