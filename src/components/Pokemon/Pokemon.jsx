import {
  CardMeta,
  CardHeader,
  CardDescription,
  CardContent,
  Card,
  Image,
  Button,
} from 'semantic-ui-react';
import { useState } from 'react';
import Menu from './Menu/Menu';
import { v4 as uuidv4 } from 'uuid';

function Pokemon({ data }) {
  console.log('Data transmise à Menu :', data);

  const [currentSpriteIndex, setCurrentSpriteIndex] = useState(0);

  const handleNextSprite = () => {
    setCurrentSpriteIndex((prevIndex) => (prevIndex + 1) % data.sprites.length);
  };

  const handlePreviousSprite = () => {
    setCurrentSpriteIndex((prevIndex) =>
      prevIndex === 0 ? data.sprites.length - 1 : prevIndex - 1
    );
  };
  return (
    <div className="card">
      <Card>
        <Image
          src={data.sprites[currentSpriteIndex].regular}
          wrapped
          ui={false}
        />
        <CardContent>
          <CardHeader>
            <div className="cardHeader">
              <span className="card_header_item">{data.name.fr}</span>
              <span className="card_header_item"> No. {data.pokedexId}</span>
            </div>
          </CardHeader>
          <CardMeta>
            {data.types.map((type) => (
              <span className="type" key={type.name}>
                {type.image} {type.name}
              </span>
            ))}
          </CardMeta>
          <CardDescription>
            <p className="catégorie">{data.category}</p>
          </CardDescription>
        </CardContent>
        <Menu pokemon={data} />
      </Card>
      {/* Boutons de navigation du carrousel */}
      <div className="carousel-navigation">
        <Button icon="angle left" onClick={handlePreviousSprite} />
        <Button icon="angle right" onClick={handleNextSprite} />
      </div>
      {/* Mini carrousel des sprites */}
      <div className="mini-carousel">
        {data.sprites.map((sprite) => (
          <Image key={uuidv4()} src={sprite.regular} size="tiny" />
        ))}
      </div>
    </div>
  );
}

export default Pokemon;
