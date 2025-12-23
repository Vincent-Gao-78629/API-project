import "./style.css";

const URL = "https://dogapi.dog/api/v1/facts";

async function fetchData(URL) {
  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error(response);
    } else {
      const data = await response.json();
      console.log(data.facts);
      document.querySelector("#apiData").textContent = data.facts;
    }
  } catch (error) {
    console.log(error);
  }
}

fetchData(URL);
