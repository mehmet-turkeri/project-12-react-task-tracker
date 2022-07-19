import Button from "./Button";

const Header = ({ title, onAdd, showAdd, toggleShow }) => {
  return (
    <header className="header">
      <h1>Task Tracker</h1>
            
        <Button
          color={showAdd ? "red" : "green"}
          text={showAdd ? "Close Add Task Bar" : "Show Add Task Bar"}
          onClick={onAdd}
          toggleShow={toggleShow}
        />
      
    </header>
  );
};



export default Header
