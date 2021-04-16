import logo from "./logo.svg";
import HeaderNav from "./components/HeaderNav";
import List from "./components/List";
import Card from "./components/Card";

function Board() {
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
            <List>
              <Card>Do a mobile first layout</Card>

              <Card>Check the meta tags</Card>

              <Card>Check the responsive layout on all devices</Card>
            </List>
            <List>
              <Card>Delete all references from the wiki</Card>

              <Card>Remove analytics code</Card>

              <Card>Whatever</Card>

              <Card>Think more tasks for this example</Card>
            </List>
            <List>
              <Card>Delete all references from the wiki</Card>

              <Card>Remove analytics code</Card>

              <Card>Whatever</Card>

              <Card>Delete all references from the wiki</Card>

              <Card>Remove analytics code</Card>

              <Card>Whatever</Card>

              <Card>One more card</Card>

              <Card>Delete all references from the wiki</Card>

              <Card>Remove analytics code</Card>

              <Card>Whatever</Card>
            </List>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Board;
