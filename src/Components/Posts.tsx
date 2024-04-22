import MoreVertIcon from "@mui/icons-material/MoreVert";
import Like from "../assets/like.png";
import Heart from "../assets/heart.png";
import { useState } from "react";

type Postprops = {
  posts: {
    profilePic: string;
    post: string;
    userName: string;
    time: string;
    tittle: string;
    likes: number;
    comments: number;
  };
};
const Posts: React.FC<Postprops> = ({ posts }) => {

  const [like,setLike] = useState(posts.likes)
  const [isLiked, setIsliked] = useState(false);

  const handleLikes = ()=>{
      setLike(isLiked ? like-1 : like +1)
      console.log(like)
      setIsliked(!isLiked)
  }
  return (
    <section className="Posts  w-full mt-2  flex flex-col gap-2">
      <div className="postwraper p-[10px] rounded-md">
        <div className="postTop flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img
              src={posts.profilePic}
              alt="person"
              className=" w-8 h-8 object-cover rounded-full"
            />
            <span className="font-semibold">{posts.userName}</span>
            <span>{posts.time}</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>

        <div className="postCenter mt-1 flex flex-col gap-3 ">
          <span>{posts.tittle}</span>
          <img
            src={posts.post}
            alt="post 1"
            className="w-full max-h-[500px] object-contain "
          />
        </div>
        <div className="postBottom mt-2 flex justify-between">
          <div className="flex gap-2 items-center">
            <img src={Like} alt="Like" className="w-6 h-6 cursor-pointer" onClick={handleLikes} />
            <img src={Heart} alt="Heart" className="w-6 h-6 cursor-pointer" onClick={handleLikes} />
            <span className="font-normal">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="font-normal">{posts.comments} comments</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Posts;
