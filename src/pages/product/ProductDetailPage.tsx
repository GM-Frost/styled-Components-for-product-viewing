import React, { useEffect, useState } from 'react'; // Import useState
import { useGetAllProductDetailsQuery } from '../../service/product/index';
import Card from '../../components/Card';

interface IProductDEtail {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
}

const ProductDetailPage = () => {
  const [product, setProduct] = useState<IProductDEtail | null>(null); // Use useState

  const { data, error } = useGetAllProductDetailsQuery(2);

  useEffect(() => {
    if (data) {
      setProduct(data); // Set the product data if the query was successful
    }
    if (error) {
      // Handle error if needed
    }
  }, [data, error]);

  return (
    <div>
      {product && (
        <Card
          image={product.image}
          title={product.title}
          description={product.description}
          category={product.category}
          price={product.price}
        />
      )}
    </div>
  );
};

export default ProductDetailPage;
