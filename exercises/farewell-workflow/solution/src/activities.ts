import axios from 'axios';

export async function getSpanishGreeting(name: string): Promise<void>{
  await axios.post('http://localhost:9999/get-spanish-greeting?name=', { name }); 
}

export async function getSpanishFarewell(name: string): Promise<void>{
  await axios.post('http://localhost:9999/get-spanish-farewell?name=', { name }); 
}