import { AiOutlineAudio } from "react-icons/ai";

const SearchVoice = () => {
  return (
    <>
      <div
        style={{
          width: "40px",
          height: "42px",
          marginTop: "30px",
          border: "0px",
          lineHeight: "50px",
          textAlign: "center",
          borderTopRightRadius: "50%",
          borderBottomRightRadius: "50%",
          backgroundColor: "white",
        }}
      >
        <AiOutlineAudio
          style={{
            fontSize: "18px",
            marginRight: "13px",
            cursor: "pointer",
          }}
        />
      </div>
    </>
  );
};

export default SearchVoice;
