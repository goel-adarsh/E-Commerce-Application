import classes from './ProductDetailsCard.module.css';

export default function ProductDetailsCard({
  productDetail,
  currentImage,
  handleCurrentImage,
}) {
  return (
    <div className={classes.card}>
      <div className={classes.imageBox}>
        <img
          src={currentImage || productDetail.images?.[0]}
          alt={productDetail.title}
        />

        <ul>
          {productDetail.images?.map((image, index) => (
            <li key={index}>
              <img
                className={classes.imageAlbum}
                src={image}
                alt={`Image ${index}`}
                onClick={() => handleCurrentImage(image)}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className={classes.details}>
        <div className={classes.content}>
          <h2 className={classes.title}>{productDetail.title}</h2>
          <span>{productDetail.category} </span>
          <span className={classes.by}>by</span>
          <h1 className={classes.brand}>{productDetail.brand}</h1>
          <span className={classes.rating}>{productDetail.rating}⭐</span>
          <p className={classes.description}>{productDetail.description}</p>
          <h3 className={classes.discountedPrice}>
            ${' '}
            {Math.round(
              ((100 - Number(productDetail.discountPercentage)) / 100) *
                productDetail.price
            )}
          </h3>
          <h6 className={classes.price}>M.R.P.-$ {productDetail.price}</h6>
          <h3 className={classes.discountedPercentage}>
            -{productDetail.discountPercentage}%
          </h3>
          <button>Buy Now</button>
        </div>
      </div>
    </div>
  );
}
