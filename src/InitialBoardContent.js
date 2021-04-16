const initialBoardContent = {
  cards: {
    "card-1": { id: "01", title: "title", desc: "desc" },
    "card-2": { id: "02", title: "title", desc: "desc" },
    "card-3": { id: "03", title: "title", desc: "desc" },
    "card-4": { id: "04", title: "title", desc: "desc" },
    "card-5": { id: "05", title: "title", desc: "desc" },
    "card-6": { id: "06", title: "title", desc: "desc" },
    "card-7": { id: "07", title: "title", desc: "desc" },
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
      cardIds: ["card-5", "card-6", "card-7"],
    },
    "list-3": {
      id: "list-3",
      title: "title3",
      cardIds: ["card-3", "card-4", "card-5"],
    },
  },
  // Reordering of lists
  listOrder: ["list-1", "list-3", "list-2"],
};
export default initialBoardContent;
