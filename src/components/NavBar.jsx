import { useState } from "react"
import { HashLink } from 'react-router-hash-link';

export default function NavBar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  return (
    <>
  <nav className="w-full h-12 bg-bunker-100 flex flex-row items-center justify-between px-4 xl:justify-around fixed top-0 left-0 z-10">
        <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className='hover:cursor-pointer md:hidden transition-all hover:bg-bunker-50 p-1 rounded-xl'>
        <svg className='w-8 md:w-10' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 6H20M4 12H14M4 18H9" stroke="#272D53" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>        
        </button>
        <ul className='hidden md:flex flex-row gap-4'>
          
          <a href="https://github.com/AlejandroPGz"><img className="w-6 hover:cursor-pointer" src="/github.svg" alt="github_icon" /></a>
          <a href="https://www.linkedin.com/in/alejandro-paradiso-498b3a2a1/">
          <img className="w-6 hover:cursor-pointer" src="/linke.svg" alt="github_icon" />
          </a>
        </ul>
        <ul className='hidden md:flex flex-row gap-4'>
            <HashLink scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })} to="#skills" className='links-nav-pc'>Skills</HashLink>
            <HashLink scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })} to="#proyects" className='links-nav-pc'>Proyects</HashLink>
            <HashLink scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })} to="#education" className='links-nav-pc'>Education</HashLink>
        </ul>
        <div className={`md:hidden absolute top-12 left-0 w-full bg-bunker-50 rounded-b-lg flex flex-col items-center justify-center transform transition-transform py-3
          ${isMenuOpen? "opacity-100" : "opacity-0 -translate-x-2/4"}`}
          style={{transition: "transform 0.3s ease, opacity 0.3s ease"}}
          >
          <ul className='flex flex-col gap-4 text-center'>
            <HashLink scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })} to="#skills" className='links-nav-mobile'>Skills</HashLink>
            <HashLink scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })} to="#proyects" className='links-nav-mobile'>Proyects</HashLink>
            <HashLink scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })} to="#education" className='links-nav-mobile'>Education</HashLink>
            <ul className='flex flex-row gap-4'>
            <a href="https://github.com/AlejandroPGz">
            <img className="w-6 hover:cursor-pointer" src="/github.svg" alt="github_icon" />
            </a>
            <a href="https://www.linkedin.com/in/alejandro-paradiso-498b3a2a1/">
            <img className="w-6 hover:cursor-pointer" src="/linke.svg" alt="linkedin" />
            </a>
            </ul>
          </ul>
        </div>
        <a className="bg-bunker-300 hover:bg-bunker-400 rounded-full px-4 py-1 hover:cursor-pointer text-center text-white font-semibold transition-all"
         href="/Curriculum_Alejandro_Paradiso.pdf"
         download
        >
          Currículum
        </a>
    </nav>
    </>
  )
}
