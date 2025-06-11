console.clear();

const url = "https://swapi.py4e.com/api/people";

const fetchData = async () => {
  const response = await fetch(url);
  const data = await response.json();

  console.log(data.results[7].eye_color);
};

fetchData();
