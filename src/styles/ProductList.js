import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: 20px 5%;
  flex-direction: column;
`;

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 120px;
  gap: 0px;
  border-radius: 20px;
  opacity: 0px;
  background: #ec4e1e;
`;

export const MiniHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 55px;
  gap: 0px;
  opacity: 0px;
  outline: none;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

export const MiniHeaderText = styled.h2`
  display: flex;
  font-size: 24px;
  font-weight: 600;
  line-height: 28.44px;
  margin-left: 15px;
`;

export const SideBarContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export const InnerConatiner = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 20px;
`;

export const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 8px;
  flex-direction: column;
`;

export const HeaderText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 35px;
  font-weight: 500;
  line-height: 20px;
  color: white;
`;

export const FiltersContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`;

export const Select = styled.select`
  width: 25%;
  padding: 2px 20px;
  font-size: 1rem;
  height: 40px;
  margin-right: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  outline: none;
`;

export const Loading = styled.div`
  font-size: 1.5rem;
  text-align: center;
`;

export const ProductCardContainer = styled.div`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
  width: 100%;
`;
