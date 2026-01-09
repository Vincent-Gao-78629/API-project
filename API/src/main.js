import "./style.css";

const URLSearch =
  "https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=";

let SearchURL = "flowers";

async function fetchIDWithImages(URL, SearchURL) {
  try {
    const response = await fetch(`${URL}${SearchURL}`);
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    document.getElementById("apiData").textContent = data.objectIDs; //after getting object ids put the id->primary image on screen
  } catch (error) {
    console.error(error.message);
  }
}

fetchIDWithImages(URL, SearchURL);

const ObjectIDSearch =
  "https://collectionapi.metmuseum.org/public/collection/v1/objects/";
async function fetchData(URL, SearchURL) {
  try {
    const response = await fetch(`${URL}${SearchURL}`);
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    document.getElementById("apiData").textContent = data.objectIDs; //after getting object ids put the id->primary image on screen
  } catch (error) {
    console.error(error.message);
  }
}

async function fetchData(URL, SearchURL) {
  try {
    const response = await fetch(`${URL}${SearchURL}`);
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    document.getElementById("apiData").textContent = data.objectIDs; //after getting object ids put the id->primary image on screen
  } catch (error) {
    console.error(error.message);
  }
}
