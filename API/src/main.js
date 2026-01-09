const SEARCH_URL =
  "https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=";

const OBJECT_URL =
  "https://collectionapi.metmuseum.org/public/collection/v1/objects/";

const query = "flower";

async function fetchArtwork(query) {
  try {
    const searchResponse = await fetch(`${SEARCH_URL}${query}`);
    if (!searchResponse.ok) {
      throw new Error(`Search error: ${searchResponse.status}`);
    }

    const searchData = await searchResponse.json();
    const objectIDs = searchData.objectIDs;

    const imgCard = document.getElementById("images");
    imgCard.innerHTML = "";

    for (let objectID of objectIDs) {
      const objectResponse = await fetch(`${OBJECT_URL}${objectID}`);
      if (!objectResponse.ok) {
        throw new Error(`Object error: ${objectResponse.status}`);
      }

      const objectData = await objectResponse.json();

      if (objectData.primaryImage) {
        imgCard.insertAdjacentHTML(
          "beforeend",
          `<img src="${objectData.primaryImage}" alt="${objectData.title}"/>`
        );
      }
    }
  } catch (error) {
    console.error(error.message);
  }
}

fetchArtwork(query);
