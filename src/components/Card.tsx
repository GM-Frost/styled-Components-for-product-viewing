import { styled } from "styled-components";

import { useState } from "react";
import {
  Image,
  CardDiv,
  CardTitle,
  CardText,
  CardActions,
  Button,
  ProductStyleMain,
} from "../pages/styles/productStyle";
import Modal from "./Modal";

interface CardProps {
  id: number;
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
  id,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <CardDiv>
        <Image src={image} alt={title} onClick={openModal} />
        <CardTitle>{title}</CardTitle>
        <CardText>$&nbsp;{price}</CardText>
        <CardActions>
          <Button>
            <a href={`productdetails/${id}`}>View Product</a>
          </Button>
        </CardActions>
      </CardDiv>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        description={description}
        image={image}
      >
        <CardText>{description}</CardText>
        <Button onClick={closeModal}>Close</Button>
      </Modal>
    </>
  );
};

export default Card;
