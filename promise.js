/* 
  1. What is printed on the console for a+b+c?
  2. How long does it take?
  3. How can we reduce opertaion time by half without changing setTimeout duration?
  4. How do you improve the code?
*/

const fetchResult = value => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(value);
  }, 1000);
});

async function fetch() {
  const a = 5;

  console.time('promise time');

  const b = await fetchResult(10);
  console.timeLog('promise time');

  const c = await fetchResult(20);
  console.timeLog('promise time');

  console.log(a + b + c); // what is printed on console
}

fetch();
