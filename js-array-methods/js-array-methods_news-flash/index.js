import { news } from "./utils/news.js";
import { Card } from "./components/Card/Card.js";
import { checkFilteredNews, checkSortedNews } from "./utils/results.js";

const container = document.querySelector('[data-js="card-container"]');

// Part 1 - start here
const filteredNews = news.filter(story => {
  return story.categories.includes("politics");
});

// Part 2 - start here
const sortedNews = filteredNews.toSorted(
  (a, b) => a.body.length - b.body.length
);

sortedNews.forEach(news => {
  const cardElement = Card(news);
  container.append(cardElement);
});

// Check your filter and sorting order here. Have a look at the console to see if you're right or wrong.
checkFilteredNews(filteredNews);

checkSortedNews(sortedNews);
