import Title from "../Title";
import "./index.css";
import Counter from "../Counter";

const DetailProduct = ({ title, price, id, category, img, link, type }) => {
  return (
    <>
      <section className="main">
        <picture>
        <img className="img-art" src={img} alt="" />
        </picture>
        <article
          onClick={() => navigate(`/Detail/${id}`)}
          className='detail-art'>
          <Title heading="h4" className="card-title" text={title} />
          <p className="art-price">Precio: {price}</p>
          <p className="art-category">Categoria: {category}</p>
          <Counter/>
          <button className="button-add">Agregar al carrito</button>
        </article>
      </section>
    </>
  );
};

export default DetailProduct;

{
  /* <section className="main">
<picture>
<img className="img" src={img} alt="" />
</picture>
<article className={`card card--${type}`}>
    <Title heading="h4" className="card-title" text={title} />
    <p className="card-price">Precio: {price}</p>
    <p>Categoria: {category}</p>
    <a className="card-link" href={link}>
    Ir al producto
    </a>
</article>
</section> */
}
