## Kanban Board

Simple trello-style kanban board with card drag-and-drop functionality
Implemented using `react-beautiful-dnd` & TailwindCSS
Compatible with touch devices and keyboard shortcuts
Persists using localstorage

### Usage

The board contains lists laid out horizontally. Each list contains a set of cards in a particular order.
User can add new lists with a list title.
User can add cards to a particular list with a title and description
The cards can be reordered within the same list or moved to another list.
The structure of cards and lists in order is saved in JSON format and written to localstorage.
Localstorage clear button is also available for testing.

```
{
    cards: {
    	"card-1": { id:  "card-1", title:  "Comment system", desc:  "desc" },
    	"card-2": { id:  "card-2", title:  "Accessibility", desc:  "desc" },
        "card-3": { id:  "card-3", title:  "Component Library", desc:  "desc" }
        },
    lists: {
       "list-1": {
    	    id:  "list-1",
    	    title:  "Backlog",
    	    cardIds: ["card-1", "card-2"],
        },
        "list-2": {
    	    id:  "list-2",
    	    title:  "In Progress",
    	    cardIds: ["card-3"],
        },
     }
    listOrder: ["list-1", "list-2"],
    };
```

Bootstrapped using create-react-app
Can be run using `yarn run` and built using `yarn build`
