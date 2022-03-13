function closeAllQuestions(questions){
    questions.forEach((question) => {
        question.showAnswer = false;
    })
}

function closeAllSections(levels){
    levels.forEach((level) => {
        level.forEach((element) => {
            element.isOpen = false;
        })
    })
}

export function closeEveryUIItem(levels, questions) {
    closeAllQuestions(questions);
    closeAllSections(levels);
}

function questionIndex(tocId, questions) {
    return questions.findIndex((question) => question.tocId === tocId);
}

function parentIdOfQuestion(tocId, questions) {
    return questions[questionIndex(tocId, questions)].sectionId;
}

function indexOfSection(id, sections) {
    return sections.findIndex((item) => item.id === id);
}

function parentPosition(childIndex, levels) {
    const pos = {
        level: -1,
        posOnLevel: -1,
    }
    levels.forEach((level, levelIndex) => {
        level.forEach((elem, posOnLevel) => {
            if (elem.children.find((index) => index === childIndex )) {
                pos.level = levelIndex;
                pos.posOnLevel = posOnLevel;
            }
        })
    })
    return pos;
}

function parentPosition(tocId, questions, levels, sections) {
    const parentIndex = indexOfSection(parentId(tocId, questions), sections);
    return parentPosition(parentIndex, levels);
}

function findPathInTree(tocId, questions, levels, sections) {
    const path = [];
    path.push(parentPosition(tocId, questions, levels, sections));
    let index, lastNode;
    for (let levelIndex = path[0].level; levelIndex===0; levelIndex--) {
        lastNode = path[path.length - 1];
        index = levels[lastNode.level][lastNode.posOnLevel].index;
        path.push(parentPosition(index, levels));
    }
    return path;
}

export function openPath(tocId, questions, levels, sections) {
    questions[questionIndex(tocId, questions)].showAnswer = true;
    const path = findPathInTree(tocId, questions, levels, sections);
    path.forEach((node) => levels[node.level, node.posOnLevel].showAnswer = true );
}