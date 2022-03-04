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
* You should start with loading data from all three files.
* The view should display sections and questions altogether and the content tree hierarchy should be easy to read. Please do not use a 3rd party component library such as Material UI, as we want to test for some CSS competency.
* The view should be responsive and work on any common display size (e.g. mobile, tablet, desktop).
* The starting state should have all questions collapsed.
* Clicking on an element of the tree should toggle its state (so if it is collapsed, clicking on it should expand that section, if it is already expanded collapse that section).
* Some of the Q&A have links to other Q&A on the same page, clicking these links should take the user to that part of the page. E.g. qa_id: 99 links to 1433932435017_Toc402171636 which is assosciated with qa_id: 105


Some things to note:

* Your solution should work in any modern browser, but you don't need to worry about making it fully cross browser or supporting older browsers.
* The root of the sections tree has id -1.
* Simplicity is key.
* The styling should be functional and readable, but don't worry about making it pretty.
* You can use this file to list any improvements you didn't have time to implement.


Suggested extensions:

* Support passing in a toc id by url (e.g. ?q=1433932435017_Toc402171628) and automatically scrolling the user to the right part of the tree with the content expanded.
* Handling the data asynchronously (the loading can be faked, we're more interested in seeing use of asynchronous code than if the data really has been fetched from a service).
