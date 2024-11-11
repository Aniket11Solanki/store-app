import styled from "styled-components";

export const Sidebar = styled.div`
  padding: 20px;
  border: 1px solid #ddd;
  font-family: Arial, sans-serif;
  border-left: none;
  border-right: none;
  width: 100%;
  box-sizing: border-box; /* Ensures padding doesn't affect width */

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

export const Section = styled.div`
  margin-bottom: 20px;

  @media (max-width: 768px) {
    margin-bottom: 15px;
  }
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    flex-direction: column; /* Stacks the title and icon vertically on small screens */
    align-items: flex-start;
  }
`;

export const SectionContent = styled.div`
  margin-top: 10px;
  display: ${(props) => (props.isOpen ? "block" : "none")};

  @media (max-width: 768px) {
    margin-top: 8px;
  }
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  font-size: 0.9rem;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 0.8rem; /* Slightly smaller font on mobile */
    margin-bottom: 6px; /* Less spacing on mobile */
  }
`;

export const Checkbox = styled.input`
  margin-right: 8px;

  @media (max-width: 768px) {
    margin-right: 6px; /* Reduce space on mobile */
  }
`;

export const SeeAll = styled.div`
  color: #e91e63;
  font-size: 0.9rem;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 0.8rem; /* Smaller font on mobile */
  }
`;

export const StarRating = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  color: #ff9800;

  @media (max-width: 768px) {
    font-size: 1rem; /* Adjust font size on smaller screens */
  }
`;
