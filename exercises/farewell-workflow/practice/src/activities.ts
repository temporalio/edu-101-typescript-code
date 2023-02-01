import axios from 'axios';

const url = 'http://localhost:9999';

export async function getSpanishGreeting(name: string): Promise<string>{
  const response = await axios.get(`${url}/get-spanish-greeting?name=${name}`);

  return response.data;
}

export async function getSpanishFarewell(name: string): Promise<string>{
  const response = await axios.get(`${url}//get-spanish-farwell?name=${name}`);
  
  return response.data;
}

// TODO: write an Activity function that calls the microservice to
// get a farewell message in Spanish. It will be identical to the
// function above, except the path in the URL called by axios will be "get-spanish-farewell". 


