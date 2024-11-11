import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PopupBox = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  min-width: 300px;
`;

export const Button = styled.button`
  margin-top: 20px;
  background-color: #4caf50;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
