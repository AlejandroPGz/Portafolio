export const Skills = () => {
    return (
        
                      <section id="skills" className='w-full flex justify-center items-center max-h-max px-4'>
                <div className='w-full md:w-2/4 max-w-max flex flex-col gap-2 justify-center items-center text-center max-h-max border-b border-midnight-900 py-4'>
                    <h4 className='text-xl font-medium text-bunker-700 mb-2'>Skills & Tools</h4>
                    <ul className='flex flex-row flex-wrap gap-2 justify-center items-center'>
                        <div className='skills-div'>
                            <img className='w-full h-1/2' src="src\assets\node.svg" alt="node" />
                            <span className='skill-text'>Node JS</span>
                        </div>
                        <div className='skills-div'>
                            <img className='w-full h-1/2' src="src\assets\express.svg" alt="node" />
                            <span className='skill-text'>Express</span>
                        </div>
                        <div className='skills-div'>
                            <img className='w-full h-1/2' src="src\assets\js.svg" alt="node" />
                            <span className='skill-text'>Javascript</span>
                        </div>
                        <div className='skills-div'>
                            <img className='w-full h-1/2' src="src\assets\react.svg" alt="node" />
                            <span className='skill-text'>React JS</span>
                        </div>                        
                        <div className='skills-div'>
                            <img className='w-full h-1/2' src="src\assets\mongo.svg" alt="node" />
                            <span className='skill-text'>Mongo DB</span>
                        </div>                        
                        <div className='skills-div'>
                            <img className='w-full h-1/2' src="src\assets\sql.svg" alt="node" />
                            <span className='skill-text'>SQL</span>
                        </div>
                        <div className='skills-div'>
                            <img className='w-full h-1/2' src="src\assets\expo.svg" alt="node" />
                            <span className='skill-text'>Expo</span>
                        </div>                        
                        <div className='skills-div'>
                            <img className='w-full h-1/2' src="src\assets\vite.svg" alt="node" />
                            <span className='skill-text'>Vite</span>
                        </div>
                        <div className='skills-div'>
                            <img className='w-full h-1/2' src="src\assets\tail.svg" alt="node" />
                            <span className='skill-text'>Tailwind CSS</span>
                        </div>
                    </ul>
                </div>
            </section>
        
    )
}
