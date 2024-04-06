import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import './ProductDetails.css';

export default function ProductDetails() {
  let { productId } = useParams();
  // const [isFetchingg, setIsFetchingg] = useState(false);
  const [productDetail, setproductDetail] = useState({});
  // const [error, setError] = useState();

  useEffect(() => {
    async function fetchProducts() {
      // setIsFetchingg(true);
      try {
        const response = await fetch(
          `https://dummyjson.com/products/${productId}`
        );
        const responseData = await response.json();
        if (!response.ok) {
          throw new Error('Unable to load the products :(');
        }
        console.log(responseData);
        setproductDetail(responseData);
      } catch (error) {
        // setError({
        //   message: error.message || 'Unable to load the products :(',
        // });
      }
      // setIsFetchingg(false);
    }
    fetchProducts();
  }, []);

  return (
    <div class="card">
      <div class="imgBx">
        <img src={productDetail.images?.[0]} alt={productDetail.title} />
      </div>
      <div class="details">
        <div class="content">
          <h2>
            {productDetail.title}
            <br></br>
            <span>{productDetail.category}</span>
          </h2>
          <p>{productDetail.description}</p>

          <h3>Rs. 12,800</h3>
          <button>Buy Now</button>
        </div>
      </div>
    </div>
    // <div class="card">
    //   <div class="left-card">
    //     <img src={productDetail.images?.[0]} alt={productDetail.title} />
    //     {/* <i class="fa fa-long-arrow-left"></i> */}
    //     {/* <i class="fa fa-long-arrow-right"></i> */}
    //   </div>
    //   <div class="right">
    //     <div class="product-info">
    //       <div class="product-name">
    //         <h1>{productDetail.brand}</h1>
    //         <i class="fa fa-search"></i>
    //         <i class="fa fa-user"></i>
    //         <i class="fa fa-shopping-cart"></i>
    //       </div>
    //       <div class="details">
    //         <h3>{productDetail.category}</h3>
    //         <h2>{productDetail.title}</h2>
    //         <h4>
    //           <span class="fa fa-dollar"></span>150
    //         </h4>
    //         <h4 class="dis">
    //           <span class="fa fa-dollar"></span>${productDetail.price}
    //         </h4>
    //       </div>

    //       <span class="foot">
    //         <i class="fa fa-shopping-bag"></i>Buy Now
    //       </span>
    //       <span class="foot">
    //         <i class="fa fa-shopping-cart"></i>Add TO Cart
    //       </span>
    //     </div>
    //   </div>
    // </div>

    // <section className="producttt">
    //   <div className="product__photo">
    //     <div className="photo-container">
    //       <div className="photo-main">
    //         <div className="controls">
    //           <i className="material-icons">share</i>
    //           <i className="material-icons">favorite_border</i>
    //         </div>
    //         <img
    //           src="https://res.cloudinary.com/john-mantas/image/upload/v1537291846/codepen/delicious-apples/green-apple-with-slice.png"
    //           alt="green apple slice"
    //         />
    //       </div>
    //       <div className="photo-album">
    //         <ul>
    //           <li>
    //             <img
    //               src="https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png"
    //               alt="green apple"
    //             />
    //           </li>
    //           <li>
    //             <img
    //               src="https://res.cloudinary.com/john-mantas/image/upload/v1537303532/codepen/delicious-apples/half-apple.png"
    //               alt="half apple"
    //             />
    //           </li>
    //           <li>
    //             <img
    //               src="https://res.cloudinary.com/john-mantas/image/upload/v1537303160/codepen/delicious-apples/green-apple-flipped.png"
    //               alt="green apple"
    //             />
    //           </li>
    //           <li>
    //             <img
    //               src="https://res.cloudinary.com/john-mantas/image/upload/v1537303708/codepen/delicious-apples/apple-top.png"
    //               alt="apple top"
    //             />
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="product__info">
    //     <div className="title">
    //       <h1>{productDetail.title}</h1>
    //       <span>Product Id: {productDetail.id}</span>
    //     </div>
    //     <div className="price">
    //       $<span>{productDetail.price}</span>
    //     </div>
    //     <div className="variant">
    //       <h3>SELECT A COLOR</h3>
    //       <ul>
    //         <li>
    //           <img
    //             src="https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png"
    //             alt="green apple"
    //           />
    //         </li>
    //         <li>
    //           <img
    //             src="https://res.cloudinary.com/john-mantas/image/upload/v1537302752/codepen/delicious-apples/yellow-apple.png"
    //             alt="yellow apple"
    //           />
    //         </li>
    //         <li>
    //           <img
    //             src="https://res.cloudinary.com/john-mantas/image/upload/v1537302427/codepen/delicious-apples/orange-apple.png"
    //             alt="orange apple"
    //           />
    //         </li>
    //         <li>
    //           <img
    //             src="https://res.cloudinary.com/john-mantas/image/upload/v1537302285/codepen/delicious-apples/red-apple.png"
    //             alt="red apple"
    //           />
    //         </li>
    //       </ul>
    //     </div>
    //     <div className="description">
    //       <h3>BENEFITS</h3>
    //       <ul>
    //         <li>Apples are nutricious</li>
    //         <li>Apples may be good for weight loss</li>
    //         <li>Apples may be good for bone health</li>
    //         <li>They're linked to a lowest risk of diabetes</li>
    //       </ul>
    //     </div>
    //     <button className="buy--btn">ADD TO CART</button>
    //   </div>
    // </section>
  );
}
