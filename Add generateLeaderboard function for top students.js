function generateLeaderboard(students) {
  if (!Array.isArray(students)) {
    return "Invalid";
  }

  if (students.length === 0) {
    return "Invalid";
  }

  for (let i = 0; i < students.length; i++) {
    const student = students[i];

    if (typeof student!== "object" || student === null || Array.isArray(student) || !("name" in student) || !("score" in student) ||
      typeof student.score !== "number"
    ) {
      return "Invalid";
    }
  }

  const qualified = students.filter(function (student) {
    return student.score >= 70;
  });

  const names = qualified.map(function (student) {
    return student.name.toUpperCase();
  });

  return names.slice(0, 3);
}
