import React from "react";
import Question from "./Qestion";

const Line = (props) => {
  const {
    levels,
    json,
    level,
    posOnLevel,
    setLevels,
    questions,
    setQuestions,
  } = props;

  const styles = {
    container: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginLeft: `${level}em`,
      marginBottom: ".2em",
      borderBottom: "1px solid dodgerblue",
      maxWidth: "600px",
    },
    text: {
      fontSize: "1.2em",
    },
    btn: {
      color: "dodgerblue",
      fontSize: "2em",
    },
  };

  const element = levels[level][posOnLevel];
  const { index, children, isOpen } = element;
  const title = json[index].title;
  const nextLevel = level + 1;

  function getChildren() {
    if (!levels[nextLevel]) return [];
    const indexOfFirstElement = levels[nextLevel].findIndex(
      (item) => item.index === children[0]
    );
    const length = children.length;
    const indexOfElementAfterLast = indexOfFirstElement + length;
    return levels[nextLevel].slice(
      indexOfFirstElement,
      indexOfElementAfterLast
    );
  }

  function getChildIndex(item) {
    if (!levels[nextLevel]) return -1;
    else
      return levels[nextLevel].findIndex((elem) => elem.index === item.index);
  }

  const childElements = getChildren(nextLevel).map((elem) => {
    if (getChildIndex(elem) > -1)
      return (
        <Line
          levels={levels}
          json={json}
          level={nextLevel}
          posOnLevel={getChildIndex(elem)}
          setLevels={setLevels}
          questions={questions}
          setQuestions={setQuestions}
        />
      );
    else return <></>;
  });

  const questionsForThisSection = questions.filter(
    (question) => question.sectionId === json[index].id
  );

  function deepCopy(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

  function handleClick() {
    const newLevels = deepCopy(levels);
    const elem = newLevels[level][posOnLevel];
    elem.isOpen = !isOpen;
    setLevels(newLevels);
  }

  return (
    <>
      <div style={styles.container} onClick={handleClick}>
        <div style={styles.text}>{title}</div>
        <div style={styles.btn}>{isOpen ? "–" : "+"}</div>
      </div>
      {isOpen && childElements}
      {isOpen &&
        questionsForThisSection.map((question) => (
          <Question
            question={question}
            level={nextLevel}
            questions={questions}
            setQuestions={setQuestions}
          />
        ))}
    </>
  );
};

export default Line;
