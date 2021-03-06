import React from "react";

const Question = (props) => {
  const { question, level, questions, setQuestions } = props;

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

  function handleClick() {
    const newQuestions = [...questions];
    const ind = questions.findIndex(
      (quest) => quest.question === question.question
    );
    const showAnswer = newQuestions[ind].showAnswer;
    newQuestions[ind].showAnswer = !showAnswer;
    setQuestions(newQuestions);
  }

  return (
    <>
      <div style={styles.container} onClick={handleClick}>
        <div
          style={styles.text}
          dangerouslySetInnerHTML={{ __html: question.question }}
        ></div>
        <div style={styles.btn}>{question.showAnswer ? "–" : "+"}</div>
      </div>
      {question.showAnswer && (
        <div
          style={styles.container}
          dangerouslySetInnerHTML={{ __html: question.answer }}
        ></div>
      )}
    </>
  );
};

export default Question;
