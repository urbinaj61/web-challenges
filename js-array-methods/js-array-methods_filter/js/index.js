console.clear();

const cards = [
  {
    id: "1",
    isBookmarked: false,
    question: "How often can I use <header>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "2",
    isBookmarked: false,
    question: "How often can I use <aside>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "3",
    isBookmarked: true,
    question: "On which types can I use destructuring assignment?",
    answer: "On Objects and Arrays",
    tags: ["js", "next"],
  },
];

const onlyCardWithIdTwo = cards.filter(card => {
  if (card.id === "2") {
    return true;
  } else {
    return false;
  }
});

const allCardsWith3Tags = cards.filter(card => {
  if (card.tags.length === 3) {
    return true;
  } else {
    return false;
  }
});

const allCardsThatAreNotBookmarked = cards.filter(card => {
  if (!card.isBookmarked) {
    return true;
  } else {
    return false;
  }
});

const allCardsWithTagsHTMLOrJSThatAreBookmarked = cards.filter(card => {
  if (
    (card.tags.includes("html") && card.isBookmarked) ||
    (card.tags.includes("js") && card.isBookmarked)
  ) {
    return true;
  } else {
    return false;
  }
});

export {
  onlyCardWithIdTwo,
  allCardsWith3Tags,
  allCardsThatAreNotBookmarked,
  allCardsWithTagsHTMLOrJSThatAreBookmarked,
};
