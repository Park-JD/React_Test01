import User from "../Components/user";
import App from "../Components/app";
import ImgSearch from "../Components/img_search";
import Gmail from "../Components/gmail";
import MainLog from "../Components/main_log";
import SearchBar from "../Components/search_bar";
import SearchImg from "../Components/search_img";
import SearchVoice from "../Components/search_voice";
import AddApp from "../Components/add_app";
import ImgLink from "../Components/img_link";

const Page = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          padding: "10px 10px 0px 0px",
        }}
      >
        <Gmail />
        <ImgSearch />
        <App />
        <User />
      </div>

      <div>
        <MainLog />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "30px",
        }}
      >
        <SearchImg />
        <SearchBar />
        <SearchVoice />
      </div>

      <div>
        <AddApp />
      </div>

      <div style={{ position: "absolute", left: "20px", bottom: "20px" }}>
        <ImgLink />
      </div>
    </>
  );
};

export default Page;
