import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: 20px 5%;
  flex-direction: column;

  @media (max-width: 768px) {
    margin: 10px 2%;
  }

  @media (max-width: 480px) {
    margin: 5px 2%;
  }
`;

export const TopConatiner = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 120px;
  gap: 0;
  border-radius: 20px;
  background: #ec4e1e;
  opacity: 0.9;

  @media (max-width: 768px) {
    height: 100px;
  }

  @media (max-width: 480px) {
    height: 80px;
  }
`;

export const MiniHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 55px;
  gap: 0;
  outline: none;
  border: 1px solid #ddd;
  border-radius: 5px;
  opacity: 1;

  @media (max-width: 768px) {
    height: 45px;
  }

  @media (max-width: 480px) {
    height: 40px;
  }
`;

export const MiniHeaderText = styled.h2`
  font-size: 24px;
  font-weight: 600;
  line-height: 28.44px;
  margin-left: 15px;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const SideBarContainer = styled.div`
  display: flex;
  gap: 8px;
  width: 200px;

  @media (max-width: 768px) {
    width: 150px;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const InnerConatiner = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }

  @media (max-width: 480px) {
    gap: 5px;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  width: 82%;
  gap: 8px;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
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

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

export const FiltersContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    margin: 10px 0;
  }

  @media (max-width: 480px) {
    margin: 5px 0;
  }
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

  @media (max-width: 768px) {
    width: 45%;
  }

  @media (max-width: 480px) {
    width: 100%;
    margin-right: 0;
  }
`;

export const Loading = styled.div`
  font-size: 1.5rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const ProductCardContainer = styled.div`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    gap: 10px;
  }

  @media (max-width: 480px) {
    gap: 5px;
  }
`;
