import { useState } from 'react';
import { ListItem, List, Button } from 'semantic-ui-react';
// import { useDispatch } from 'react-redux';
import './Menu.scss';

function Menu({ pokemon }) {
  const clonedPokemon = { ...pokemon };

  // Créer un état local pour suivre si le bouton a été cliqué ou non
  const [isContentVisible, setContentVisible] = useState(false);

  // const dispatch = useDispatch(); // Dispatch Redux
  // Fonction pour basculer la visibilité du contenu

  const toggleContentVisibility = () => {
    setContentVisible(!isContentVisible);
    // par défaut on affiche pas le contenu de la liste pour ça !isContentVisible

    // dispatch(scrollToList(maListeRef.current));
  };

  return (
    <List className="menu">
      <ListItem className="li_btn_more">
        {/* Utiliser onClick pour détecter le clic sur le bouton et appeler la fonction pour basculer la visibilité */}
        <Button
          content="+"
          className="btn_more"
          onClick={toggleContentVisibility}
        />
      </ListItem>
      {/* Ajouter la classe hidden conditionnellement en fonction de l'état */}
      <div className={`li_content ${isContentVisible ? '' : 'hidden'}`}>
        <ListItem className="li">
          <p>taille: {clonedPokemon.height}</p>
        </ListItem>
        <ListItem className="li">
          <p>poids: {clonedPokemon.weight}</p>
        </ListItem>
        <ListItem className="li">
          <p>taux de capture: {clonedPokemon.catch_rate}</p>
        </ListItem>
        <ListItem className="li">
          <p>couleur: rouge</p>
        </ListItem>
        <ListItem className="li">
          <p>localisation: inconnu</p>
        </ListItem>
        <ListItem className="li">
          <p>1ère forme: {clonedPokemon.evolution?.pre[0]?.name}</p>
        </ListItem>
        <ListItem className="li">
          <p>2ème forme: {clonedPokemon.evolution?.pre[1]?.name}</p>
        </ListItem>
        <ListItem className="li">
          <p>Méga-Evolution</p>
        </ListItem>
      </div>
    </List>
  );
}

export default Menu;
