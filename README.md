## My Solution

I have managed to solve your little coding challange in React. The main issue of the task is that the data is ordered with key value pairs in a datastructure called binary tree. Searching in a binary tree requires the knowledge of a difficult algorithm. I used another approach to avoid this. I mapped the array into a two dimensional array, where the first index means the level in the tree (0 is root level), the other index id the branch number on the given level (indexed from 0).
This way it was relatively easy to solve the problem, but it still took me a couple of days and some debugging.

## What have I done yet?

Everything is done according to the description, which was given to me. I did it as good as I could. Some points which was not fairly obvious in the project description:

1. The description was confusing regarding the number of data files, which describe the data. In the repository only 3 files are given, so I used only those, although the description mentions a 4th file too at some points.

2. Some links do not point to other question in the given data or the question, where the link points, leads you to a section, which is not part of the binary tree structure according to the given roles, therefore it is not visible on the UI. When the user clicks on these links, these will not take the user anywhere.

3. Every UI element is collapsed initially. This is the simplest starting point for a UI like this, although it was not straightforward from the description.

## What about the further improvement?

This coding challenge is long enough without any further improvement as it is not paid work. I am qualified to do any other improvement if it were not only something, which I did only for fun. The problem looked interesting enough to deal with it, up to this point, but further improvement can only come from me if I get paid for this.

## What if you want to see more from me?

If I still have not convinced you regarding my React and Java Script programming abilities please have a look at my other projects too in my github repositories. They contain plenty of asynchronous programming even with React and there is a complete working clone of Facebook there. It is a much simplified version, so we can call it Fakebook. Try [Fakebook](https://alexerdei73.github.io/fakebook/), be a registered user and contact me there. You can see the code [here](https://github.com/AlexErdei73/fakebook)

## Set up

(Tested with Node v14.7.1)

```
npm install
npm start
```

## Task

To test your programming skill, we'd like you to have a go at a small task.

We have provided you with four JSON files (in /data).
These files provide you with a table of contents (sections.json), questions (/[\d]+(,[\d]+)+/.json), and a list of view states (states.json).
Your task is to use this data to produce a content view page, a simple wireframe has been included (fe-challenge-wireframe.png) to give a starting point to how it should look.

### Requirements

- You should start with loading data from all three files.
- The view should display sections and questions altogether and the content tree hierarchy should be easy to read. Please do not use a 3rd party component library such as Material UI, as we want to test for some CSS competency.
- The view should be responsive and work on any common display size (e.g. mobile, tablet, desktop).
- The starting state should have all questions collapsed.
- Clicking on an element of the tree should toggle its state (so if it is collapsed, clicking on it should expand that section, if it is already expanded collapse that section).
- Some of the Q&A have links to other Q&A on the same page, clicking these links should take the user to that part of the page. E.g. qa_id: 99 links to 1433932435017_Toc402171636 which is assosciated with qa_id: 105

Some things to note:

- Your solution should work in any modern browser, but you don't need to worry about making it fully cross browser or supporting older browsers.
- The root of the sections tree has id -1.
- Simplicity is key.
- The styling should be functional and readable, but don't worry about making it pretty.
- You can use this file to list any improvements you didn't have time to implement.

Suggested extensions:

- Support passing in a toc id by url (e.g. ?q=1433932435017_Toc402171628) and automatically scrolling the user to the right part of the tree with the content expanded.
- Handling the data asynchronously (the loading can be faked, we're more interested in seeing use of asynchronous code than if the data really has been fetched from a service).
