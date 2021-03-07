import React from "react";
import { Button, Modal } from "react-bootstrap";
import { NewsType } from "../../types/news";

import './modal.scss';

export interface NewsModalProps {
  visible: boolean;
  selectedNews: NewsType | undefined;
  handleModalHide: Function;
}
class NewsModal extends React.Component<NewsModalProps, {}> {
  render() {
    const {visible, handleModalHide, selectedNews} = this.props;
    return (
      <Modal show={ visible } onHide={handleModalHide} dialogClassName="modal-dialog">
        <Modal.Header closeButton>
          <Modal.Title>{selectedNews?.title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img src={selectedNews?.multimedia[0]?.url} className="modal-img" role="img" alt=""/>
          <p>{selectedNews?.abstract}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button href={selectedNews?.url} target="blank" variant="info" role="btn">Read more...</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default NewsModal;