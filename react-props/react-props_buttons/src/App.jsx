import Button from "./components/Button.jsx";

const clickHandler = () => console.log("I've been clicked!");

export default function App() {
  return (
    <Button
      text='This is a button'
      colour={"red"}
      onClickHandler={clickHandler}
    />
  );
}
