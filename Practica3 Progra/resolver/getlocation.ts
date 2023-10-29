import type { Request, Response } from "npm:express@4.18.2";

const getlocation = async (req: Request, res: Response): Promise<void> => {
  //consegumos el numero que hemos introducido en el localhost, en este caso el numero de la pagina que solicitamos ver
  const pagina = parseInt(req.query.page);

  const response = await fetch(`https://rickandmortyapi.com/api/location/?page=${pagina}`);//link de la api
  //el ?page= lo usamos para conseguir la informacion de cada pagina

  if (response.status !== 200) {
    throw new Error("Cannot fetch characters");
  }
  const data = await response.json();

  //hacemos un map para conseguir solo el nombre de las localizaciones
  const location = data.results.map((location) => ({
  name: location.name,
  }));
  
  res.send(location);//enviamos la respuesta
};
export default getlocation;