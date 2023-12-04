export default function getStudentsByLocation (students, city) {
  // Use the filter function to get students in the specified city
  return students.filter(student => student.location === city);
}
