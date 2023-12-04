import getListStudents from './0-get_list_students';

export default function updateStudentGradeByCity (city, newGrades) {
  const students = getListStudents(); // Assuming getListStudents is defined

  return students
    .filter(student => student.location === city)
    .map(student => {
      const gradeObject = newGrades.find(grade => grade.studentId === student.id);
      const grade = gradeObject ? gradeObject.grade : 'N/A';
      return { ...student, grade };
    });
}
