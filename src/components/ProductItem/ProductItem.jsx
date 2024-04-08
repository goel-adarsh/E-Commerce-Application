import classes from './ProductItem.module.css';

export default function ProductItem({ item }) {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.top}>
          <img src={item.thumbnail} alt={item.title} />
        </div>
        <div className={classes.bottom}>
          <h1>{item.title}</h1>
          <p>${item.price}</p>
        </div>
      </div>
    </>
  );
}
