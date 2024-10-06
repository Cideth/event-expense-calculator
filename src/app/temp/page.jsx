'use client'
import {
  Container,
  Row,
  Col,
  Navbar,
  Button,
  Card,
  ListGroup,
} from "react-bootstrap";
import {
  FaMapPin,
  FaDollarSign,
  FaUsers,
  FaPlus,
  FaBell,
} from "react-icons/fa";

const MeetingExpenseApp = () => {
  return (
    <Container fluid className="p-0 bg-light vh-100 d-flex flex-column">
      {/* Top Bar */}
      <Navbar bg="primary" variant="dark" className="p-3">
        <Container>
          <Navbar.Brand>모임 정산</Navbar.Brand>
          <FaBell size={24} />
        </Container>
      </Navbar>

      {/* Cost Summary */}
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

      {/* Timeline Feed */}
      <div className="flex-grow-1 overflow-auto p-3">
        <ListGroup>
          <TimelineItem
            icon={<FaMapPin />}
            text="장소 변경: 명동 맛집"
            time="14:30"
          />
          <TimelineItem
            icon={<FaDollarSign />}
            text="비용 추가: 식사 ￦100,000"
            time="15:15"
          />
          <TimelineItem icon={<FaUsers />} text="김철수 참석" time="15:30" />
          {/* More timeline items */}
        </ListGroup>
      </div>

      {/* Quick Action Buttons */}
      <Card className="m-3">
        <Card.Body className="d-flex justify-content-around">
          <QuickActionButton icon={<FaDollarSign />} text="비용 추가" />
          <QuickActionButton icon={<FaMapPin />} text="장소 변경" />
          <QuickActionButton icon={<FaUsers />} text="참석자 관리" />
          <QuickActionButton icon={<FaPlus />} text="기타" />
        </Card.Body>
      </Card>
    </Container>
  );
};

const TimelineItem = ({ icon, text, time }) => (
  <ListGroup.Item className="d-flex align-items-start">
    <div className="bg-primary text-white p-2 rounded-circle me-3">{icon}</div>
    <div>
      <p className="mb-1 fw-bold">{text}</p>
      <p className="mb-0 text-muted small">{time}</p>
    </div>
  </ListGroup.Item>
);

const QuickActionButton = ({ icon, text }) => (
  <div className="text-center">
    <Button variant="outline-secondary" className="rounded-circle p-3 mb-2">
      {icon}
    </Button>
    <div className="small">{text}</div>
  </div>
);

export default MeetingExpenseApp;
