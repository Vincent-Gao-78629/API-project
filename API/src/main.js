import "./style.css";

const URL = "https://api.pokemontcg.io/v2/cards";
const API_KEY = "af71b87a-fc23-45fd-90ee-e55622ff1404";

async function fetchData() {
  try {
    const response = await fetch(URL, {
      headers: {
        "X-Api-Key": API_KEY,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    document.querySelector("#apiData").textContent = data.card[0].name;
  } catch (error) {
    console.error(error.message);
  }
}

fetchData();
