import Card from "../../components/Card";
import { useGetAllProductsQuery } from "../../service/product/index";
import { ProductStyleMain } from "../styles/productStyle";

interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
}

const ProductListPage = () => {
  const { data } = useGetAllProductsQuery();

  return (
    <ProductStyleMain>
      {data?.map((product: IProduct) => (
        <div key={product.id}>
          <Card
            image={product.image}
            title={product.title}
            description={product.description}
            category={product.category}
            price={product.price}
            id={product.id}
          />
        </div>
      ))}
    </ProductStyleMain>
  );
};

export default ProductListPage;
