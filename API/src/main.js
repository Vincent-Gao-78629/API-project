import "./style.css";

const apiCall = "https://www.freetogame.com/api/games";

async function getGames(apiCall) {
  try {
    const response = await fetch(apiCall);
    if (!response.ok) {
      throw new Error(response.status);
    } else {
      const data = await response.json();
      console.log(data);
    }
  } catch (error) {
    console.error(error);
  }
}

getGames(apiCall);
