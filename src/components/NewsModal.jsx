import React from "react";
import { Modal, Button } from "react-bootstrap";

function NewsModal({ news, onClose }) {
  return (
    <Modal show={true} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{news.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div dangerouslySetInnerHTML={{ __html: news.full }} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Закрити
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default NewsModal;
