import{ useDispatch, useSelector } from "react-redux";
import{ addItem, removeItem } from "./redux/slice";
import{ useEffect } from "react";
import{ fetchProducts } from "./redux/productSlice";

const Product = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const productSelector = useSelector((state) => state.products.items);
  console.log(productSelector);

const cartSelector=useSelector((state)=>state.cart.items);
  console.log(cartSelector.length);

  return (
      <div className="grid">
        {productSelector.length > 0 &&
          productSelector.map((item) => (
          <div className="card" key={item.id}>
            {item.thumbnail && (
              <img src={item.thumbnail} alt={item.title} />
                )}
            <div className="content">
              <div className="title">{item.title}</div>
              <div className="brand">{item.brand}</div>
              <div className="price">${item.price}</div>
              <div className="rating">⭐ {item.rating}</div>
                {
                  cartSelector.find((cartItem) => cartItem.id === item.id) ? (
                    <button className="btn remove-btn"
                     onClick={() => dispatch(removeItem(item))}
                     
                    >
                      Remove from Cart
                    </button>
                  ) : (
                    <button className="btn"
                      onClick={() => dispatch(addItem(item))}
                    >
                      Add to Cart
                    </button>
                  )
                }
            </div>
          </div>
        ))}
    </div>
  );
};

export default Product;
