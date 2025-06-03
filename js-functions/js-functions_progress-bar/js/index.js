console.clear();

const progressBar = document.querySelector('[data-js="progress-bar"]');

const calculateScrollPercentage = () => {
  const windowScrollHeight = window.scrollY;
  const total = document.body.scrollHeight - window.innerHeight;
  const scrollPercentage = (windowScrollHeight / total) * 100 + "%";
  progressBar.style.width = scrollPercentage;
};

document.addEventListener("scroll", () => calculateScrollPercentage());
