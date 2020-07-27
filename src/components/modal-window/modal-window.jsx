import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '../button';
import { CloseIcon } from '../../svg';

const ModalWindow = ({
  title, children, width, isOpen, onCancel, onSubmit, submitBtnLabel, className,
}) => {
  const handleKeyPress = (event) => {
    if (event.key === 'Escape') {
      onCancel();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress, false);

    return function () {
      document.removeEventListener('keydown', handleKeyPress, false);
    };
  });

  const clazz = isOpen ? 'modal-window-wrapper active' : 'modal-window-wrapper';

  const modalWindowClass = classNames(
    'modal-window',
    className,
  );

  const styles = {
    maxWidth: `${width}px`,
  };

  return (
    <div className={clazz}>
      <div className="overlay" onClick={onCancel} />
      <div className={modalWindowClass} style={styles}>
        <div className="modal-window__header">
          <h2>{title}</h2>
          <Button variant="icon" classname="modal-window__close-btn" onClick={onCancel}>
            <CloseIcon />
          </Button>
        </div>
        <div className="modal-window__body">
          {children}
        </div>
        <div className="modal-window__footer">
          <Button
            variant="solid"
            color="purple"
            size="large"
            fullWidth
            onClick={onSubmit}
          >
            {submitBtnLabel}
          </Button>
          <Button
            variant="outlined"
            color="purple"
            size="large"
            fullWidth
            onClick={onCancel}
          >
            Отменить
          </Button>
        </div>
      </div>
    </div>
  );
};

ModalWindow.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  width: PropTypes.number,
  isOpen: PropTypes.bool,
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func,
  submitBtnLabel: PropTypes.string,
};

ModalWindow.defaultProps = {
  title: 'Всплывающее окно',
  isOpen: false,
  onCancel() {},
  onSubmit() {},
  submitBtnLabel: 'Отправить',
};

export default ModalWindow;
