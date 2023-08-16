interface CardProps {
    id?: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating?: {
      rate: number;
      count: number;
    };
  }
  
  const Card: React.FC<CardProps> = ({
    image,
    title,
    description,
    category,
    price,
  }) => {
    return (
      <div>
        <img src={image} alt={title}  />
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
          <p>{category}</p>
          <p>${price}</p>
        </div>
        <button>
          Buy
        </button>
      </div>
  
    );
  };
  
  export default Card;