// import React from 'react';
import {
  CardMeta,
  CardHeader,
  CardDescription,
  CardContent,
  Card,
  Image,
} from 'semantic-ui-react';
import Menu from './Menu/Menu';

function Pokemon() {
  return (
    <div className="card">
      <Card>
        <Image src="/public/451px-Braségali-RS.png" wrapped ui={false} />
        <CardContent>
          <CardHeader>
            <span>Braségali</span>
            <p className="number"> No. 0257</p>
          </CardHeader>
          <CardMeta>
            <span className="type">Feu</span>
            <span className="type">Combat</span>
          </CardMeta>
          <CardDescription>
            <span className="catégorie">Pokémon Ardent</span>
            <p className="region">Hoen</p>
          </CardDescription>
        </CardContent>
        <Menu />
      </Card>
    </div>
  );
}

export default Pokemon;
