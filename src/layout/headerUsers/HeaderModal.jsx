import PropTypes from "prop-types";
import styled from "styled-components";

const HeaderModal = ({ children, isVisible }) => {
  if (!isVisible) return null;
  return <ModalWrapper>{children}</ModalWrapper>;
};

HeaderModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
}

export default HeaderModal;

const ModalWrapper = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  padding-right:30px;
  background-color: #1C232E;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 10;
  white-space: nowrap;
  font-size: 14px;
`;
