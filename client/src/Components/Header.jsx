import { Button, Navbar, TextInput } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon } from 'react-icons/fa';

export default function Header() {
    const path = useLocation().pathname;
  return (
    <Navbar className='border-b-2'>
      <Link
        to='/'
        className='self-center whitespace-nowrap text-sm sm:text-xl 
        font-semibold dark:text-white'
      >
        <span className='px-3 py-1 bg-gradient-to-r from-indigo-500
         via-purple-500 to-pink-500 rounded-lg text-white'>
          Karan's.
        </span>
        Blog.
      </Link>
      <form>
        <TextInput
          type='text'
          placeholder='Search....'
          rightIcon={AiOutlineSearch}
          className='hidden lg:inline'
        />
      </form>
      <Button className='w-12 h-10 lg:hidden' color='gray' pill>
        <AiOutlineSearch />
      </Button>
      <div className='flex gap-2 md:order-2'>
        <Button className='w-12 h-10 hidden 
        sm:inline' color='gray' pill>
          <FaMoon />
        </Button>
        <Link to='/sign-in'>
          <Button gradientDuoTone='purpleToBlue' outline>Sign In</Button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={'div'}>
          <Link to='/'>Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/About"} as={'div'}>
          <Link to='/About'>About</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/Projects"} as={'div'}>
          <Link to='/Projects'>Projects</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

// import { Button, Navbar, TextInput } from 'flowbite-react'
// import React from 'react'
// import { Link } from 'react-router-dom'
// import{AiOutlineSearch} from'react-icons/ai';
// import {FaMoon} from'react-icons/fa';

// export default function Header() {
//   return (
// <Navbar className='border-b-2'>
//       <Link
//         to='/'
//         className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'
//       >
//         <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
//           Sahand's
//         </span>
//         Blog
//       </Link>
//       <form>
//         <TextInput
//           type='text'
//           placeholder='Search...'
//           rightIcon={AiOutlineSearch}
//           className='hidden lg:inline'
//         />
//       </form>
//       <Button className='w-12 h-10 lg:hidden' color='gray' pill>
//         <AiOutlineSearch />
//       </Button>
//       <div className='flex gap-2 md:order-2'>
//         <Button className='w-12 h-10 hidden sm:inline' color='gray' pill>
//           <FaMoon />
//         </Button>
//         <Link to='/sign-in'>
//           <Button gradientDuoTone='purpleToBlue' outline>Sign In</Button>
//         </Link>
//         <Navbar.Toggle />
//       </div>
//       <Navbar.Collapse>
//         <Navbar.Link active={path === "/"} as={'div'}>
//           <Link to='/'>Home</Link>
//         </Navbar.Link>
//         <Navbar.Link active={path === "/about"} as={'div'}>
//           <Link to='/about'>About</Link>
//         </Navbar.Link>
//         <Navbar.Link active={path === "/projects"} as={'div'}>
//           <Link to='/projects'>Projects</Link>
//         </Navbar.Link>
//       </Navbar.Collapse>
//     </Navbar>
//   )}




//mycode-----------
// export default function Header() {
//   return (
//     <Navbar className='border-b-2 flex items-center justify-between p-2'>
//     <div className='py-3'>
//       <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
//         <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500
//          to-pink-500 rounded-lg text-white'>
//           Karan's
//         </span>
//         Blog.
//       </Link>
//     </div>
//     <form className='flex items-center'>
//       <div className='relative hidden lg:inline'>
//         <input 
//           type='text' 
//           placeholder='Search...' 
//           className='px-4 py-2 pr-12 border rounded'  // Adjust padding to account for icon
//         />
//         <AiOutlineSearch className='absolute right-3 top-1/2 transform -translate-y-1/2' />
//       </div>
//       </form>
//       <Button className='w-12 h-10 lg:hidden'>
//         <AiOutlineSearch />
//       </Button>
//     <div className="flex items-center space-x-4">
//         <Button className='w-12 h-12 flex items-center justify-center
//          rounded-full bg-gray-200' color='gray' pill>
//           <FaMoon />
//         </Button>
//       <Link to="/signin">
//         <Button className='px-4 py-2 bg-gradient-to-r from-purple-500
//          to-blue-500
//          text-white rounded-lg'>
//           Signin
//         </Button>
//       </Link>
//     </div>
//   </Navbar>
// );
// }

//     <Navbar className='border-b-2 items-center justify-between'> 
//       <div className='py-3'>
//         <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
//           <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
//             Karan's
//           </span>
//           Blog.
//         </Link>
//       </div>
//       <form className='flex items-center'>
//         <div className='relative hidden lg:inline'>
//           <TextInput 
//             type='text' 
//             placeholder='Search...' 
//             className='px-4 py-2 pr-12'  // Adjust padding to account for icon
//           />
//           <AiOutlineSearch className='absolute right-3 top-1/2 transform -translate-y-1/2' />  
//         </div>
//         </form>
//         <Button className='w-12 h-10 lg:hidden' color='gray' pill>
//           <AiOutlineSearch />
//         </Button>
//         <div className="" >
//           <Button className='w-12 h-10 hidden sm:inline' color='grey' pill>
//             <FaMoon />
//           </Button>
//           <Link to="/signin" >
//           <Button  gradientDuoTone='purpleTOBlue' pill> 
//             Signin</Button>
//           </Link>
//         </div>
     
//     </Navbar>
//   );
// }

   // gpt code
   