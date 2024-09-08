export const Proyects = () => {
    return (
        
                       <section id="proyects" className='w-full flex justify-center items-center max-h-max px-4'>
                <div className='w-full md:w-2/4 max-w-max flex flex-col gap-2 justify-center items-center text-center max-h-max border-b border-midnight-900 py-4'>
                    <h4 className='text-xl font-medium text-bunker-700 mb-2'>Proyectos</h4>
                    <ul className='flex flex-row flex-wrap gap-2 justify-center items-center'>
                        <div className='div-proyects'>
                            <span className='text-xl text-bunker-800 font-semibold'>Venezuela Quizz Game</span>
                            <span className='text-lg text-bunker-600 font-semibold'>A game made with react native and expo</span>
                            <a href="https://expo.dev/accounts/pitupiri/projects/Venezuela_Quizz/builds/e2947af8-5acc-4e84-a4b5-31fc55fac8dd" className='text-lg text-bunker-400 underline hover:cursor-pointer'>Download APK from expo</a>
                            <span className='text-base text-bunker-400'>(It will soon be available for Android in Google Play)</span>
                            <img className='w-3/5 h-60 rounded-xl' src="/game.png" alt="" />
                        </div>
                        <div className='div-proyects'>
                            <span className='text-xl text-bunker-800 font-semibold'>Vzl API</span>
                            <span className='text-lg text-bunker-600 font-semibold'>An API that provides information about Venezuela, like states, capitals...</span>
                            <a href='https://vzla-api-page.onrender.com/' className='text-lg text-bunker-400 underline hover:cursor-pointer'>Pagina Oficial</a>
                            <img className='w-3/5 h-60 rounded-xl' src="/ss.jpg" alt="" />
                        </div>
                    </ul>
                </div>
            </section>
        
    )
}
