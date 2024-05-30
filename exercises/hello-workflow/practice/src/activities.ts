export async function greet(name: string): Promise<string> {
  throw new Error('hi')
  return `Hello, ${name}!`;
}
