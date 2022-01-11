export const CompleteTodo = (props) => {
  const {completeTodos, onClickBack} = props;
  return (
    <div className="complete-area">
    <p className="title">Completed Tasks</p>
    <ul>
      {completeTodos.map((todo, index)=>{
        return(
          <div key={todo} className="list-row">
            <li>{todo}</li>
            <button onClick={()=> onClickBack(index)}>Undo</button>
          </div>
        );
      })}
    </ul>
  </div>
  );
};