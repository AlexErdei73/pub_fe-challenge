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

  const { levels, json, level, posOnLevel } = props;
  const element = levels[level][posOnLevel];
  const { index, title, children } = element;
  const title = json[index].title;

  function getChildren() {
      const nextLevel = level + 1;
      const indexOfFirstElement = levels[nextLevel].findIndex((item) => item.index===index)
      const length = children.length;
      return levels[nextLevel].slice()
  }

  return (
    <div style={styles.div}>
      {title}
      <span style={styles.span}>{isOpen ? "-" : "+"}</span>
      {isOpen && }
    </div>
  );
};

export default Line;
