
// let's start with an array with today's teachers
const YOUR_TEACHERS_FOR_TODAY = [
    {
      name: "Fábio",
      teaches: ["React"],
      knows: ["React", "Node.js", "CSS"],
    },
    {
      name: "Sofia",
      teaches: ["React"],
      knows: ["React", "Node.js"],
    },
    {
      name: "Tiago",
      teaches: ["React"],
      knows: ["React", "Node.js", "Unity", "C++", "C#", "Assembly"],
    },
  ];
  
  // let's destructure this array a bit
  const [firstTeacher, secondTeacher, thirdTeacher] = YOUR_TEACHERS_FOR_TODAY;
  
  console.log("Lead teacher", firstTeacher);
  console.log("Supporting teachers", secondTeacher, thirdTeacher);
  
  console.log("=============");
  
  // let's destructure the array in a different way, to get the supporting teachers
  
  const [, ...supportingTeachers] = YOUR_TEACHERS_FOR_TODAY;
  
  console.log("Supporting teachers", supportingTeachers);
  
  console.log("=============");
  
  // Let's create another array to do some more destructuring and restructuring
  const ALL_TEACHERS = [
      {
          name: "Anna",
          semestersTeaching: 3,
      },
      {
          name: "Carl",
          semestersTeaching: 1,
      },
      {
          name: "Divyendu",
          semestersTeaching: 1,
      },
      {
          name: "Eloisa",
          semestersTeaching: 2,
      },
      {
          name: "Fábio",
          semestersTeaching: 2,
      },
      {
          name: "Gina",
          semestersTeaching: 1,
      },
      {
          name: "Raúl",
          semestersTeaching: 3,
      },
      {
          name: "Sofia",
          semestersTeaching: 1,
      },
      {
          name: "Tiago",
          semestersTeaching: 8,
      },
  ];
  
  
  
  
  
  let nameAndSecondThingTeacherKnows = ({ name, knows: [, secondThing] }) =>
    console.log(name, secondThing);
  
  YOUR_TEACHERS_FOR_TODAY.forEach((teacher) =>
    nameAndSecondThingTeacherKnows(teacher)
  );
  
  // picking items in an array
  const [oneTeacher, anotherTeacher, yetAnotherTeacher] = YOUR_TEACHERS_FOR_TODAY;
  console.log("oneTeacher", oneTeacher);
  console.log("anotherTeacher", anotherTeacher);
  console.log("yetAnotherTeacher", yetAnotherTeacher);
  // picking specific items in objects
  const { name } = oneTeacher;
  const { knows } = anotherTeacher;
  
  console.log(name);
  console.log(knows);
  
  // renaming items to avoid clashes
  const { name: ericsName } = oneTeacher;
  const { name: tiagosName } = anotherTeacher;
  
  console.log(ericsName);
  console.log(tiagosName);
  
  // picking items inside objects inside arrays, and renaming the variables that get picked
  const [
    { name: firstTeachersName },
    { name: secondTeachersName },
    { name: thirdTeachersName }
  ] = YOUR_TEACHERS_FOR_TODAY;
  console.log(firstTeachersName, secondTeachersName, thirdTeachersName);
  
  // picking items inside arrays inside objects inside arrays (!!!)
  const [
    {
      knows: [firstThingOneTeacherKnows, ...restOfThingsOneTeacherKnows]
    },
    {
      knows: [
        ,
        ,
        thirdThingAnotherTeacherKnows,
        ...restOfThingsAnotherTeacherKnows
      ]
    }
  ] = YOUR_TEACHERS_FOR_TODAY;
  
  console.log("=============");
  console.log(firstThingOneTeacherKnows);
  console.log(restOfThingsOneTeacherKnows);
  console.log(thirdThingAnotherTeacherKnows);
  console.log(restOfThingsAnotherTeacherKnows);
  
  console.log("=====================");
  
  const FRUITS = ["apple", "avocado", "banana", "lemon", "orange", "tomato"];
  const CUSTOMER = {
    name: "John",
    likes: ["apple", "pineapple"],
    dislikes: ["lemon", "grapefruit"]
  };
  
  // let's destructure this array a bit
  const [firstFruit, secondFruit, ...restOfTheFruits] = FRUITS;
  
  // let's spread some of these items, changing the order a bit
  console.log([...restOfTheFruits, secondFruit, firstFruit]);
  
  let NEW_FRUITS = [...FRUITS];
  
  let partial_stage = [NEW_FRUITS[5], NEW_FRUITS[0]];
  
  console.log(partial_stage);
  [NEW_FRUITS[0], NEW_FRUITS[5]] = partial_stage;
  
  console.log(NEW_FRUITS);
  
  // well, we can also use spreading with objects
  const ANOTHER_CUSTOMER = { hasInFridge: FRUITS, ...CUSTOMER };
  console.log(ANOTHER_CUSTOMER);
  
  // in contrast with arrays, the spread operator can be used to
  // overwrite items in a previously-defined object
  // this is because keys are applied in order, so writing the same
  // key twice in an object declaration means the last one written
  // is the final one
  const YET_ANOTHER_CUSTOMER = { ...CUSTOMER, likes: FRUITS, name: "James" };
  
  console.log(YET_ANOTHER_CUSTOMER);
  
  const YET_YET_ANOTHER_CUSTOMER = {
    ...YET_ANOTHER_CUSTOMER,
    likes: [],
    likes: ["grapes"]
  };
  console.log(YET_YET_ANOTHER_CUSTOMER);