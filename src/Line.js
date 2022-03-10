import React from "react";

const Line = (props) => {
  const styles = {
    div: {
      width: "500px",
      maxWidth: "60%",
      fontSize: "1.2em",
      borderBottom: "2px solid dodgerblue",
      marginLeft: `${level}em`,
    },
    span: {
      color: "dodgerblue",
      borderBottom: "2px solid dodgerblue",
      float: "right",
    },
  };

  const { element, json, level } = props;
  const { index, isOpen, children } = element;
  const title = json[index].title;
  console.log(title);
  return (
    <div style={styles.div}>
      {title}
      <span style={styles.span}>{isOpen ? "-" : "+"}</span>
    </div>
  );
};

export default Line;
