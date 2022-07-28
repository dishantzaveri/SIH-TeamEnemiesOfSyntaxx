// import axios from 'axios';
/** Loads the register information of the user*/
export const registerMentee = newStudent => {
  return 
//   axios
//     .post('api/students/register', {
//       first_name: newStudent.first_name,
//       last_name: newStudent.last_name,
//       contact: newStudent.contact,
//       password: newStudent.password,
//       location: newStudent.location,
//       age: newStudent.age,
//       email: newStudent.email,
//       education: newStudent.education
//     })
//     .then(res => {
//       console.log('Student: ' + newStudent.email + ' registered!');
//       return res.status;
//     })
//     .catch(err => {
//       console.log(err);
//     });
};
/** Sends the information to the api to validate and create a token**/
export const loginMentee = student => {
  return 
//   axios
//     .post('api/students/login', {
//       email: student.email,
//       password: student.password
//     })
//     .then(res => {
//       localStorage.setItem('studentToken', res.data);
//       console.log('Student: ' + student.email + ' logged in!');
//       return res.status;
//     })
//     .catch(err => {
//       console.log(err);
//     });
};

export const registerMentor = newTeacher => {
  return 
//   axios
//     .post('api/teachers/register', {
//       first_name: newTeacher.first_name,
//       last_name: newTeacher.last_name,
//       contact: newTeacher.contact,
//       password: newTeacher.password,
//       location: newTeacher.location,
//       age: newTeacher.age,
//       email: newTeacher.email,
//       education: newTeacher.education,
//       biography: newTeacher.biography,
//       fields: newTeacher.fields,
//       methodology: newTeacher.methodology,
//       reviews: newTeacher.reviews
//     })
//     .then(res => {
//       console.log('Teacher: ' + newTeacher.email + ' registered!');
//       console.log(res.status);
//       return res.status;
//     })
//     .catch(err => {
//       console.log(err);
//     });
};

export const loginMentor = teacher => {
  return 
//   axios
//     .post('api/teachers/login', {
//       email: teacher.email,
//       password: teacher.password
//     })
//     .then(res => {
//       localStorage.setItem('teacherToken', res.data);
//       console.log('Teacher: ' + teacher.email + ' logged in!');
//       return res.status;
//     })
//     .catch(err => {
//       console.log(err);
//     });
};
