const nameList = {
  name: "rintu",
  age: 24,
  true: "okky",
  1: "asdf ghjkl",
  friends: ["rocky", "masum", "js roy"],
  // nested oparetor:
  profesonal: {
    name1: "sourav",
    jobTitle: "web-devoloper",
    company: "UK",
    // again nested oparetor:
    motherStatus: {
      fulName: "Mother of humanity!",
    },
  },
};

// 👉console.log(nameList.profesonal.motherStatus.fulName);

// 👉console.log(nameList.profesonal.motherStatus["fulName"]);

// 👉console.log(nameList.profesonal.motherStatus["fulName"]);

// 👉console.log(nameList.profesonal.name1);

// 👉console.log(nameList.profesonal["name1"]);

// 👉console.log(nameList.friends);

// 👉console.log(nameList.profesonal.fotherStatus?.fulName);

// 👉console.log(nameList.true);

// 👉console.log(nameList[1]);
