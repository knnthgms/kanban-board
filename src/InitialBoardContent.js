const initialBoardContent = {
  cards: {
    "card-1": { id: "card-1", title: "title1", desc: "desc" },
    "card-2": { id: "card-2", title: "title2", desc: "desc" },
    "card-3": { id: "card-3", title: "title3", desc: "desc" },
    "card-4": { id: "card-4", title: "title4", desc: "desc" },
    "card-5": { id: "card-5", title: "title5", desc: "desc" },
    "card-6": { id: "card-6", title: "title6", desc: "desc" },
    "card-7": { id: "card-7", title: "title7", desc: "desc" },
    "card-8": { id: "card-8", title: "title8", desc: "desc" },
    "card-9": { id: "card-9", title: "title9", desc: "desc" },
  },
  lists: {
    "list-1": {
      id: "list-1",
      title: "title1",
      cardIds: ["card-1", "card-2", "card-3"],
    },
    "list-2": {
      id: "list-2",
      title: "title2",
      cardIds: ["card-4", "card-5", "card-6"],
    },
    "list-3": {
      id: "list-3",
      title: "title3",
      cardIds: ["card-7", "card-8", "card-9"],
    },
  },
  // Reordering of lists
  listOrder: ["list-1", "list-3", "list-2"],
};
export default initialBoardContent;
