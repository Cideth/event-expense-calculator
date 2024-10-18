"use client";

import { headerLayoutState } from "@/state/atom";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { Button, Card, Container, ListGroup, Navbar } from "react-bootstrap";
import { useSetRecoilState } from "recoil";
import { costGroupTestData } from "../testdata";
import Link from "next/link";

interface CostGroupData {
  id: string;
  ord: number;
  placeName: string | null;
  totalCost: number;
}

export default function CostGroupPage() {
  const setHeaderLayoutState = useSetRecoilState(headerLayoutState);
  const pathName = usePathname();
  const backUrl = pathName.replace(/\/place$/, "");
  const [costGroup, setCostGroup] =
    useState<CostGroupData[]>(costGroupTestData);

  const totalCost = costGroup.reduce((acc, curr) => acc + curr.totalCost, 0);

  useEffect(() => {
    // 페이지가 로드되었을 때 헤더 상태 설정
    setHeaderLayoutState({
      backButtonUrlLink: backUrl,
      title: "비용 목록",
    });
  }, [setHeaderLayoutState]); // 의존성 배열에 상태 설정 함수 추가

  return (
    <Container className="container mt-5">
      <h1 className="mb-4">비용 목록</h1>

      <Card>
        <Card.Header className="d-flex">
          <div className="col-3 ">순서</div>
          <div className="col-4 text-center">장소</div>
          <div className="col-5 text-end">금액</div>
        </Card.Header>
        <ListGroup variant="flush">
          {costGroup.map((item, index) => (
            <ListGroup.Item key={index} style={{ cursor: "pointer" }}>
              <Link
                href={pathName + "/" + item.id}
                passHref
                className="d-flex justify-content-between align-items-center"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div className="col-3 ">
                  <span className="badge bg-secondary">{index + 1}</span>
                </div>
                <div className="col-4 text-center">
                  {item.placeName ?? "전체"}
                </div>
                <div className="col-5 text-end">{item.totalCost}</div>
              </Link>
            </ListGroup.Item>
          ))}
        </ListGroup>
        <Card.Footer>모임 비용 : {totalCost}</Card.Footer>
      </Card>
      <Navbar fixed="bottom" style={{ bottom: "10px" }}>
        <Container>
          <Link href={pathName + "/edit"} passHref className="w-100">
            <Button variant="primary" size="lg" className="w-100">
              비용 추가
            </Button>
          </Link>
        </Container>
      </Navbar>
    </Container>
  );
}
