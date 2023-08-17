import styled from "styled-components";

export const ProductStyleMain = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;

  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;

export const CardDiv = styled.div`
  width: 24rem;
  height: 30rem;
  border-radius: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
  padding: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Image = styled.img`
  max-width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  object-fit: cover;
  cursor: pointer;
`;

export const CardTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

export const CardText = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
`;

export const CardActions = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.button`
  background-color: #007bff;
  color: white;
  display: flex;
  border: none;
  border-radius: 0.25rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  margin-top: 20px;
  bottom: 10px;
  text-align: center;
  align-items: center;
  justify-content: center;
  left: 50%;
  transform: translateX(-50%);
`;
