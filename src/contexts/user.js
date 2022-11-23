import { useState, createContext } from "react";

export const UserContext = createContext({});

function UserProvider({children}){
    const [alunos, setAlunos] = useState('Camila')
    const [qtdAlunos, setQtdAlunos] = useState(90)
    return(
        <UserContext.Provider value={{ alunos, setAlunos, qtdAlunos, setQtdAlunos }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;