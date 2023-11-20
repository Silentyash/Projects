import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DummyProducts = [
  {
    id: "p1",
    price: 6,
    title: "My First Book",
    description: "the first book i ever wrote",
  },
  {
    id: "p2",
    price: 3,
    title: "My second Book",
    description: "the second book i ever wrote",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DummyProducts.map((product)=>{
          return(
          <ProductItem key={product.id}
            title={product.title}
            price={product.price}
            id={product.id}
            description={product.description}
            
          />);

        })}
        
      </ul>
    </section>
  );
};

export default Products;
