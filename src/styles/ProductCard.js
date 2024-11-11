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
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 100%; /* Ensure the card takes full width on smaller screens */
    margin: 10px 0; /* Reduce margins on mobile */
  }

  @media (max-width: 480px) {
    width: 100%;
    margin: 5px 0;
  }
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

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const WishlistIcon = styled.div`
  margin-right: 10px;
  font-size: 1.2rem;
  color: #ccc;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 1rem; /* Reduce icon size for smaller screens */
  }
`;

export const CardContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  justify-content: space-between;
  height: 100%;

  @media (max-width: 768px) {
    padding: 12px; /* Adjust padding on mobile */
  }
`;

export const CardBottomContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    gap: 8px; /* Reduce the gap between elements on mobile */
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;
  height: 130px;

  @media (max-width: 768px) {
    height: 100px; /* Adjust image size on mobile */
  }

  @media (max-width: 480px) {
    height: 80px; /* Further adjust image size on very small screens */
  }
`;

export const Image = styled.img`
  max-width: 100px;
  height: 130px;

  @media (max-width: 768px) {
    max-width: 80px; /* Reduce image width for tablets */
    height: 100px; /* Adjust height on smaller screens */
  }

  @media (max-width: 480px) {
    max-width: 70px;
    height: 80px;
  }
`;

export const Title = styled.div`
  font-size: 1rem;
  color: #333;
  font-weight: 500;
  flex: 1;
  margin: 10px 0;

  @media (max-width: 768px) {
    font-size: 0.9rem; /* Smaller font for mobile */
    margin: 8px 0; /* Adjust margins for mobile */
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
    margin: 6px 0;
  }
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    gap: 8px; /* Reduce gap for mobile */
  }

  @media (max-width: 480px) {
    gap: 6px;
  }
`;

export const CurrentPrice = styled.span`
  font-size: 1.2rem;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 1rem; /* Adjust font size for mobile */
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const OriginalPrice = styled.span`
  font-size: 1rem;
  color: #888;
  text-decoration: line-through;

  @media (max-width: 768px) {
    font-size: 0.9rem; /* Smaller font for mobile */
  }
`;

export const DiscountPercentage = styled.span`
  font-size: 0.9rem;
  color: #4caf50;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
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

  @media (max-width: 768px) {
    font-size: 0.9rem; /* Smaller font for mobile */
    padding: 8px 14px; /* Adjust padding for mobile */
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 6px 12px;
  }
`;

export const Badge = styled.img`
  /* color: white;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 0.8rem; */

  @media (max-width: 768px) {
    font-size: 0.7rem; /* Smaller font on mobile */
    padding: 2px 6px; /* Adjust padding on mobile */
  }
`;
