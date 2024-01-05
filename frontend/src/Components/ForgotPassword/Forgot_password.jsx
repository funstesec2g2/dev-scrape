// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

// const Home = () => {
//   const navigate = useNavigate();
//   return (

//     // forgot password page
//     <div className='flex'>
//       {/* logo side */}
//       <div className='hidden md:flex w-1/2 h-screen md:bg-slate-900'>
//         {/* logo */}
//       </div>
//       {/* form side  */}
//       <div className='flex justify-center items-center h-screen w-screen md:w-1/2 bg-slate-900 md:bg-white' >

//         <div className="flex flex-col w-3/4 gap-20">

//             {/* the top texts */}
//             <div>
//               <h1 className='h-10 text-xl font-bold text-white md:text-black'>Forgot Password</h1>
//               <p className='text-xs text-white md:text-black'>Enter the email you used to create your account so we can send you instructions on how to reset your Password</p>
//             </div>


//             <div className='flex flex-col gap-5'>
//               {/* email text box */}
//               <input type='text' placeholder='Email' className='border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'></input>
//               {/* send button */}
//               <button className='md:bg-slate-900 bg-blue-900 hover:bg-blue-700 active:bg-blue-500 text-white py-2 px-4 rounded transition-colors duration-300 ease-in-out'>Send</button>
//               {/* back to login button */}
//               <Link to='login'>
//               <button className='md:border md:border-slate-900 bg-blue-900 md:bg-white active:bg-blue-500 rounded py-2 px-4 hover:bg-blue-700 hover:text-white md:text-black text-white transition-colors duration-300 ease-in-out'>Back to Login</button>
//               </Link> 
            
//             </div>


//         </div>
          
//       </div>
      
//     </div>
//     );
// }
// export default Home;