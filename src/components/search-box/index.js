export const SearchBox = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <input name="query" placeholder="Search" />
            <button>Search</button>
        </form>
    );
}
