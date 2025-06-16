import Card from "./CardItem";
import classes from "./cards.module.css";

export default function CardsList(props) {
  return (
    <ul className={classes.ul}>
      {props.actors.map((actor) => (
        <li className={classes.li} key={actor.id}>
          <Card
            title={actor.title}
            id={actor.id}
            image={actor.image}
            description={actor.description}
          />
        </li>
      ))}
    </ul>
  );
}
