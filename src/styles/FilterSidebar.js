import styled from "styled-components";

export const Sidebar = styled.div`
  width: 200px;
  padding: 20px;
  border: 1px solid #ddd;
  /* border-radius: 8px; */
  font-family: Arial, sans-serif;
  border-left: none;
  border-right: none;
`;

export const Section = styled.div`
  margin-bottom: 20px;
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
`;

export const SectionContent = styled.div`
  margin-top: 10px;
  display: ${(props) => (props.isOpen ? "block" : "none")};
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  font-size: 0.9rem;
  cursor: pointer;
`;

export const Checkbox = styled.input`
  margin-right: 8px;
`;

export const SeeAll = styled.div`
  color: #e91e63;
  font-size: 0.9rem;
  cursor: pointer;
`;

export const StarRating = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  color: #ff9800;
`;
