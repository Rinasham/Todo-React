
export const IncompleteTodo = (props) => {
  const {incompleteTodos, onClickComplete, onClickDelete} = props;
  return (
    <div className="incomplete-area">
    <p className="title">TODO</p>
    <ul>
      {incompleteTodos.map((todo, index)=>{
        return(
          <div key={todo} className="list-row">
            <li>{todo}</li>
            <button onClick={()=>onClickComplete(index)}>Done</button>
            <button onClick={()=> onClickDelete(index)}>Delete</button>
          </div>
        );
      })}
    </ul>
  </div>
  );
};