import { useContext } from "react";
import { UserContext } from "../../contexts/user";

function Nome() {
    const {alunos, setAlunos} = useContext(UserContext);
    return (
      <div>
        <span style={{ color: '#FF0000'}}>Bem vindo(a): {alunos}</span>
        <br/> 
        <br/>
        <button onClick={() => setAlunos('Hendy')}>Change name</button>
      </div>
    );
  }
  
  export default Nome;
  