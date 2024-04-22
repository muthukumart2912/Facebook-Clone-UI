import Posts from "./Posts";
import Sharec from "./Sharec";
import { dynamicPost } from "../Data/Dummydata";

const Feedbar = () => {
  return (
    <section className="flex-[5.5] p-[10px]">
      <div className="">
        <Sharec/>
          {dynamicPost.map((post)=>(
            <Posts key={post.userName} posts={post}/>
          ))}

        
      </div>
    </section>
  );
};
export default Feedbar;
