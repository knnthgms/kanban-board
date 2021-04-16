import logo from "./logo.svg";
import HeaderNav from "./components/HeaderNav";
import List from "./components/List";
import Card from "./components/Card";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div class="h-screen overflow-hidden flex items-center justify-center">
        <div class="bg-blue w-full h-screen font-sans">
          <HeaderNav />
          <div class="flex m-4 justify-between">
            <div class="flex">
              <h3 class="text-white mr-4">Kanban board</h3>
            </div>
            <div class="text-white font-sm text-underlined hidden md:flex items-center underline">
              <svg
                class="h-4 fill-current text-white cursor-pointer mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5 10a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4z" />
              </svg>
              Add List
            </div>
          </div>
          <div class="flex px-4 pb-8 items-start overflow-auto">
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

export default App;
