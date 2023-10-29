import { Request, Response } from "npm:express@4.18.2";

//creamos la estructura de la character donde introducimos el tipo de cada variable
export type Character = {
  Id: number;
  Name: string;
  Status: string;
  Species: string;
  Gender: string;
  Origin: string;
  Location: string;
  Created: string;
};

const getCharacter = async (req: Request, res: Response) => {
  
    const id = req.params.id;

    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);//link de la api

    if (response.status !== 200) {
      res.status(response.status).send(response.statusText);
      return;
    }

    const data = await response.json();

    //aqui hemos credo un objeto con las variables que queremos obtener de el
    const charater = {
      ID: data.id,
      Name: data.name,
      Status: data.status,
      Species: data.species,
      Gender: data.gender,
      Origin: data.origin.name,
      Location: data.location.name,
      Created: data.created,
    };

    res.send(charater);//enviamos la respuesta
  
};
export default getCharacter;