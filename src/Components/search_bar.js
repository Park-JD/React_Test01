const SearchBar = () => {
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Google 검색 또는 URL 입력"
          style={{
            width: "465px",
            height: "40px",
            marginTop: "30px",
            border: "0px",
            outline: "none",
            fontSize: "16px",
          }}
        />
      </div>
    </>
  );
};

export default SearchBar;
