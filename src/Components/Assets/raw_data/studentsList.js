// studentsList.js

import student1Img from '../img_data/students/student.jpg';
import student2Img from '../img_data/students/student2.jpg';
import student3Img from '../img_data/students/student3.jpg';
import student4Img from '../img_data/students/student4.jpg';
import student5Img from '../img_data/students/student5.jpg';
import student6Img from '../img_data/students/student6.png';

const studentsList = [
  {
      "id": "student1",
      "name": "Anika Rahman",
      "address": "21 Elephant Road, Dhaka",
      "school": "Viqarunnisa Noon School and College",
      "gradeLevel": "10",
      "subjectsOfInterest": ["Mathematics", "Physics"],
      "contact": {
          "email": "anika.rahman@student.com",
          "phone": "+8801311445566"
      },
      "image": student1Img,
      "learningGoals": "Improving grades in Math and Physics, preparing for upcoming exams."
  },
  {
      "id": "student2",
      "name": "Rafiul Islam",
      "address": "45 Segunbagicha, Dhaka",
      "school": "Dhaka Residential Model College",
      "gradeLevel": "12",
      "subjectsOfInterest": ["Computer Science", "Programming"],
      "contact": {
          "email": "rafiul.islam@student.com",
          "phone": "+8801422556677"
      },
      "image": student2Img,
      "learningGoals": "Learning web development with React, building personal projects for portfolio."
  },
  {
      "id": "student3",
      "name": "Zara Khan",
      "address": "67 Bashundhara R/A, Dhaka",
      "school": "Scholastica",
      "gradeLevel": "6",
      "subjectsOfInterest": ["English", "Bengali"],
      "contact": {
          "email": "zara.khan@student.com",
          "phone": "+8801733667788"
      },
      "image": student3Img,
      "learningGoals": "Improving English grammar and Bengali writing skills."
  },
  {
      "id": "student4",
      "name": "Taqi Ahmed",
      "address": "89 Nikunja, Dhaka",
      "school": "Adamjee Cantonment College",
      "gradeLevel": "College - 1st Year",
      "subjectsOfInterest": ["Economics", "Accounting"],
      "contact": {
          "email": "taqi.ahmed@student.com",
          "phone": "+8801944778899"
      },
      "image": student4Img,
      "learningGoals": "Need help with introductory economics and accounting courses at the college level."
  },
  {
      "id": "student5",
      "name": "Nayla Hossain",
      "address": "100 Motijheel, Dhaka",
      "school": "Holy Cross Girls' High School",
      "gradeLevel": "8",
      "subjectsOfInterest": ["Biology", "Chemistry"],
      "contact": {
          "email": "nayla.hossain@student.com",
          "phone": "+8801655889900"
      },
      "image": student5Img,
      "learningGoals": "Want to get ahead in science subjects and build a strong foundation for high school."
  }
  ,
  {
    "id": "student6",
    "name": "Farhan Ahmed",
    "address": "123 Gulshan Avenue, Dhaka",
    "school": "Maple Leaf International School",
    "gradeLevel": "9",
    "subjectsOfInterest": ["History", "Geography"],
    "contact": {
      "email": "farhan.ahmed@student.com",
      "phone": "+8801766778899"
    },
    "image": student6Img,
    "learningGoals": "Enhancing knowledge in History and Geography, preparing for O-level exams."
  }
];

export default studentsList;