import { useEffect, useState } from "react";
import Item from "../Item";
import Title from "../Title";

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
      <label>Busca en la web: </label>
      <input type="text" onChange={(e) => setsearchParam(e.target.value)} />
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

// const SearchApi = ()=> {
//     const [items, setItems] = useState([]);
//     const [searchParam, setsearchParam] = useState(['cascos shaft']);

//     useEffect(()=>{
//         fetch(`https://api.mercadolibre.com/sites/MCO/search?q=${searchParam}`)
//         .then(res=> res.json.parse())
//         .then(data=> setItems(data.results.slice(0,30)));
//     }, [setsearchParam]) ;

//     return(
//         <>
//             <Title heading="h1" text="¡Busca a tu manera!"/>
//             <label>Busca en la web: </label>
//             <input type="text" onChange={(e)=> setsearchParam(e.target.value)}/>
//             <main className="item-container">
//             {items.map(item => <Item title={item.title} price={item.price} img={item.thumbnail} link={item.permalink} condition={item.condition} type='primary' />)}
//             </main>

//         </>
//     )

//     ;
// };

export default SearchApi;
