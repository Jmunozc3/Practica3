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

const filter_s_g = async (req: Request, res: Response) => {

    //Cogemos en 2 strings el status y el gender
    
    const status = req.params.status;
    const gender=req.params.gender;

    const response = await fetch(`https://rickandmortyapi.com/api/character/?status=${status}&gender=${gender}`);// link de la api

    if (response.status !== 200) {
      res.status(response.status).send(response.statusText);
      return;
    }

    const data = await response.json();

    // creamos un objeto con la información de cada caracter
    const character = {
      ID: data.id,
      Name: data.name,
      Status: data.status,
      Species: data.species,
      Gender: data.gender,
      Origin: data.origin.name,
      Location: data.location.name,
      Created: data.created,
    };

    res.send(character);//enviamos la respuesta
};
export default filter_s_g;