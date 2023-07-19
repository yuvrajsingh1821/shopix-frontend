import "./SingleProduct.scss";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaPinterest,
    FaCartPlus,
} from "react-icons/fa";
import RelatedProducts from "./RelatedProducts/RelatedProducts"
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useReducer, useState, useContext } from "react";
import { Context } from "../../utils/context";

const SingleProduct = () => {
    const { id } = useParams();
    const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`);
    const { handleAddToCart } = useContext(Context);
    console.log(data);

    const [quantity, setQuantity] = useState(1);

    const decreaseQuantity = () =>{
        if(quantity > 0){
           setQuantity(quantity-1);
        }
    }
    const increaseQuantity = () =>{
       setQuantity(quantity+1)
    }
    const product = data?.data?.[0]?.attributes;
    return(
         <div className="single-product-main-content">
            <div className="layout">
                <div className="single-product-page">
                    <div className="left">
                        <img src={data?.data?.[0]?.attributes?.img?.data?.[0]?.attributes?.url} alt=""/>
                    </div>
                    <div className="right">
                        <p className="name">{data?.data?.[0]?.attributes?.title}</p>
                        <p className="price">&#8377;{data?.data?.[0]?.attributes?.price}</p>
                        <p className="desc">{data?.data?.[0]?.attributes?.desc}</p>

                        <div className="cart-buttons">
                            <div className="quantity-buttons">
                                <span onClick={decreaseQuantity}>-</span>
                                <span>{quantity}</span>
                                <span onClick={increaseQuantity}>+</span>
                            </div>
                            <button className="add-to-cart-button" onClick={() => {
                                handleAddToCart(data.data[0], quantity);
                                setQuantity(1);
                            }}>
                                <FaCartPlus />
                                ADD TO CART
                            </button>
                        </div>

                        <div className="divider"></div>

                        <div className="info-item">
                            <div className="text-bold">
                              <span>Category:</span>
                              <span>{data?.data?.[0]?.attributes?.categories?.data?.[0]?.attributes?.title}</span>
                            </div>
                            
                            <div className="text-bold">
                              <span>Share:</span>
                              <span className="social-icons">
                                   <FaFacebookF /> 
                                   <FaInstagram />
                                   <FaTwitter />
                                   <FaLinkedinIn />
                                   <FaPinterest />
                              </span>
                            </div>
                        </div>
                    </div>
                </div>

                <RelatedProducts productId = {id} categoryId = {data?.data?.[0]?.attributes?.categories?.data?.[0]?.id} />
            </div>

    </div>
    );
};

export default SingleProduct;
