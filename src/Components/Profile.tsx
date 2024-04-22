import Feedbar from "../Components/Feedbar";
import Header from "../Components/Header";
import Rightbar from "../Components/Rightbar";
import Sidebar from "../Components/Sidebar";
import person from "../assets/person/1.jpg";
import CoverImg from "../assets/post/3.jpeg";

const Profile = () => {
  return (
    <>
      <Header />
      <section className="flex">
        <Sidebar />
        <div className="flex-[9] -z-10">
          <div className="flex flex-col gap-10 mb-2">
            <div className="relative">
              <img src={CoverImg} alt="coverImage" className="w-full h-[250px] object-cover" />
              <img src={person} alt="person" className="absolute w-36 h-36 right-0 top-36 left-0 m-auto rounded-full object-cover border-2 border-white" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h4 className="font-bold text-xl">Muthu Kumar</h4>
              <span className="font-medium text-gray-400 text-[14px]">Hello my friends!</span>
            </div>
          </div>
          <div className="flex">
            <Feedbar />
            <Rightbar profile/>
          </div>
        </div>
      </section>
    </>
  );
};
export default Profile;
