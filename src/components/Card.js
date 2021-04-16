import { Draggable } from "react-beautiful-dnd";
function Card(props) {
  return (
    <Draggable draggableId={props.data.id} index={props.index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="bg-white p-2 rounded mt-1 overflow-hidden border-b border-grey text-left cursor-pointer hover:bg-grey-lighter"
        >
          <p>{props.data.title}</p>
          <p>{props.data.desc}</p>
        </div>
      )}
    </Draggable>
  );
}
export default Card;
