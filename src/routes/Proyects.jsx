import { useTranslation } from "react-i18next";

export const Proyects = () => {
    const { t } = useTranslation();
    return (
        
                <section id="proyects" className='w-full flex justify-center items-center max-h-max px-4'>
                <div className='w-full md:w-2/4 max-w-max flex flex-col gap-2 justify-center items-center text-center max-h-max border-b border-zinc-900 py-4'>
                    <h4 className='text-xl font-semibold text-zinc-900 mb-2'>{t("proyects")}</h4>
                    <ul className='flex flex-row flex-wrap gap-2 justify-center items-center'>
                        <div className='div-proyects'>
                            <span className='text-xl text-zinc-800 font-semibold'>FegaSys</span>
                            <span className='text-lg text-zinc-600 font-semibold'>{t("fegaDesc")}</span>
                            <img className='w-4/5 h-40 rounded-xl object-scale-down' src="/fega.png" alt="" />
                            <div className="w-full flex flex-row p-2 gap-4 justify-center items-center
                            ">
                                <img className="w-6 h-6" src="/net.png" alt=".net" />
                                <img className="w-10 h-6" src="/qslite.svg" alt="sqlite" />
                                <img className="w-8 h-8" src="/csharp.png" alt="csharp" />
                            </div>
                        </div>
                        <div className='div-proyects'>
                            <span className='text-xl text-zinc-800 font-semibold'>Venezuela Quizz Game</span>
                            <span className='text-lg text-zinc-600 font-semibold'>{t("gameDesc")}</span>
                            <a href="https://drive.google.com/drive/folders/1Px0zHu4fvlNCXAqADXqIcANedcZVTmtM" className='text-lg text-zinc-400 underline hover:cursor-pointer'>{t("linkGame")}</a>             
                            <img className='w-3/5 h-60 rounded-xl' src="/game.png" alt="" />
                            <div className="w-full flex flex-row p-2 gap-4 justify-center items-center
                            ">
                                <img className="w-6 h-6" src="/expo.svg" alt="expo" />
                                <img className="w-6 h-6" src="/react.svg" alt="react" />
                            </div>
                        </div>
                        <div className='div-proyects'>
                            <span className='text-xl text-zinc-800 font-semibold'>Vzl API</span>
                            <span className='text-lg text-zinc-600 font-semibold'>{t("apiDesc")}</span>
                            <a href='https://vzla-api-page.onrender.com/' className='text-lg text-zinc-400 underline hover:cursor-pointer'>{t("apiLink")}</a>
                            <img className='w-3/5 h-60 rounded-xl' src="/ss.jpg" alt="" />
                            <div className="w-full flex flex-row p-2 gap-4 justify-center items-center
                            ">
                                <img className="w-6 h-6" src="/node.svg" alt="node" />
                                <img className="w-6 h-6" src="/mongo.svg" alt="mongo" />
                                <img className="w-6 h-6" src="/express.svg" alt="react" />
                                <a href="https://github.com/AlejandroPGz/Venezuela-Wiki-Api">
                                <img className="w-6 h-6" src="/github.svg" alt="git" />
                                </a>
                            </div>
                        </div>
                    </ul>
                </div>
            </section>
        
    )
}
