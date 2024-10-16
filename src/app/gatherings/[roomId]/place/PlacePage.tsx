"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Button } from "react-bootstrap";

interface PlaceData {
  id: string;
  ord: number;
  placeName: string;
  isVisited: boolean;
}

const reorder = (
  list: PlaceData[],
  startIndex: number,
  endIndex: number
): PlaceData[] => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

export default function PlacePage() {
  const [places, setPlaces] = useState<PlaceData[]>([
    {
      id: "11",
      ord: 0,
      placeName: "장소1",
      isVisited: true,
    },
    {
      id: "21",
      ord: 1,
      placeName: "장소2",
      isVisited: true,
    },
  ]);
  const [placeName, setPlaceName] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPlaceName(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (placeName.trim() === "") return;
    // 추후 비동기 통신을 통해 변경 예정
    const newPlace = {
      id: (places.length + 1).toString(),
      placeName,
      isVisited: false,
      ord: places.length,
    };

    setPlaces((prev) => [...prev, newPlace]);
    setPlaceName("");
  };

  const onDragEnd = (result: any) => {
    const isVisitedDestination = result.destination.index;

    if (places[isVisitedDestination].isVisited) {
      console.warn(
        "이미 지나간 장소 또는 진행중인 장소의 순서 변경은 불가능합니다."
      );
      return;
    }
    if (!result.destination) {
      return;
    }

    const reorderedPlaces = reorder(
      places,
      result.source.index,
      result.destination.index
    );
    reorderedPlaces.forEach((place, index) => {
      place.ord = index;
    });
    setPlaces(reorderedPlaces);
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">장소 관리</h1>

      {/* Form to add a new place */}
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="장소명 입력"
            value={placeName}
            onChange={handleInputChange}
            required
          />
          <button className="btn btn-primary" type="submit">
            추가
          </button>
        </div>
      </form>

      {/* Drag and drop list */}
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="placesList">
          {(provided) => (
            <ul
              className="list-group"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {places.map((place, index) => (
                <Draggable
                  draggableId={place.id}
                  isDragDisabled={place.isVisited}
                  key={place.id}
                  index={place.ord}
                >
                  {(provided) => (
                    <li
                      className={
                        (place.isVisited ? "bg-light" : "") +
                        " list-group-item d-flex justify-content-between align-items-center"
                      }
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <span className="badge bg-secondary">
                        순서 {index + 1}
                      </span>
                      {place.placeName}
                      <Button disabled={place.isVisited}>삭제</Button>
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
