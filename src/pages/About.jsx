// ====== src/components/About.jsx ======
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function About() {
  return (
    <section className="bg-light py-5 border-top border-secondary-subtle">
      <Container>
        <Row className="mb-4">
          <Col>
            <h2 className="text-primary fw-bold text-center mb-3">Про портал бібліотеки</h2>
            <p className="text-center lead mx-auto" style={{ maxWidth: '800px' }}>
              Інформаційний портал бібліотеки <strong>Національного університету "Полтавська політехніка імені Юрія Кондратюка"</strong>
              створений для зручної взаємодії студентів, викладачів та бібліотекарів.
            </p>
          </Col>
        </Row>
        <Row className="g-4">
          <Col md={6}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title className="text-secondary">📚 Основні можливості</Card.Title>
                <ul className="list-unstyled">
                  <li>✔️ Перегляд останніх новин бібліотеки</li>
                  <li>✔️ Галерея подій та заходів</li>
                  <li>✔️ Інтерактивна карта з контактами</li>
                  <li>✔️ Мобільна та десктопна адаптивність</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title className="text-secondary">🔧 Технології розробки</Card.Title>
                <ul className="list-unstyled">
                  <li>💡 HTML5, CSS3 (Flexbox, Grid, Media Queries)</li>
                  <li>⚛️ React.js, React Router</li>
                  <li>🎨 Bootstrap 5</li>
                  <li>🔁 jQuery + jQueryUI</li>
                  <li>🗺️ Google Maps API</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <p className="text-muted text-center" style={{ maxWidth: '900px', margin: '0 auto' }}>
              Портал поєднує сучасні веб-технології з потребами освітнього процесу, забезпечує швидкий доступ до інформації
              та сприяє популяризації бібліотечних ресурсів серед молоді.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
