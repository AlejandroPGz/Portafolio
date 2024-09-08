export const Education = () => {
    return (
        
                       <section id="education" className='w-full flex justify-center items-center max-h-max px-4'>
                <div className='w-full md:w-2/4 max-w-max flex flex-col gap-2 justify-center items-center text-center max-h-max py-4'>
                    <h4 className='text-xl font-medium text-bunker-700 mb-2'>Education</h4>
                    <ul className='flex flex-row flex-wrap gap-2 justify-center items-center'>
                        <div className='education-div'>
                            <img className='education-img w-full' src="src\assets\usm.jpeg" alt="node" />
                            <span className='skill-text'>Universidad Santa Maria</span>
                            <span className='education-text'>Ingeniería en sistemas</span>
                            <span className='education-text'>En curso</span>
                        </div>
                        <div className='education-div'>
                            <img className='education-img w-9/12' src="src\assets\usb.gif" alt="node" />
                            <span className='skill-text'>Universidad Simón Bolívar</span>
                            <span className='education-text'>Ingeniería Geofísica</span>
                            <span className='education-text'>En curso</span>
                        </div>
                        <div className='education-div'>
                            <img className='education-img w-full' src="src\assets\edte.png" alt="node" />
                            <span className='skill-text'>Neo Universidad EDTecnica</span>
                            <span className='education-text'>Programación Full Stack</span>
                            <span className='education-text'>Finalizado 2024</span>
                        </div>
                    </ul>
                </div>
            </section>
        
    )
}
