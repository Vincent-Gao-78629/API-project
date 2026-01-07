import "./style.css";

const URL = "https://images.metmuseum.org/CRDImages/ad/original/ADA2984.jp";
let AllData = "fruit/all";

async function fetchData(URLPath) {
  try {
    const response = await fetch(`${URL}${URLPath}`);
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    document.getElementById("apiData").textContent = data.name;
  } catch (error) {
    console.error(error.message);
  }
}

fetchData(AllData);
