
import express from "npm:express@4.18.2";
import getpersonaje from "./resolver/getpersonaje.ts";
import getlocation from "./resolver/getlocation.ts";
import carcaterespe from "./resolver/caracterespe.ts";
import locaespe from "./resolver/locaespe.ts";
import filter_s_g from "./resolver/filtrer_status_genre.ts";

/*
 He usado como referencia el github de programacion de nebrija: https://github.com/Nebrija-Programacion/web-backend/blob/master/ejemplos/apirest-rickymorty/main.ts
*/

const myapp= express();

myapp.get("/personajes",getpersonaje);

myapp.get("/localizacion",getlocation);

myapp.get("/character/:id",carcaterespe);

myapp.get("/location/:id",locaespe);

myapp.get("/character/?status=statu&gender=gen",filter_s_g);

myapp.listen(4000);
