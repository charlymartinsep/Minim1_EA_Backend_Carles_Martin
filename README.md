# Backend per a la Gestió de Cates de Vins

Aquest projecte és la part del backend per a la gestió de les cates de vins. Els usuaris poden registrar les seves experiències de cata i deixar comentaris sobre elles. Aquest sistema està dissenyat per permetre que els usuaris (anomenats **WineLovers**) comparteixin les seves opinions i experiències relacionades amb les cates de vins realitzades.

## Noves Funcionalitats: Col·lecció de Comentaris

### Descripció de la Col·lecció `comentaris`

S'ha creat una nova col·lecció a la base de dades anomenada `comentaris`. Aquesta col·lecció permet emmagatzemar els comentaris realitzats pels usuaris sobre les experiències de cata de vins.

#### Atributs de la Col·lecció `comentaris`:

- **`texto`**: (Tipus: `String`)
  - El text del comentari que deixa l'usuari sobre l'experiència de cata.
  
- **`autor`**: (Tipus: `ObjectId`, Referència a `WineLover`)
  - L'autor del comentari és un usuari de la plataforma, al qual anomenem **WineLover**.
  - **Relació**: L'`autor` fa referència a l'ID de l'usuari a la col·lecció `users`.

- **`fecha`**: (Tipus: `Date`)
  - La data i hora en què es va crear el comentari.

#### Relació entre Comentaris i Experiències

- Cada **experiència** de cata pot tenir **múltiples comentaris** associats. Això permet que els usuaris comparteixin diferents punts de vista sobre la mateixa experiència de cata.
- Els comentaris són emmagatzemats independentment, però cada comentari té una referència a l'experiència en què va ser realitzat, de manera que podem recuperar els comentaris de cada experiència en particular.

