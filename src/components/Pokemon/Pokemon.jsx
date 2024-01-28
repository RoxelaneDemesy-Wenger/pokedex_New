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
            <div className="cardHeader">
              <span className="card_header_item">Braségali</span>
              <span className="card_header_item"> No. 0257</span>
            </div>
          </CardHeader>
          <CardMeta>
            <span className="type">Feu</span>
            <span className="type">Combat</span>
          </CardMeta>
          <CardDescription>
            <p className="catégorie">Pokémon Ardent</p>
            <p className="region">Hoen</p>
          </CardDescription>
        </CardContent>
        <Menu />
      </Card>
    </div>
  );
}

export default Pokemon;
