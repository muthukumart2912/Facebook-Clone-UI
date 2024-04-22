import Feedbar from "../Components/Feedbar";
import Header from "../Components/Header";
import Rightbar from "../Components/Rightbar";
import Sidebar from "../Components/Sidebar";

const Homepage = () => {
  return (
    <>
      <Header />
      <div className="flex">
        <Sidebar />
        <Feedbar />
        <Rightbar profile={false}/>
      </div>
    </>
  );
};

export default Homepage;
