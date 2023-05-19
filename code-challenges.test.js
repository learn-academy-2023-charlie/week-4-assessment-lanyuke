// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

  // describe("d1ShuffleArr", () => {
  //   it("returns an array remove the first item and shuffles the remaining content", () => {
  //     expect(d1ShuffleArr(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"])),
  //     expect(d1ShuffleArr(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))
  //   })
  // })

  // Good Fail:
  // FAIL  ./code-challenges.test.js
  // d1ShuffleArr
  //   ✕ returns rray remove first item and shuffles the remaining content (1 ms)

  // ● d1ShuffleArr › returns rray remove first item and shuffles the remaining content

  //   ReferenceError: d1ShuffleArr is not defined


// const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
// const colors2 = [
//   "chartreuse",
//   "indigo",
//   "periwinkle",
//   "ochre",
//   "aquamarine",
//   "saffron"
// ]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// b) Create the function that makes the test pass.
  // PseudoCode:
  // input:arr
  // output:array remove first item and shuffles the remaining content
  // process: 
  // create a function named: d1ShuffleArr
  // use arr as parameter
  // use .shift mehtod to remove first index item,
  // use .sort and use comparison function with equation 0.5 - Math.random() to get random sorting result,
  // arr.sort(function(){return 0.5 - Math.random()})
  // return arr
  // pass test

  // const d1ShuffleArr = (arr) => {
  //   arr.shift()
  //   arr.sort(function(){return 0.5 - Math.random()})
  //   return arr
  // }

  // Pass test:
  // PASS  ./code-challenges.test.js
  // d1ShuffleArr
  //   ✓ returns an array remove the first item and shuffles the remaining content (6 ms)



// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

  // describe("endTal", () => {
  //   it("returns the end tally.", () => {
  //     expect(endTal(votes1)).toEqual(11),
  //     expect(endTal(votes2)).toEqual(-31)
  //   })
  // })

  // Good Fail:
  // FAIL  ./code-challenges.test.js
  // endTal
  //   ✕ returns the end tally. (1 ms)

  // ● endTal › returns the end tally.

  //   ReferenceError: endTal is not defined

// const votes1 = { upVotes: 13, downVotes: 2 }
// // Expected output: 11
// const votes2 = { upVotes: 2, downVotes: 33 }
// // Expected output: -31

// b) Create the function that makes the test pass.

  // PseudoCode:
  // input:obj
  // output:returns the end tally.
  // process: 
  // create a function named: endTal
  // use obj as parameter
  // return (obj.upVotes) - (obj.downVotes) to get end tally. 
  // pass test

  // const endTal = (obj) => {
  //   return (obj.upVotes) - (obj.downVotes)
  // }

  // Pass test:
  // PASS  ./code-challenges.test.js
  // endTal
  //   ✓ returns the end tally. (3 ms)

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

// describe("noDub", () => {
//   it("returns one array with no duplicate values.", () => {
//     expect(noDub(dataTypesArray1, dataTypesArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
//   })
// })

// Good Fail:
// FAIL  ./code-challenges.test.js
// noDub
//   ✕ returns one array with no duplicate values. (2 ms)

// ● noDub › returns one array with no duplicate values.

//   ReferenceError: noDub is not defined

const dataTypesArray1 = ["array", "object", "number", "string", "Boolean"]
const dataTypesArray2 = ["string", "null", "Boolean", "string", "undefined"]

// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

// b) Create the function that makes the test pass.

  // PseudoCode:
  // input:arr1 and arr2
  // output:returns one array with no duplicate values.
  // process: 
  // create a function named: noDub
  // use arr1 and arr2 as parameter
  // create a new variable name: combArr
  // make variable combines 2 arrays.
  // combArr = arr1.concat(arr2) 
  // use.filter method declare I am using array's value and index and then filter my output to only giving the value if indexof the value is equal to it's index.
  // return combArr.filter((value, index) => {return combArr.indexOf(value) === index})
  // pass test

    // const noDub = (arr1, arr2) => {
    //   const combArr = arr1.concat(arr2)
    //   return combArr.filter((value, index) => {
    //     return combArr.indexOf(value) === index
    //   })
    // }

    // pass test:
    // PASS  ./code-challenges.test.js
    // noDub
    //   ✓ returns one array with no duplicate values. (3 ms)


// STRETCH: Use the spread operator to pass in a dynamic number of arguments.

  // make new array for testing:
    const dataTypesArray3 = ["amazing data type", "string", "null", "Boolean", "testing data type", "string", "undefined", "testing data type"]
  // new expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined", "amazing data type", "testing data type"]

  // write a test for new function:

    describe("noDub", () => {
      it("returns one array with no duplicate values.", () => {
        expect(noDub(dataTypesArray1, dataTypesArray2, dataTypesArray3)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined", "amazing data type", "testing data type"])
      })
    })

    //   Good Fail:
    //   FAIL  ./code-challenges.test.js
    // noDub
    //   ✕ returns one array with no duplicate values. (2 ms)

    // ● noDub › returns one array with no duplicate values.

    //   ReferenceError: noDub is not defined


    // PseudoCode:
    // input:...arrays
    // output:returns one array with no duplicate values.
    // process: 
    // create a function named: noDub
    // use ...arrays as parameter
    // create a new variable name: combArr
    // use .flat() to combine all arrays.
    // combArr = arrays.flat()
    // use.filter method declare I am using array's value and index and then filter my output to only giving the value if indexof the value is equal to it's index.
    // return combArr.filter((value, index) => {return combArr.indexOf(value) === index})
    // pass test

    const noDub = (...arrays) => {
      const combArr = arrays.flat()
      return combArr.filter((value, index) => {
        return combArr.indexOf(value) === index
      })
    }

    // test pass:
    // PASS  ./code-challenges.test.js
    // noDub
    //   ✓ returns one array with no duplicate values. (4 ms)
  