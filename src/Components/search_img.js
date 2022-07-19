import { IoIosSearch } from "react-icons/io";

const SearchImg = () => {
  return (
    <>
      <div
        style={{
          width: "40px",
          height: "42px",
          marginTop: "30px",
          lineHeight: "50px",
          textAlign: "center",
          border: "0px",
          borderTopLeftRadius: "50%",
          borderBottomLeftRadius: "50%",
          backgroundColor: "white",
        }}
      >
        <IoIosSearch style={{ fontSize: "18px", marginLeft: "10px" }} />
      </div>
    </>
  );
};

export default SearchImg;
