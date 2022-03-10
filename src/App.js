import React, { useState } from "react";
import Line from "./Line";
import "./App.css";
import sections from "../data/sections.json";

const App = () => {
  const [levels, setLevels] = useState(load(sections));

  function findChildren(json, parentId) {
    const children = [];
    json.forEach((element, index) => {
      if (element.parentId === parentId) children.push(index);
    });
    return children;
  }

  function load(json) {
    const ROOT = -1;
    const levels = [];
    levels.push([
      {
        index: 0,
        isOpen: false,
        children: findChildren(json, ROOT),
      },
    ]);
    let nextLevel, levelIndex;
    levelIndex = 0;
    do {
      nextLevel = [];
      const level = levels[levelIndex];
      level.forEach((element) => {
        element.children.forEach((index) => {
          const parentId = json[index].id;
          nextLevel.push({
            index: index,
            isOpen: false,
            children: findChildren(json, parentId),
          });
        });
      });
      if (nextLevel.length > 0) levels.push(nextLevel);
      levelIndex++;
    } while (nextLevel.length > 0);
    return levels;
  }

  console.log(sections);
  console.log(load(sections));
  console.log(sections[levels[0][0].index]);
  return (
    <>
      <h1>Crazy company UI example</h1>
      <Line element={levels[0][0]} json={sections} level="0" />
    </>
  );
};

export default App;
