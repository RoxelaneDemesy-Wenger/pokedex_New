// eslint-disable-next-line no-unused-vars
import React from 'react';
import {
  CardMeta,
  CardHeader,
  CardDescription,
  CardContent,
  Card,
  Icon,
  Image,
  Button,
} from 'semantic-ui-react';

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
        <CardContent extra>
          <Button>
            <Icon name="plus" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default Pokemon;
