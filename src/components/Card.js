function Card(props) {
  return (
    <div class="bg-white p-2 rounded mt-1 overflow-hidden border-b border-grey text-left cursor-pointer hover:bg-grey-lighter">
      {props.children}
    </div>
  );
}
export default Card;
