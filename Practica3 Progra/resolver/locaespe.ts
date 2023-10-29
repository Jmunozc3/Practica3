
import { Request, Response } from "npm:express@4.18.2";

//creamos la estructura de la localizacion donde introducimos el tipo de cada variable
type Location = {
    ID: number;
    Name: string;
    Type: string;
    Dimension: string;
    Created: string;
};

const locaespe = async (req: Request, res: Response) => {

    const id = req.params.id;

    const response = await fetch(`https://rickandmortyapi.com/api/location/${id}`); //link de la api

    if (response.status !== 200) {
      res.status(response.status).send(response.statusText);
      return;
    }

    const data = await response.json();
    
   // creamos un objeto con la información de cada localizacion
    const location = {
      ID: data.id,
      Name: data.name,
      Type: data.type,
      Dimension: data.Dimension,
      Created: data.created,
    };

    res.send(location); //enviamos la respuesta
};
export default locaespe;