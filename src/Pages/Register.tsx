import { Link } from "react-router-dom"
const Register = () => {
    return (
      <section className="w-full h-screen bg-slate-50 flex items-center justify-center">
          <div className="w-[70%] h-[70%]  flex ">
              <div className="flex-1 flex flex-col justify-center gap-3 ">
                  <h1 className="font-bold text-5xl text-blue-600">SocialFy</h1>
                  <span className="font-medium text-2xl">Connect with friends and the world around you on SocialFy</span>
              </div>
              <div className="flex-1 flex flex-col justify-center bg-white rounded-md h-[450px]">
                      <div className="flex flex-col gap-5 mx-2">
                          <input placeholder="Username" className="h-12 px-2 border border-gray-400 rounded-md focus:outline-none" />
                          <input placeholder="Email" className="h-12 px-2 border border-gray-400 rounded-md focus:outline-none" />
                          <input type="password" placeholder="Password" className="h-12 px-2 border border-gray-400 rounded-md focus:outline-none" />
                          <input type="password" placeholder="Confirm Password" className="h-12 px-2 border border-gray-400 rounded-md focus:outline-none" />
                          <button className="border border-gray-400 bg-blue-600 text-white font-medium py-2 rounded-md">Sign up</button>
                          
                          <button className="border border-gray-400 bg-green-500 text-white font-medium py-2 rounded-md w-[70%] self-center">
                              
                              <Link to='/login'>Log into Account</Link>
                          </button>
                      </div>
              </div>
          </div>
  
      </section>
    )
  }
  export default Register