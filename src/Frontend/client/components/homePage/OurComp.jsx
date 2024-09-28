import styled from "styled-components";

const OurComp = () => {
  const handleButtonClick = () => {
    alert('Игровые компьютеры!');
  };
  return <Container>
    <ContentWrapper>
      <ComputerImage src="assets/image/OurComp.png" alt="OurComp" />
        <InfoSection>
          <Title>Подбор компьютера по цене, графической карте или центральному процессору</Title>
          <Description>ПК ДЛЯ ГЕЙМИНГА Amin store</Description>
          <ActionButton onClick={handleButtonClick}>ИГРОВЫЕ КОМПЬЮТЕРЫ</ActionButton>
        </InfoSection>
      </ContentWrapper>
    </Container>
  };

export default OurComp;


const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 40px;
  box-sizing: border-box;
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 40px;
  background-image: url(/assets/image/OurCompImg.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  object-fit: cover;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const InfoSection = styled.div`
  text-align: center;
  margin: 20px 0;

  @media (max-width: 768px) {
    order: 2;
  }
`;

const ComputerImage = styled.img`
  max-width: 100%;
  width: 100%;
  height: auto;
  margin: 20px 0;
  
  @media (min-width: 768px) {
    width: 50%;
    margin: 0;
  }
`;

const Title = styled.h1`
  font-size: clamp(16px, 4vw, 32px);
  line-height: 1.2;
  color: rgba(255, 255, 255, 1);

  @media (max-width: 768px) {
    order: -1;
    margin-bottom: 20px;
  }
`;

const Description = styled.p`
  font-size: clamp(10px, 2.5vw, 22px);
  color: rgba(132, 144, 164, 1);
  padding: 30px 0;
`;

const ActionButton = styled.button`
  color: rgba(11, 19, 43, 1);
  background: rgba(73, 220, 255, 1);
  width: 242px;
  height: 56px;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 10px;
  transition: background 0.3s, transform 0.3s;

  &:hover {
    background: gray;
    transform: scale(1.1);
  }
`;
