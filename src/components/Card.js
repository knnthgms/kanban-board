import { Draggable } from "react-beautiful-dnd";
function Card(props) {
  return (
    <Draggable draggableId={props.data.id} index={props.index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`${
            snapshot.isDragging ? "bg-green-light" : "bg-white"
          } p-2 rounded mt-1 overflow-hidden border-b border-grey text-left cursor-pointer hover:bg-grey-lighter`}
        >
          <p class="font-medium">{props.data.title}</p>
          <p class="font-light">{props.data.desc}</p>
        </div>
      )}
    </Draggable>
  );
}
export default Card;
