/* eslint-disable react/button-has-type */
import { ListItem, List, Button } from 'semantic-ui-react';
import './Menu.scss';

function Menu() {
  return (
    <List className="menu">
      <ListItem className="li_btn_more">
        <Button content="+" className="btn_more" />
      </ListItem>
      <div className="li_content">
        <ListItem className="li">
          <p>taille: 1,9 m</p>
        </ListItem>
        <ListItem className="li">
          <p>poids: 52 kg</p>
        </ListItem>
        <ListItem className="li">
          <p>taux de capture: 45</p>
        </ListItem>
        <ListItem className="li">
          <p>couleur: rouge</p>
        </ListItem>
        <ListItem className="li">
          <p>localisation: inconnu</p>
        </ListItem>
        <ListItem className="li">
          <p>1ère forme: Poussifeu</p>
        </ListItem>
        <ListItem className="li">
          <p>2ème forme: Galifeu</p>
        </ListItem>
        <ListItem className="li">
          <p>Méga-Evolution</p>
        </ListItem>
      </div>
    </List>
  );
}

export default Menu;
