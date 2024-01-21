import { FunctionComponent } from "react";
import { Modal } from "antd";
import BasicButton from "../buttons/BasicButton";

interface BasicModalProps {
  title?: string | JSX.Element;
  open: boolean;
  onOk?: () => void;
  onCancel?: () => void;
  buttonText?: string;
  children: string | JSX.Element;
  className?: string;
  hasOkButton?: boolean;
  footer?: JSX.Element | null;
}

const BasicModal: FunctionComponent<BasicModalProps> = ({
  title,
  open,
  onOk,
  onCancel,
  buttonText,
  children,
  className = "",
  footer = (
    <div className="d-flex justify-content-center">
      {onOk && (
        <BasicButton variant="primary" text={buttonText} onClick={onOk} />
      )}
    </div>
  ),
}) => {
  return (
    <Modal
      centered
      title={title}
      open={open}
      onOk={onOk}
      onCancel={onCancel}
      className={className}
      footer={footer}
      closable={!!onCancel}
    >
      {children}
    </Modal>
  );
};

export default BasicModal;
