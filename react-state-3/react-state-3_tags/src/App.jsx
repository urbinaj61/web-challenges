import { useState } from "react";
import "./styles.css";
import Form from "./components/Form";
import List from "./components/List";

export default function App() {
  const [tags, setTags] = useState(["JavaScript", "React", "CSS", "HTML"]);

  const handleAddTag = tag => {
    setTags([...tags, tag]);
  };

  const handleDeleteTag = receivedTag => {
    return setTags(tags.filter(tag => tag !== receivedTag));
  };

  return (
    <main className='app'>
      <Form onAddTag={handleAddTag} />
      <List onDeleteTag={handleDeleteTag} tags={tags} />
    </main>
  );
}
