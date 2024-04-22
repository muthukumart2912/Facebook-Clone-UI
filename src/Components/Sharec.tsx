import person from "../assets/person/1.jpg";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import LabelIcon from "@mui/icons-material/Label";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import AddReactionIcon from "@mui/icons-material/AddReaction";

const Sharec = () => {
  return (
    <section className="share h-[160px] w-full rounded-md">
      <div className="p-[10px]">
        <div className="flex items-center gap-2">
          <img
            src={person}
            alt="demo"
            className="w-8 h-8 object-cover rounded-full"
          />
          <input
            placeholder="Whats in your mind Muthu?"
            className="w-full focus:outline-none"
          />
        </div>
        <hr className="mt-4 mx-4 bg-gray-300" />
        <div className="mt-5 mx-4 flex gap-5 ">
          <div className="flex gap-5 cursor-pointer">
            <div className="shareoption">
              <PermMediaIcon htmlColor="tomato" />
              <span className="mx-1 text-[14px] font-medium">
                Photo or Video
              </span>
            </div>
            <div className="shareoption">
              <LabelIcon htmlColor="blue" />
              <span className="mx-1 text-[14px] font-medium">Tag</span>
            </div>
            <div className="shareoption">
              <FmdGoodIcon htmlColor="green" />
              <span className="mx-1 text-[14px] font-medium">Location</span>
            </div>
            <div className="shareoption">
              <AddReactionIcon htmlColor="goldenrod" />
              <span className="mx-1 text-[14px] font-medium">Feelings</span>
            </div>
          </div>
          <button className="px-4 py-1 font-medium text-[14px] text-white bg-green-600 rounded-lg">
            Share
          </button>
        </div>
      </div>
    </section>
  );
};
export default Sharec;
