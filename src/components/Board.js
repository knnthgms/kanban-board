import React from "react";
import initialBoardContent from "../data/InitialBoardContent";
import { DragDropContext } from "react-beautiful-dnd";
import "../utils/ObjectFunctions";
import HeaderNav from "./HeaderNav";
import List from "./List";

class Board extends React.Component {
  constructor(props) {
    super(props);
    let boardContent = initialBoardContent;
    if (localStorage.getItem("boardContent")) {
      const rawLS = localStorage.getItem("boardContent");
      const parsedLS = JSON.parse(rawLS);
      boardContent = parsedLS;
    }
    this.state = {
      boardContent,
      showModal: false,
      addingNewCard: true,
      listTitle: "",
      cardTitle: "",
      cardDesc: "",
      activeList: null,
    };
    localStorage.setItem(
      "boardContent",
      JSON.stringify(this.state.boardContent)
    );
  }

  onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    const { boardContent } = this.state;
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = boardContent.lists[source.droppableId];
    const finish = boardContent.lists[destination.droppableId];

    if (start === finish) {
      const newCardIds = Array.from(start.cardIds);
      newCardIds.splice(source.index, 1);
      newCardIds.splice(destination.index, 0, draggableId);

      const newList = {
        ...start,
        cardIds: newCardIds,
      };

      const newState = {
        ...boardContent,
        lists: {
          ...boardContent.lists,
          [newList.id]: newList,
        },
      };

      this.setState({ boardContent: newState });
      localStorage.setItem(
        "boardContent",
        JSON.stringify(this.state.boardContent)
      );
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
      ...boardContent,
      lists: {
        ...boardContent.lists,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };
    this.setState({ boardContent: newState });
    localStorage.setItem(
      "boardContent",
      JSON.stringify(this.state.boardContent)
    );
  };

  addList = () => {
    this.setState({ showModal: false });

    const { lists, listOrder } = this.state.boardContent;
    const { listTitle, boardContent } = this.state;
    const newListId = `list-${Object.size(lists) + 1}`;

    lists[newListId] = {
      id: newListId,
      title: listTitle,
      cardIds: [],
    };
    listOrder.push(newListId);
    const newBoardContent = {
      ...boardContent,
      lists,
      listOrder,
    };
    this.setState({ boardContent: newBoardContent, showModal: false });
    localStorage.setItem(
      "boardContent",
      JSON.stringify(this.state.boardContent)
    );
  };

  addCard = () => {
    const { cards, lists } = this.state.boardContent;
    const { cardTitle, cardDesc, activeList, boardContent } = this.state;
    const newCardId = `card=${Object.size(cards) + 1}`;
    cards[newCardId] = {
      id: newCardId,
      title: cardTitle,
      desc: cardDesc,
    };
    lists[activeList].cardIds.push(newCardId);
    this.setState({
      boardContent: {
        ...boardContent,
        cards,
        lists,
      },
      showModal: false,
    });
    localStorage.setItem(
      "boardContent",
      JSON.stringify(this.state.boardContent)
    );
  };

  addAction = (type, activeList) => {
    if (type === "list")
      this.setState({
        showModal: true,
        addingNewCard: false,
      });
    else this.setState({ showModal: true, activeList, addingNewCard: true });
  };

  handleCardTitle(e) {
    this.setState({ cardTitle: e.target.value });
  }
  handleListTitle(e) {
    this.setState({ listTitle: e.target.value });
  }
  handleCardDesc(e) {
    this.setState({ cardDesc: e.target.value });
  }

  render() {
    const { addingNewCard, showModal, boardContent } = this.state;
    return (
      <div className="Board">
        <div className="h-screen overflow-hidden flex items-center justify-center">
          <div className="bg-blue w-full h-screen font-sans">
            <HeaderNav />
            <div className="flex m-4 justify-between">
              <div className="flex">
                <h3 className="text-white mr-4">Kanban board</h3>
              </div>
              <div
                onClick={() => this.addAction("list")}
                className="text-white font-sm hidden md:flex items-center hover:underline cursor-pointer"
              >
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
            {showModal && (
              <>
                <div className="absolute w-100 h-screen">
                  <div className="relative w-auto my-6 mx-auto max-w-sm">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      {/*header*/}
                      <div className="flex items-start justify-between p-4 border-b border-solid border-blueGray-200 rounded-t">
                        <h3 className="text-3xl font-semibold">
                          {addingNewCard ? "Add Card?" : "Add List?"}
                        </h3>
                        <button
                          className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                          onClick={() => this.setState({ showModal: false })}
                        >
                          <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                            ×
                          </span>
                        </button>
                      </div>
                      {/*body*/}
                      <div className="relative p-4 flex-auto">
                        <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                          {addingNewCard
                            ? "Enter new card details?"
                            : "Enter name of new list"}
                        </p>
                        <div className="mb-3 pt-0">
                          <input
                            type="text"
                            placeholder="Name"
                            value={
                              addingNewCard
                                ? this.state.cardTitle
                                : this.state.listTitle
                            }
                            onChange={
                              addingNewCard
                                ? (e) => this.handleCardTitle(e)
                                : (e) => this.handleListTitle(e)
                            }
                            className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:ring w-full"
                          />
                        </div>
                        {addingNewCard && (
                          <div className="mb-3 pt-0">
                            <input
                              type="text"
                              placeholder="Description (optional)"
                              value={this.state.cardDesc}
                              onChange={(e) => this.handleCardDesc(e)}
                              className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:ring w-full"
                            />
                          </div>
                        )}
                      </div>

                      {/*footer*/}
                      <div className="flex items-center justify-end p-4 border-t border-solid border-blueGray-200 rounded-b">
                        <button
                          className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => this.setState({ showModal: false })}
                        >
                          Cancel
                        </button>
                        <button
                          className="bg-blue text-white font-bold uppercase text-sm px-6 py-3 rounded shadow outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={
                            addingNewCard
                              ? () => this.addCard()
                              : () => this.addList()
                          }
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            )}
            <div className="flex px-4 pb-8 items-start overflow-auto">
              <DragDropContext onDragEnd={this.onDragEnd}>
                {boardContent.listOrder.map((listId) => {
                  const list = boardContent.lists[listId];
                  const cards = list.cardIds.map(
                    (cardId) => boardContent.cards[cardId]
                  );
                  return (
                    <List
                      key={list.id}
                      list={list}
                      cards={cards}
                      addAction={this.addAction.bind(this)}
                    ></List>
                  );
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
