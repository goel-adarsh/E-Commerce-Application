import './ProductItem.css';

export default function ProductItem({ item }) {
  return (
    <>
      <div className="container">
        <div className="top">
          <img src={item.thumbnail} alt={item.title} />
        </div>
        <div className="bottom">
          <h1>{item.title}</h1>
          <p>${item.price}</p>
        </div>
      </div>
    </>
  );
}
