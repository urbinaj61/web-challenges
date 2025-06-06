console.clear();

const main = document.querySelector('[data-js="main"]');

// Part 1: Creating a Select Input

const languages = {
  DE: "German",
  EN: "English",
  ES: "Spanish",
  FR: "French",
  IT: "Italian",
  NL: "Dutch",
  PT: "Portuguese",
  RU: "Russian",
  ZH: "Chinese",
};

const select = document.createElement("select");
select.name = "languages";
main.append(select);

for (const key in languages) {
  const option = document.createElement("option");
  option.textContent = languages[key];
  select.append(option);
}

const nav = {
  home: { href: "/home", text: "Home" },
  about: { href: "/about", text: "About" },
  contact: { href: "/contact", text: "Contact" },
};

const navElement = document.createElement("nav");
const ul = document.createElement("ul");
main.append(navElement);
navElement.append(ul);

for (const anchor in nav) {
  const li = document.createElement("li");
  const anchorRef = document.createElement("a");
  if (nav[anchor] === "href") anchorRef.setAttribute("href", nav[anchor].href);
  if (nav[anchor] === "text") anchorRef.textContent = nav[anchor].text;
  console.log(nav[anchor]);

  li.append(anchor);
  ul.append(li);
}
