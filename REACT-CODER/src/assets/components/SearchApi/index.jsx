import { useEffect, useState } from "react";
import Item from "../Item";
import Title from "../Title";
import "./index.css";

const SearchApi = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((data) => {
        setItems(data.slice(0, 20));
      });
  }, []);

  return (
    <>
      <Title heading="h1" text="¡Busca a tu manera!" />
      <div className="container-label">
        <label className="label-store">Busca en la web: </label>
        <input className="input-store" type="text" onChange={(e) => setsearchParam(e.target.value)} />
      </div>

      <main className="item-container">
        {items.map((item, i) => (
          <Item
            id={item.id}
            key={`item.id-${i}`}
            title={item.title}
            price={item.price}
            img={item.image}
            link={item.permalink}
            category={item.category}
            type="primary"
          />
        ))}
      </main>
    </>
  );
};

export default SearchApi;
