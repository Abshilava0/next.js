import CardsList from "./CardsList";
import classes from './cards.module.css';

export default function CardPage() {
  
  const DUMMY_CARDS = [
    {
      id: "c1",
      title: "Jack Nicholson",
      image: "/jack.jpg",
      description: 'Jack Nicholson (born April 22, 1937) is an American actor and filmmaker.',
    },
    {
      id: "c2",
      title: "Silvester Stallone",
      image: "/stalone.jpg",
      description: 'Sylvester Enzio Stallone (born Michael Sylvester Gardenzio Stallone; July 6, 1946).',
    },
    {
      id: "c3",
      title: "Morgan Freeman",
      image: "/morgan.jpg",
      description: 'Morgan Freeman (born June 1, 1937) is an American actor, film director, and narrator.',
    },
    
    {
      id: "c4",
      title: "James Stewart",
      image: "/someone.jpg",
      description: 'James Stewart (May 20, 1908 – July 2, 1997) was an American actor and military officer.',
    },
  ];

  return <div className={classes.actors}>
    <CardsList actors={DUMMY_CARDS}/>
  </div>
}