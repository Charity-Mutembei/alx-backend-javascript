export default function createIteratorObject(report) {
  const IteratorObject = [];

  for (const value of Object.values(report.Employees)) {
    IteratorObject.push(...value);
  }

  return IteratorObject;
}
