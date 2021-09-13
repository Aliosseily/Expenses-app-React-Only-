
import './Card.css'
function Card(props) {
  // this is to combine card string classNme with all classNames strings inside card component
  const classes = "card " + props.className;
  return (
    // props.children means all the content inside card component. it is a reserved key for props
    <div className={classes}>{props.children}</div>
  );
}

export default Card;


