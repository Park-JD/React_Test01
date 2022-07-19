const AddApp = () => {
  return (
    <>
      <div
        style={{
          width: "100px",
          height: "100px",
          textAlign: "center",
          margin: "30px",
          cursor: "pointer",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            width: "45px",
            height: "45px",
            borderRadius: "50%",
            lineHeight: "40px",
            fontSize: "30px",
            margin: "0 auto",
            marginBottom: "10px",
            backgroundColor: "white",
          }}
        >
          +
        </div>
        <span style={{ fontSize: "13px", color: "white" }}>바로가기 추가</span>
      </div>
    </>
  );
};

export default AddApp;
