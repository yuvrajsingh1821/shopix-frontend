import { MdClose } from "react-icons/md";
import "./Search.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";

import prod from "../../../assets/products/earbuds-prod-1.webp";

const Search = ({setShowSearch}) => {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();
    const onChange = (e) => {
         setQuery(e.target.value);
    }

    let {data} = useFetch(`/api/products?populate=*&filters[title][$contains]=${query}`)

    if(!query.length){
        data = null;
    }

    return <div className="search-modal">
        <div className="form-field">
            <input type="text" autoFocus placeholder="Search for Products" value={query} onChange={onChange}/>
            <MdClose onClick={() => setShowSearch(false)} />
        </div>

        <div className="search-results">
            {data?.data?.map(item =>(
             <div key={item.id} className="search-item" onClick={() => {
                navigate("/product/" + item.id);
                setShowSearch(false);
                }}>
                <div className="img-container">
                  <img src={process.env.REACT_APP_DEV_URL + item.attributes.img.data[0].attributes.url} alt="" />
                </div>

                <div className="prod-details">
                    <p className="name">{item.attributes.title}</p>
                    <p className="desc">{item.attributes.desc}</p>
                </div>
             </div>
                    
            ))}
        </div>
    </div>;
};

export default Search;
