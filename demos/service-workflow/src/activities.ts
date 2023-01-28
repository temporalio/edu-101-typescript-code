import axios from 'axios';

export async function getSpanishGreeting(name: string): Promise<string>{
  const response = await axios.get(`http://localhost:9999/get-spanish-greeting?name=${name}`)

  return response.data
}


export async function getSpanishFarewell(name: string): Promise<string>{
  const response = await axios.get(`http://localhost:9999/get-spanish-farwell?name=${name}`)
  
  return response.data
}