import styled from "styled-components";

export const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  margin: 10px;
  width: 250px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 10px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DiscountTag = styled.div`
  background-color: #ff5722;
  color: white;
  padding: 4px 8px;
  border-top-left-radius: 7px;
  border-bottom-right-radius: 7px;
  font-weight: bold;
  font-size: 0.9rem;
`;

export const WishlistIcon = styled.div`
  margin-right: 10px;
  font-size: 1.2rem;
  color: #ccc;
  cursor: pointer;
`;

export const CardContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  justify-content: space-between;
  height: 100%;
`;

export const CardBottomContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;
  height: 130px;
`;

export const Image = styled.img`
  max-width: 100px;
  height: 130px;
`;

export const Title = styled.div`
  font-size: 1rem;
  color: #333;
  font-weight: 500;
  flex: 1;
  margin: 10px 0;
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const CurrentPrice = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
`;

export const OriginalPrice = styled.span`
  font-size: 1rem;
  color: #888;
  text-decoration: line-through;
`;

export const DiscountPercentage = styled.span`
  font-size: 0.9rem;
  color: #4caf50;
  font-weight: bold;
`;

export const AddToCartButton = styled.button`
  background-color: #ff5722;
  color: white;
  padding: 10px 16px;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  font-size: 1rem;
  width: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 10px;
`;

export const Badge = styled.div`
  color: white;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 0.8rem;
`;
