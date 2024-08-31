const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImJlZDk2YTQ5LTZiZmUtNGM3Ni1iOThlLTBjZGE5MDBkN2E4MS0xNzI1MTMxODY0OTY5IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiN2NlYjVkOGQtMjBmNC00ZjkxLWI2ZDEtMzE4YjUwNmY0OGI5IiwidHlwZSI6InQifQ.stB_pXZXEVP4smJZhPF4ZAv8aTR_9VJuZS1I7JRnOls'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
