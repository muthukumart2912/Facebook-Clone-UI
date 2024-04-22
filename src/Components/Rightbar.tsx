import btimage from "../assets/gift.png";
import adImage from "../assets/ad.png";
import { profilePicture } from "../Data/Dummydata";


type profilePicture = {
  users: number;
  profile: string;
  username: string;
};

type profileProps = {
  profile : boolean
}



const Rightbar: React.FC<profileProps> = ({ profile }) => {
  return (
    <section className="flex-[3.5] pt-3 px-[5px]">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </section>
  );
};

const ProfileRightBar = () => {
  return (
    <>
      <h1 className="font-bold">User Information</h1>
      <div className="userprofile mt-2">
        <div className="flex flex-col gap-2">
          <h1 className="text-gray-500 text-[14px]">
            <b>City:</b> Tirunelveli
          </h1>
          <h1 className="text-gray-500 text-[14px]">
            <b>From:</b> Tisaiyanvillai
          </h1>
          <h1 className="text-gray-500 text-[14px]">
            <b>Relationship:</b> Single
          </h1>
        </div>
        <div className="mt-2 ">
          <h1 className="font-bold">User Friends</h1>
          <div className="grid grid-cols-3 gap-3 mt-2">
            {profilePicture.map((item) => (
              <div className="flex flex-col gap-1 " key={item.users}>
                <img src={item.profile} alt="person3" className="w-24 h-24 object-cover rounded"/>
                <span className="tracking-wide font-medium">{item.username}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const HomeRightBar = () => {
  return (
    <>
      <div className="flex gap-1">
        <img src={btimage} alt="btImage" className="w-10 h-10" />
        <span className="text-gray-600 text-[14px]">
          <b className="text-black">Muthu Kumar</b> and
          <b className="text-black">3 other friends</b> have birthday today
        </span>
      </div>
      <img src={adImage} alt="" className="w-full rounded-md my-8" />
      <div className="flex flex-col gap-2 ">
        <h1 className="font-bold tracking-normal">Online Friends</h1>
        {profilePicture.map((item) => (
          <div key={item.users} className="relative flex gap-5 -z-10">
            <img
              src={item.profile}
              alt="profile pictures"
              className="w-10 h-10 rounded-full object-cover  "
            />
            <span className="font-medium">{item.username}</span>
            <span className="w-3 h-3 bg-green-400 absolute top-0 left-7 rounded-full "></span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Rightbar;
