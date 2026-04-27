import url from "url";

const myURL = new URL('https://github.com/')
myURL.pathname = 'mohammedsirajuddinkhan/LearnMern';
console.log(myURL.href);
