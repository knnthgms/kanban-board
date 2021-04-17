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
    "card-10": { id: "card-10", title: "title10", desc: "desc" },
    "card-11": { id: "card-11", title: "title11", desc: "desc" },
    "card-12": { id: "card-12", title: "title12", desc: "desc" },
    "card-13": { id: "card-13", title: "title13", desc: "desc" },
    "card-14": { id: "card-14", title: "title14", desc: "desc" },
    "card-15": { id: "card-15", title: "title15", desc: "desc" },
  },
  lists: {
    "list-1": {
      id: "list-1",
      title: "Backlog",
      cardIds: ["card-1", "card-2", "card-3"],
    },
    "list-2": {
      id: "list-2",
      title: "In Progress",
      cardIds: ["card-4", "card-5", "card-6"],
    },
    "list-3": {
      id: "list-3",
      title: "Review",
      cardIds: ["card-7", "card-8", "card-9"],
    },
    "list-4": {
      id: "list-4",
      title: "Test",
      cardIds: ["card-10", "card-11", "card-12"],
    },
    "list-5": {
      id: "list-5",
      title: "Done",
      cardIds: ["card-13", "card-14", "card-15"],
    },
  },
  // Reordering of lists
  listOrder: ["list-1", "list-3", "list-2", "list-4", "list-5"],
};
export default initialBoardContent;
