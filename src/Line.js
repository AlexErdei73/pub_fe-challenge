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
      const indexOfFirstElement = levels[nextLevel].findIndex((item) => item.index===children[0])
      const length = children.length;
      const indexOfElementAfterLast = indexOfFirstElement + length;
      const ch = levels[nextLevel].slice(indexOfFirstElement, indexOfElementAfterLast);
      console.log(children[0]);
      console.log(level, index);
      console.log(indexOfFirstElement);
      console.log(ch);
      return ch;
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
    {getChildren().map((elem) => 
      <Line 
        levels={levels} 
        json={json} 
        level={nextLevel} 
        posOnLevel={getChildIndex(elem)}
      />)
    }
    </>
    
  );
};

export default Line;
