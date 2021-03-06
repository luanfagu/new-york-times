import React from "react";
import { Button, Modal } from "react-bootstrap";
import { NewsType } from "../../types/news";

export interface NewsModalProps {
  visible: boolean;
  selectedNews: NewsType | undefined;
  handleModalHide: Function;
}
class NewsModal extends React.Component<NewsModalProps, {}> {
  render() {
    const {visible, handleModalHide, selectedNews} = this.props;
    return (
      <Modal show={ visible } onHide={handleModalHide}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedNews?.title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>{selectedNews?.abstract}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button href={selectedNews?.url} variant="primary" role="btn">Read more...</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default NewsModal;