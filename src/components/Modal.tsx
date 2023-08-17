import styled from "styled-components";
import { CardText, Image } from "../pages/styles/productStyle";

const ModalOverlay = styled.div`
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 0.5rem;
  max-width: 80%;
`;

const ModalCloseButton = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  font-size: 1.5rem;
  cursor: pointer;
  color: white;
  font-weight: bold;
`;

const Modal = ({ isOpen, onClose, children, description, image }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalCloseButton onClick={onClose}>×</ModalCloseButton>
        <Image src={image} />
        <CardText>{description}</CardText>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
