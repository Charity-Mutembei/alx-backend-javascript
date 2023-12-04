// import { getListStudents } from './0-get_list_students.js';

export default function updateStudentGradeByCity (studentsArray, city, newGrades) {
  const students = studentsArray;

  return students
    .filter(student => student.location === city)
    .map(student => {
      const gradeObject = newGrades.find(grade => grade.studentId === student.id);
      const grade = gradeObject ? gradeObject.grade : 'N/A';
      return { ...student, grade };
    });
}
