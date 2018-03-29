'use strict';

fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty').then((res) => {
  res.json().then((storyIds) => {
    storyIds.forEach((storyId) => {
      fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json?print=pretty`).then((res) => {
        res.json().then((story) => {
          console.log(story);
        })
      });
    });
  });
});
