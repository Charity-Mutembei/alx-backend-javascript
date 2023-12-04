function getListStudentIds(students) {
    /*Check if the input is an array*/
    if (!Array.isArray(students)) {
        return [];
    }

    /*Use the map function to extract ids*/
    return students.map(student => student.id);
}

export default getListStudentIds;