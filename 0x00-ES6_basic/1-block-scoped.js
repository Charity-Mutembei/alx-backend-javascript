export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    /* eslint-disable no-unused-vars*/
    const task = true;
    /* eslint-disable no-unused-vars*/
    const task2 = false;
  }

  return [task, task2];
}
