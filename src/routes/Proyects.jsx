import { useTranslation } from "react-i18next";

export const Proyects = () => {
    const { t } = useTranslation();
    return (
        
                       <section id="proyects" className='w-full flex justify-center items-center max-h-max px-4'>
                <div className='w-full md:w-2/4 max-w-max flex flex-col gap-2 justify-center items-center text-center max-h-max border-b border-midnight-900 py-4'>
                    <h4 className='text-xl font-medium text-bunker-700 mb-2'>{t("proyects")}</h4>
                    <ul className='flex flex-row flex-wrap gap-2 justify-center items-center'>
                        <div className='div-proyects'>
                            <span className='text-xl text-bunker-800 font-semibold'>Venezuela Quizz Game</span>
                            <span className='text-lg text-bunker-600 font-semibold'>{t("gameDesc")}</span>
                            <a href="https://expo.dev/accounts/pitupiri/projects/Venezuela_Quizz/builds/e2947af8-5acc-4e84-a4b5-31fc55fac8dd" className='text-lg text-bunker-400 underline hover:cursor-pointer'>{t("linkGame")}</a>
                            <span className='text-base text-bunker-400'>({t("gameMsg")})</span>
                            <img className='w-3/5 h-60 rounded-xl' src="/game.png" alt="" />
                        </div>
                        <div className='div-proyects'>
                            <span className='text-xl text-bunker-800 font-semibold'>Vzl API</span>
                            <span className='text-lg text-bunker-600 font-semibold'>{t("apiDesc")}</span>
                            <a href='https://vzla-api-page.onrender.com/' className='text-lg text-bunker-400 underline hover:cursor-pointer'>{t("apiLink")}</a>
                            <img className='w-3/5 h-60 rounded-xl' src="/ss.jpg" alt="" />
                        </div>
                    </ul>
                </div>
            </section>
        
    )
}
