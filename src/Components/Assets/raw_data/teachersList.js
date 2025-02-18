// teachersList.js
const teachersList = [
  {
    "id": "teacher1",
    "name": "Aisha Khan",
    // ... other properties
    "contact": { // Contact property is present and is an object
      "email": "aisha.khan@email.com", // email property is present
      "phone": "+8801711223344"      // phone property is present
    },
    // ... other properties
  },
  {
    "id": "teacher2",
    "name": "Rohan Ahmed",

    "contact": { // Contact property is present and is an object
      "email": "rohan.ahmed@email.com", // email property is present
      "phone": "+8801922334455"      // phone property is present
    },

  },
  {
    "id": "teacher3",
    "name": "Sumaya Khan",
    "contact": {
      "email": "sumaya.khan@email.com",
      "phone": "+8801711223344"
    }
  },
  {
    "id": "teacher4",
    "name": "Faisal Rahman",
    "contact": {
      "email": "faisal.rahman@email.com",
      "phone": "+8801833445566"
    }
  },
  {
    "id": "teacher5",
    "name": "Sara Ahmed",
    "contact": {
      "email": "random@mail.com",
      "phone": "+8801922334455"
    }
  },
  {
    "id": "teacher6",
    "name": "Zahid Hasan",
    "contact": {
      "email": "zahid.hasan@email.com",
      "phone": "+8801755667788"
    }
  },
  // ... Ensure ALL teacher objects have the 'contact' object with 'email' and 'phone'
];

export default teachersList;