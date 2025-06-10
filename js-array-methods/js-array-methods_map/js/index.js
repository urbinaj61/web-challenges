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
    tags: ["js", "next", "advanced"],
  },
];

const lowerCaseAnswers = cards.map(card => {
  return card.answer.toLocaleLowerCase();
});
console.log(lowerCaseAnswers);

const questionsAndAnswersTogether = cards.map(card => {
  return `${card.question} ${card.answer}`;
});
console.log(questionsAndAnswersTogether);

const questionAndAnswer = cards.map(card => {
  const qa = { question: card.question, answer: card.answer };
  return qa;
});
console.log(questionAndAnswer);

export { lowerCaseAnswers, questionsAndAnswersTogether, questionAndAnswer };
