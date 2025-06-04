console.clear();

const body = document.querySelector("body");

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

//Create elements
const article = document.createElement("article");
const paragraph = document.createElement("p");
const footer = document.createElement("footer");
const span = document.createElement("span");
const postButton = document.createElement("button");

//Add classes to created elements
article.classList.add("post");
paragraph.classList.add("post__content");
footer.classList.add("post__footer");
span.classList.add("post__username");
postButton.classList.add("post__button");

//Append elements
body.append(article);
article.append(paragraph);
article.append(footer);
footer.append(span);
footer.append(postButton);

//Add attributes to elements
postButton.setAttribute("data-js", "like-button");

//Add content to our elements
paragraph.textContent = `dfgdkfjghkdfjghkdjfgh
  kdjfghkdjfghkdfjghkdjf
  ghkdjfghkdjhgkdjghkdjghkdfjgh`;

span.textContent = "@username";
postButton.textContent = "♥ Like";

postButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.
