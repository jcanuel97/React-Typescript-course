interface RepositoriesState {
    loading: boolean;
    error: string | null;
    data: string[];
}


const reducer = (state: RepositoriesState, action: any) => {
    switch (action.type) {
        case 'search_repositories':
            return { loadimng: true, error: null, data: [] }

        case 'search_repositorie_sucess':
            return { loadimng: false, error: null, data: action.payload }

        case 'search_repositorie_error':
            return { loadimng: false, error: action.payload, data: [] }
        default:
            return state;
    }
};

export default reducer;