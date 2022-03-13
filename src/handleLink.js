function closeAllQuestions(questions) {
  questions.forEach((question) => {
    question.showAnswer = false;
  });
}

function closeAllSections(levels) {
  levels.forEach((level) => {
    level.forEach((element) => {
      element.isOpen = false;
    });
  });
}

export function closeEveryUIItem(levels, questions) {
  closeAllQuestions(questions);
  closeAllSections(levels);
}

export function questionIndex(tocId, questions) {
  return questions.findIndex((question) => question.tocId === tocId);
}

function sectionId(tocId, questions) {
  const question = questions[questionIndex(tocId, questions)];
  if (!question) return;
  return question.sectionId;
}

function parentPosition(childIndex, levels) {
  const pos = {
    level: -1,
    posOnLevel: -1,
  };
  levels.forEach((level, levelIndex) => {
    level.forEach((elem, posOnLevel) => {
      if (elem.children.find((index) => index === childIndex)) {
        pos.level = levelIndex;
        pos.posOnLevel = posOnLevel;
      }
    });
  });
  return pos;
}

function nodePosition(index, levels) {
  const pos = {
    level: -1,
    posOnLevel: -1,
  };
  let posOnLevel;
  levels.forEach((level, levelIndex) => {
    posOnLevel = level.findIndex((node) => node.index === index);
    console.log("posOnLevel: ", posOnLevel);
    if (posOnLevel > -1) {
      console.log("node: ", levels[levelIndex][posOnLevel]);
      pos.posOnLevel = posOnLevel;
      pos.level = levelIndex;
    }
  });
  if (pos.level === -1) return;
  return pos;
}

export function nodePositionOfQuestion(tocId, questions, levels, sections) {
  const secId = sectionId(tocId, questions);
  const index = sections.findIndex((section) => section.id === secId);
  return nodePosition(index, levels);
}

function findPathInTree(tocId, questions, levels, sections) {
  const path = [];
  const nodePos = nodePositionOfQuestion(tocId, questions, levels, sections);
  if (!nodePos) return;
  path.push(nodePos);
  console.log("path at the begiining: ", path);
  let index, lastNode;
  for (let levelIndex = path[0].level; levelIndex > 0; levelIndex--) {
    lastNode = path[path.length - 1];
    index = levels[lastNode.level][lastNode.posOnLevel].index;
    path.push(parentPosition(index, levels));
  }
  return path;
}

export function openPath(tocId, questions, levels, sections) {
  const questIndex = questionIndex(tocId, questions);
  console.log(questIndex);
  console.log(questions[questIndex]);
  if (questIndex === -1) return;
  questions[questIndex].showAnswer = true;
  const path = findPathInTree(tocId, questions, levels, sections);
  console.log("path: ", path);
  if (!path) return;
  path.forEach((node) => {
    levels[node.level][node.posOnLevel].isOpen = true;
  });
}
