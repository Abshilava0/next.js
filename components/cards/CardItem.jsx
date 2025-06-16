import classes from './cards.module.css';

export default function Card(props) {
  return (
    <div className={classes.card}>
      <div>
        <img src={props.image} className={classes.image} />
      </div>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}