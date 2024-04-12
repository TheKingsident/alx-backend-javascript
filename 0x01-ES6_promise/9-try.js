export default function guardrail(mathFunction) {
  const queue = [];
  try {
    queue.push(mathFunction());
  } catch (error) {
    queue.push('Error: cannot divide by 0');
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
