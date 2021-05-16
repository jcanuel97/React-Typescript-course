import { useState } from "react";
import { useTypedSelector } from "../hooks/useTypesSelector";
import { useActions } from "../hooks/useActions";

const RepositoriesList: React.FunctionComponent = () => {
    //hooks intialization
    const [term, setTerm] = useState('');
    const { searchRepositories } = useActions();
    const { data, error, loading } = useTypedSelector((state) => state.repositories); //Know what we have in redux store



    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        searchRepositories(term);
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={term} onChange={e => setTerm(e.target.value)}></input>
                <button>Search</button>
            </form>
        </div>
    )
};

export default RepositoriesList;