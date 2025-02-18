// teachersList.js

import teacher1Img from '../img_data/teachers/glasses1.jpg';
import teacher2Img from '../img_data/teachers/glasses2.jpg';
import teacher3Img from '../img_data/teachers/glasses3.jpg';
import teacher4Img from '../img_data/teachers/glasses4.jpg';
import teacher5Img from '../img_data/teachers/glasses5.jpg';
import teacher6Img from '../img_data/teachers/glasses6.jpg';

const teachersList = [
  {
    "id": "teacher1",
    "name": "Aisha Khan",
    "image": teacher1Img,
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
"image": teacher2Img,
    "contact": { // Contact property is present and is an object
      "email": "rohan.ahmed@email.com", // email property is present
      "phone": "+8801922334455"      // phone property is present
    },

  },
  {
    "id": "teacher3",
    "name": "Sumaya Khan",
    "image": teacher3Img,
    "contact": {
      "email": "sumaya.khan@email.com",
      "phone": "+8801711223344"
    }
  },
  {
    "id": "teacher4",
    "name": "Faisal Rahman",
    "image": teacher4Img,
    "contact": {
      "email": "faisal.rahman@email.com",
      "phone": "+8801833445566"
    }
  },
  {
    "id": "teacher5",
    "name": "Sara Ahmed",
    "image": teacher5Img,
    "contact": {
      "email": "random@mail.com",
      "phone": "+8801922334455"
    }
  },
  {
    "id": "teacher6",
    "name": "Zahid Hasan",
    "image": teacher6Img,
    "contact": {
      "email": "zahid.hasan@email.com",
      "phone": "+8801755667788"
    }
  },
  // ... Ensure ALL teacher objects have the 'contact' object with 'email' and 'phone'
];

export default teachersList;