import {
  CardMeta,
  CardHeader,
  CardDescription,
  CardContent,
  Card,
  Image,
} from 'semantic-ui-react';
import Menu from './Menu/Menu';

function Pokemon({ data }) {
  return (
    <div className="card">
      <Card>
        <Image src={data.sprites.regular} wrapped ui={false} />
        <CardContent>
          <CardHeader>
            <div className="cardHeader">
              <span className="card_header_item">{data.name.fr}</span>
              <span className="card_header_item">No. {data.pokedexId}</span>
            </div>
          </CardHeader>
          <CardMeta>
            {data.types.map((type) => (
              <span className="type" key={type.name}>
                {type.name}
              </span>
            ))}
          </CardMeta>
          <CardDescription>
            <p className="category">{data.category}</p>
          </CardDescription>
        </CardContent>
        <Menu />
      </Card>
    </div>
  );
}

export default Pokemon;
