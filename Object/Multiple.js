let student = {
  name: "jensi",
  number: 9879488160,
  course: "full stack",
  status: "running",

  add: {
    houseNumber: 701,
    city: "surat",
    state: "gujarat",
  },
  skills: ["react", "node", "javascript", "html", "mongodb"],

  friends: [
    {
      name: "yashvi",
      course: "frontend",
      number: 5643,
    },
    {
      name: "nidhi",
      course: "designing",
      number: 1234,
    },
    {
      name: "milli",
      course: "backend",
      number: 8901,
    },
  ],
};

console.log(student.add.city);

let n = student.skills.length;
console.log(n);

for (let i = 0; i < n; i++)
{
    console.log(student.skills[i]);
    
}

console.log(student.friends[2].course);




