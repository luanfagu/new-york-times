import React from "react";
import { Button, Modal } from "react-bootstrap";
import { NewsType } from "../../types/news";

export interface NewsModalProps {
  visible: boolean;
  activeNews: NewsType | undefined;
  handleModalHide: Function;
}

export interface NewsModalState {
  visible: boolean;
}

class NewsModal extends React.Component<NewsModalProps, NewsModalState> {
  constructor(props: NewsModalProps) {
    super(props);
    this.state = { visible: false };
  }



  render() {
    return (
      <Modal show={ this.state.visible } onHide={this.props.handleModalHide}>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default NewsModal;

// function NewsModal() {
//   return (
//     <Modal.Dialog>
//       <Modal.Header closeButton>
//         <Modal.Title>Modal title</Modal.Title>
//       </Modal.Header>

//       <Modal.Body>
//         <p>Modal body text goes here.</p>
//       </Modal.Body>

//       <Modal.Footer>
//         <Button variant="secondary">Close</Button>
//         <Button variant="primary">Save changes</Button>
//       </Modal.Footer>
//     </Modal.Dialog>
//   );
// }

// export default NewsModal;
