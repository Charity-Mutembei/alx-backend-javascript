export default function guardrail(mathFunction) {
  let valueReturned;
  const queue = [];

  try {
    valueReturned = mathFunction();
    queue.push(valueReturned);
  } catch (error) {
    valueReturned = error.toString();
    queue.push(valueReturned);
  } finally {
    queue.push('Guardrail was processed');
  }

  return queue;
}
