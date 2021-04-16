import React from "react";
import initialBoardContent from "./InitialBoardContent";
import HeaderNav from "./components/HeaderNav";
import List from "./components/List";

function Board() {
  const [state, setState] = React.useState(initialBoardContent);

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
            {state.listOrder.map((listId) => {
              const list = state.lists[listId];
              const cards = list.cardIds.map((cardId) => state.cards[cardId]);
              return (
                <List key={list.id} title={list.title} cards={cards}></List>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Board;
