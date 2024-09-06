import styled from "styled-components";

const OurComp = () => {
  return (
    <BLOCK>
      <DIVS>
        <IMG src="assets/image//d4.png" alt="" />
        <ROMB>
          <H1>Подбор компьютера по цене, графической карте или центральному процессору</H1>
          <P>ПК ДЛЯ ГЕЙМИНГА Amin store</P>
          <BUTTON onClick={addPlayng}>ИГРОВЫЕ КОМПЬЮТЕРЫ</BUTTON>
        </ROMB>
      </DIVS>
    </BLOCK>
  );
};

export default OurComp;

const BLOCK = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 40px;
  box-sizing: border-box;
`;

const DIVS = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 40px;
  background-image: url('https://s3-alpha-sig.figma.com/img/e810/5608/e308229e95acadb3c44b2addb5406878?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R0F78ryEf7cagArlCwgTHtSOcDVJxSAvjxLuRyBwbfnos-wTRuFPVKpIAGF9y29VSkxjtwcke5mfkoipgJKMnvT~xPD8l3Jgnn92gS1ob7Tfz6tYzzG0sQllqiWEqqbxZW~WtcE3QwBtiGZSAs6f26k7kpDYcHEysE5jryl4G-kncs8lBGXMf5GkoliFFno-5cK1x8mwSfLDUc-ivILlZ06KwuMHWfY1l-hRynuy5XZ1M41q1lWQY8dpxHAPGuY6Cf0Eg4rf4s~mmGehrwPf0ZqouxSPc62e-0i7kG97Jtpkl6Dcs~yQE5XSXLCLgPDuc4vGZrNBPzjpIABl-L60FQ__');


  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ROMB = styled.div`
  text-align: center;
  margin: 20px 0;

  @media (max-width: 768px) {
    order: 2;
  }
`;

const IMG = styled.img`
  max-width: 100%;
  width: 100%;
  height: auto;
  margin: 20px 0;

  @media (min-width: 768px) {
    width: 50%;
    margin: 0;
  }
`;

const H1 = styled.h1`
  font-size: clamp(16px, 4vw, 32px);
  line-height: 1.2;
  color: rgba(255, 255, 255, 1);

  @media (max-width: 768px) {
    order: -1;
    margin-bottom: 20px;
  }
`;

const P = styled.p`
  font-size: clamp(10px, 2.5vw, 22px);
  color: rgba(132, 144, 164, 1);
  padding:30px 0;
`;

const BUTTON = styled.button`
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

const addPlayng = () => {
  alert('hello!');
};
