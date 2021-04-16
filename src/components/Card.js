function Card(props) {
  return (
    <div className="bg-white p-2 rounded mt-1 overflow-hidden border-b border-grey text-left cursor-pointer hover:bg-grey-lighter">
      <p>{props.title}</p>
      <p>{props.desc}</p>
    </div>
  );
}
export default Card;
