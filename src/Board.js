import React from "react";
import initialBoardContent from "./InitialBoardContent";
import { DragDropContext } from "react-beautiful-dnd";
import HeaderNav from "./components/HeaderNav";
import List from "./components/List";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialBoardContent;
  }
  onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    const { state } = this;
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = state.lists[source.droppableId];
    const finish = state.lists[destination.droppableId];

    if (start === finish) {
      const newCardIds = Array.from(start.cardIds);
      newCardIds.splice(source.index, 1);
      newCardIds.splice(destination.index, 0, draggableId);

      const newList = {
        ...start,
        cardIds: newCardIds,
      };

      const newState = {
        ...state,
        lists: {
          ...state.lists,
          [newList.id]: newList,
        },
      };

      this.setState(newState);
      return;
    }
    // Moving between lists

    const startCardIds = Array.from(start.cardIds);
    startCardIds.splice(source.index, 1);
    const newStart = {
      ...start,
      cardIds: startCardIds,
    };

    const finishCardIds = Array.from(finish.cardIds);
    finishCardIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      cardIds: finishCardIds,
    };

    const newState = {
      ...state,
      lists: {
        ...state.lists,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };
    this.setState(newState);
  };

  render() {
    return (
      <div className="Board">
        <div className="h-screen overflow-hidden flex items-center justify-center">
          <div className="bg-blue w-full h-screen font-sans">
            <HeaderNav />
            <div className="flex m-4 justify-between">
              <div className="flex">
                <h3 className="text-white mr-4">Kanban board</h3>
              </div>
              <div className="text-white font-sm hidden md:flex items-center hover:underline cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 text-white mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <p>Add List</p>
              </div>
            </div>
            <div className="flex px-4 pb-8 items-start overflow-auto">
              <DragDropContext onDragEnd={this.onDragEnd}>
                {this.state.listOrder.map((listId) => {
                  const list = this.state.lists[listId];
                  const cards = list.cardIds.map(
                    (cardId) => this.state.cards[cardId]
                  );
                  return <List key={list.id} list={list} cards={cards}></List>;
                })}
              </DragDropContext>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Board;
