const countrySelect = document.getElementById("country-select");
const casesEl = document.getElementById("cases");
const deathsEl = document.getElementById("deaths");
const recoveredEl = document.getElementById("recovered");
const loader = document.getElementById("loader");
const errorEl = document.getElementById("error");

// Show loader
function showLoader() {
  loader.style.display = "block";
}

// Hide loader
function hideLoader() {
  loader.style.display = "none";
}

// Update UI with data
function updateStats(data) {
  casesEl.textContent = data.cases.toLocaleString();
  deathsEl.textContent = data.deaths.toLocaleString();
  recoveredEl.textContent = data.recovered.toLocaleString();
}

// Fetch COVID data
async function fetchData(country = "global") {
  showLoader();
  errorEl.textContent = "";

  let url =
    country === "global"
      ? "https://disease.sh/v3/covid-19/all"
      : `https://disease.sh/v3/covid-19/countries/${country}`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Network response was not ok");
    const data = await res.json();
    updateStats(data);
  } catch (error) {
    errorEl.textContent = "Error fetching data. Please try again.";
  } finally {
    hideLoader();
  }
}

// Load countries for dropdown
async function loadCountries() {
  try {
    const res = await fetch("https://disease.sh/v3/covid-19/countries");
    const countries = await res.json();

    countries.forEach((country) => {
      const option = document.createElement("option");
      option.value = country.country;
      option.textContent = country.country;
      countrySelect.appendChild(option);
    });
  } catch (error) {
    console.error("Failed to load country list");
  }
}

// Dropdown event
countrySelect.addEventListener("change", () => {
  const selected = countrySelect.value;
  fetchData(selected);
});

// Initialize
window.addEventListener("DOMContentLoaded", () => {
  fetchData(); // Load global data
  loadCountries(); // Populate country list
});
