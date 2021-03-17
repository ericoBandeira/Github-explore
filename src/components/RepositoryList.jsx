import { RepositoryItem } from "./RepositoryItem";
import {useState,useEffect} from 'react';
import '../styles/repositories.scss';


export function RepositoryList(){

    //https://api.github.com/users/ericoBandeira/repos

    const [repositories,setRepositories] = useState([]);

    useEffect(()=>{
       fetch('https://api.github.com/users/ericoBandeira/repos')
        .then(response=> response.json())
        .then(data => setRepositories(data)) 
    }, []); //n esquecer o segundo parâmetro 


    return(
        <section className="repository-list">
            <h1>Lista de repositórios</h1>
            <ul>
                {repositories.map(repository => {
                    return <RepositoryItem key={repository.name} repository={repository}/>
                })}
               
            </ul>
        </section>
    );
}