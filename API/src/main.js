import "./style.css";

const URL = "https://www.freetogame.com/api/games";

async function fetchData(URL) {
  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error(response);
    } else {
      const data = await response.json();
      document.querySelector("#apiData").textContent = data;
    }
  } catch (error) {
    console.log(error);
  }
}

fetchData(URL);
