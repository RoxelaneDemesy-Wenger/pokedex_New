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
import { v4 as uuidv4 } from 'uuid';
import Menu from './Menu/Menu';

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

  // Vérifier si data.sprites est défini et contient des éléments
  if (!data.sprites || data.sprites.length === 0) {
    return <div>Aucun sprite disponible</div>;
  }

  // Vérifier si currentSpriteIndex est dans la plage valide des indices de data.sprites
  if (currentSpriteIndex < 0 || currentSpriteIndex >= data.sprites.length) {
    return <div>Index de sprite invalide</div>;
  }

  return (
    <div className="card">
      <Card>
        {/* Image du carrousel de sprites ci dessous: */}
        {/* Boutons de navigation du carrousel */}
        <div className="carousel-navigation">
          <Button icon="angle left" onClick={handlePreviousSprite} />
          <Image
            src={data.sprites[currentSpriteIndex]?.regular || 'URL_PAR_DEFAUT'}
            wrapped
            ui={false}
          />
          <Button icon="angle right" onClick={handleNextSprite} />
        </div>
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
      {/* Mini carrousel des sprites */}
      <div className="mini-carousel">
        {Array.isArray(data.sprites) &&
          data.sprites.map((sprite) => (
            <Image key={uuidv4()} src={sprite.regular} size="tiny" />
          ))}
      </div>
    </div>
  );
}

export default Pokemon;
