import { BsLink } from "react-icons/bs";

const ImgLink = () => {
  return (
    <div style={{ cursor: "pointer" }}>
      <BsLink
        style={{
          position: "absolute",
          fontSize: "23px",
          marginRight: "5px",
          bottom: "0px",
          color: "white",
        }}
      />
      <a
        href="#"
        style={{
          fontSize: "15px",
          color: "white",
          padding: "0px 0px 0px 27px",
        }}
      >
        사진 제공: Ev Tchebotarev
      </a>
    </div>
  );
};

export default ImgLink;
