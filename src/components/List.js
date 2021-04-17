import React from "react";
import { Droppable } from "react-beautiful-dnd";
import Card from "./Card";

const CardList = React.memo(function CardList({ cards }) {
  return cards.map((card, index) => (
    <Card key={card.id} index={index} data={card} />
  ));
});

function List(props) {
  return (
    <div className="rounded bg-grey-light flex-no-shrink w-64 p-2 mr-3">
      <div className="flex justify-between py-1">
        <h3 className="text-sm">{props.list.title}</h3>
        <svg
          className="h-4 fill-current text-grey-dark cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M5 10a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4z" />
        </svg>
      </div>

      <Droppable droppableId={props.list.id}>
        {(provided, snapshot) => (
          <div
            className={`${
              snapshot.isDraggingOver ? "bg-orange" : ""
            } text-sm mt-2 `}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <CardList cards={props.cards} />
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      <button
        onClick={() => props.addAction("card", props.list.id)}
        className=" text-sm inline-flex w-100 justify-between p-2 text-grey-dark rounded mt-1 cursor-pointer hover:bg-grey-lighter"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
        <p>Add a card...</p>
      </button>
    </div>
  );
}
export default List;
