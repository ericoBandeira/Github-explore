import { RepositoryItem } from "./RepositoryItem";

export function RepositoryList(){

    const repository= {
        name:'unform',
        description:"forms in React",
        link:"https://github.com.br/unform/unform"
    }


    return(
        <section>
            <h1>Lista de repositórios</h1>
            <ul>
               <RepositoryItem 
                repository={repository}
                />
               <RepositoryItem repository={repository}/>
               <RepositoryItem repository={repository}/>
               <RepositoryItem repository={repository}/>
            </ul>
        </section>
    );
}