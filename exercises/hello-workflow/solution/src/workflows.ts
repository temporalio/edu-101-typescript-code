/** A workflow that simply calls an activity */
export async function example(name: string): Promise<string> {
  return `Hello, ${name}!`;
}