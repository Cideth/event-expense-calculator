'use client'
import { Button, Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import Content from "@/layout/content";
import Headers from "@/layout/header";

export default function NestedFolder() {
  // 서버단 
  axios.get("/").then(e => {console.log(e)}).catch(e => {console.error(e)});
  
  return (
    <>   
    
     <Headers/>
  
    <Content>
      <Container>
        <Row>
          <Col>
            <h1 className="text-danger fw-bold">Home</h1>
            <Button variant="primary" className="mt-5  ">Click Me</Button>
          </Col>
        </Row>
      </Container>
    </Content>
    </>
  );
}

