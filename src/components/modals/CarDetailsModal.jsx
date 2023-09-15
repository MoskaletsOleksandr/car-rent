import PropTypes from 'prop-types';
import { Modal } from 'components/common/Modal';
import { ContentWrapper, Title } from './CarDetailsModal.styled';

export const CarDetailsModal = ({ closeModal }) => {
  return (
    <Modal onClose={closeModal}>
      <ContentWrapper>
        <Title>Do you want to rent this car?</Title>
      </ContentWrapper>
    </Modal>
  );
};

CarDetailsModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
};
