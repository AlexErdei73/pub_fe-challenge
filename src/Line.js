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
  const { index, children, isOpen} = element;
  const title = json[index];
  const nextLevel = level + 1;

  function getChildren() {
      const indexOfFirstElement = levels[nextLevel].findIndex((item) => item.index===index)
      const length = children.length;
      const indexOfElementAfterLast = indexOfFirstElement + length;
      return levels[nextLevel].slice(indexOfFirstElement, indexOfElementAfterLast);
  }

  function getChildIndex(item) {
      return levels[nextLevel].findIndex((elem) => elem.index === item.index)
  }

  return (
    <>
    <div style={styles.div}>
      {title}
      <span style={styles.span}>{isOpen ? "-" : "+"}</span>
    </div>
    {isOpen && getChildren().map((elem) => <Line levels={levels} json={json} level={nextLevel} posOnLevel={getChildIndex(elem)}/>)}
    </>
    
  );
};

export default Line;
