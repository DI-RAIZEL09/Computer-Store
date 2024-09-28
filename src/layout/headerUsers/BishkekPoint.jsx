import { useState } from "react";
import styled from "styled-components";
import Modal from "@mui/material/Modal";
import { LocationOn } from "@mui/icons-material";

const BishkekPoint = () => {
  const [isBishkekModalOpen, setIsBishkekModalOpen] = useState(false);

  const openBishkekModal = () => {
    setIsBishkekModalOpen(true);
  };

  const closeBishkekModal = () => {
    setIsBishkekModalOpen(false);
  };

  return (
    <>
      <Point onClick={openBishkekModal}>
        <LocationOn />
        <H4>Бишкек</H4>
      </Point>

      <Modal open={isBishkekModalOpen} onClose={closeBishkekModal}>
        <CenteredContainer>
          <BishkekModalContent>
            <H2>Выберите ваш город</H2>
            <P>
              Для отображения верной стоимости и сроков доставки укажите
              населенный пункт доставки в поле ниже
            </P>
            <Input type="text" placeholder="НАЧНИТЕ ВВОДИТЬ ВАШ ГОРОД" />
            <H3>Популярные города</H3>
            <City>
              <Li>Бишкек</Li>
              <Li>Талас</Li>
              <Li>Ош</Li>
              <Li>Иссык-куль</Li>
              <Li>Нарын</Li>
              <Li>Жалалабат</Li>
              <Li>Баткен</Li>
              <Li>Сокулук</Li>
              <Li>Кызыл-Адыр</Li>
              <Li>Кызыл-Адыр</Li>
              <Li>Каракуль</Li>
              <Li>Узген</Li>
              <Li>Бостери</Li>
              <Li>Кара-Балта</Li>
            </City>
            <CloseButton onClick={closeBishkekModal}>✕</CloseButton>
          </BishkekModalContent>
        </CenteredContainer>
      </Modal>
    </>
  );
};


export default BishkekPoint;


const Point = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 8px;
`;


const H4 = styled.h4`
  color: #49dcff;
  font-size: 30px;
  transition: color 0.3s ease;

  &:hover {
    color: #fff;
  }

  @media (max-width: 768px) {
    font-size: 25px;
  }

  @media (max-width: 390px) {
    font-size: 26px;
  }
`;
const City = styled.div`
display:grid;
grid-template-columns: 1fr 1fr 1fr;
color:#49dcff;
  @media (max-width: 650px) {
grid-template-columns: 1fr 1fr;
}
  @media (max-width: 480px) {
grid-template-columns: 1fr;
}
 
`;
const Li = styled.li`
    transition: color 0.3s ease;
    cursor:pointer;
    margin-bottom:10px;

  &:hover {
    color: #fff;
  }
`
const H3 = styled.h3`
  color: #5f697a;
  font-size: 20px;
  margin-bottom: 20px;

`;

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const H2 = styled.h2`
  color: white;
  font-size: 30px;
  margin-bottom: 20px;
`;
const P = styled.p`
  color: #8490a4;
  margin-bottom: 20px;
`;
const Input = styled.input`
  padding-left: 10px;
  border: 1px solid #626a77;
  background-color: #151a22;
  width: 800px;
  outline:none;
  color:#fff;
  height: 40px;
  margin-bottom: 20px;
  @media (max-width: 680px) {
    width: 450px;
  }
  @media (max-width: 498px) {
    width: 350px;
  }
  @media (max-width: 375px) {
    width: 250px;
  }
`;

const BishkekModalContent = styled.div`
  background: #1c232e;
  padding: 20px;
  width: 850px;
  position: relative;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    width: 700px;
  }
  @media (max-width: 768px) {
    width: 700px;
  }
  @media (max-width: 680px) {
    width: 500px;
  }
  @media (max-width: 498px) {
    width: 400px;
  }
  @media (max-width: 375px) {
    width: 300px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: #1c232e;
  border: none;
  color: #49dcff;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;
`;
