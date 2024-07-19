export default function createIteratorObject(report) {
  const IteratorObject = [];

  for (const value of Object.values(report.allEmployees)) {
    IteratorObject.push(...value);
  }

  return IteratorObject;
}
