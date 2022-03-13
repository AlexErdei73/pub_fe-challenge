import React, { useState, useEffect } from "react";
import Line, { deepCopy } from "./Line";
import { load, loadQuestions } from "./loading";
import {
  closeEveryUIItem,
  questionIndex,
  openPath,
  nodePositionOfQuestion,
} from "./handleLink";
import { useLocation } from "react-router-dom";
import "./App.css";
import sections from "../data/sections.json";
import questions1 from "../data/4,5,6,7,8,11,12,15,16,17.json";
import questions2 from "../data/44,45,46.json";

const App = () => {
  const [levels, setLevels] = useState(load(sections));

  const QUESTIONS_INIT = [];
  loadQuestions(questions1, QUESTIONS_INIT);
  loadQuestions(questions2, QUESTIONS_INIT);

  const [questions, setQuestions] = useState(QUESTIONS_INIT);

  function showNewQuestion(tocId) {
    const newQuestions = deepCopy(questions);
    const newLevels = deepCopy(levels);
    const questIndex = questionIndex(tocId, questions);
    const nodePos = nodePositionOfQuestion(tocId, questions, levels, sections);
    if (questIndex === -1 || !nodePos) return;
    closeEveryUIItem(newLevels, newQuestions);
    openPath(tocId, newQuestions, newLevels, sections);
    setQuestions(newQuestions);
    setLevels(newLevels);
  }

  const location = useLocation();
  useEffect(() => {
    const tocId = location.hash.slice(1);
    showNewQuestion(tocId);
  }, [location]);

  const ROOT_LEVEL = 0;
  const POS_ON_ROOT_LEVEL = 0;
  return (
    <main>
      <h1>Legal Requirements Regarding Companies</h1>
      <Line
        levels={levels}
        json={sections}
        level={ROOT_LEVEL}
        posOnLevel={POS_ON_ROOT_LEVEL}
        setLevels={setLevels}
        questions={questions}
        setQuestions={setQuestions}
      />
    </main>
  );
};

export default App;
