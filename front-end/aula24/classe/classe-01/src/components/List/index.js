import './style.css';
import { useAuth } from '../../hooks/useAuth';
import { useHistory } from "react-router-dom";
import { useEffect, useState } from 'react';


export default function List(){

    const {token} = useAuth();
    const history = useHistory();
    const [repos, setRepos] = useState([])

    const getRepos = async() => {
        const json = JSON.parse(atob(token));       
        let result = await fetch(`${json.repos_url}`)
        result = await result.json();
        setRepos(result);
    }

    useEffect(() => {
        getRepos();
    
    }, [])

    return (
        <>
            {(repos.length > 0) && repos.map(item => <p><a target="_blank" href={item.html_url}>{item.name}</a></p>)}
        </>
    );
}