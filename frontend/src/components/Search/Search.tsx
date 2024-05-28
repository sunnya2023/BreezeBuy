import "../Search/search.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
const Search = () => {
  return (
    <form>
      <input type="text" placeholder="검색하기" />
      <button>
        <SearchOutlinedIcon className="ico-search" />
      </button>
    </form>
  );
};

export default Search;
