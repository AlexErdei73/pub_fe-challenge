function findChildren(json, parentId) {
  const children = [];
  json.forEach((element, index) => {
    if (element.parentId === parentId) children.push(index);
  });
  return children;
}

//This function loads in the sections.json file. The data is structured in
//that array with key element pairs on a way, which is called a binary tree.
//The search operation requires a difficult algorithm in that data
//structure. We avoid that with mapping the data structure to a two-dimensional
//array. The first index means the level on the tree, the second index means
//the branch position on the given level of the tree. This way every search
//operation becomes elementary search in a 2D-array. This perhaps a relatively
//simple solution for this not so simple problem.
export function load(json) {
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

export function loadQuestions(questions, output) {
  questions.forEach((question) => {
    output.push({
      question: question.question,
      answer: question.answer,
      showAnswer: false,
      sectionId: question.sectionId,
      id: question.qa_id,
    });
  });
}
