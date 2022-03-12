import React from "react";

const Question = (props) => {
    const { question, level } = props;

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

    return ( 
        <>
            <div style={styles.container}>
                <div style={styles.text}>{question.question}</div>
                <div style={styles.btn}>{question.showAnswer ? "–" : "+"}</div>
            </div>
            {question.showAnswer && <div>{question.answer}</div>}
        </> 
     );
}
 
export default Question;
