"use client";
import { Row, Col, Card } from "react-bootstrap";

export default function CostSummary() {
  return (
    <Card className="m-3 shadow-sm">
      <Card.Body>
        <Row>
          <Col>
            <h5>총 비용:</h5>
          </Col>
          <Col className="text-end">
            <h4>￦150,000</h4>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col>
            <p>1인당 예상:</p>
          </Col>
          <Col className="text-end">
            <h6>￦30,000</h6>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
