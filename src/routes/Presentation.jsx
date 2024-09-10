import { useTranslation } from "react-i18next"

export const Presentation = () => {
    const { t } = useTranslation();
    return (
        <>
            <div className='w-full flex justify-center items-center max-h-max'>
                <div className='w-2/4 max-w-max flex flex-col gap-2 justify-center items-center text-center max-h-max h-40 border-b border-midnight-900'>
                    <h3 className='text-2xl font-medium text-bunker-900'>Alejandro Paradiso</h3> 
                    <h4 className='text-xl font-medium text-bunker-700'>{t("profession")}</h4>
                </div>
            </div>
            <div className='w-full flex justify-center items-center max-h-max px-4'>
                <div className='w-full md:w-2/4 max-w-max flex flex-col gap-2 justify-center items-center text-center max-h-max border-b border-midnight-900 py-4'>
                    {/* <h4 className='text-lg font-medium text-bunker-700'>¡Hola! Soy un apasionado desarrollador de software con experiencia en una variedad de lenguajes de programación y tecnologías. Mi objetivo es crear soluciones elegantes y eficientes que resuelvan problemas del mundo real. Constantemente me sumerjo en nuevos lenguajes y bibliotecas para mantenerme actualizado y mejorar mis habilidades.</h4> */}
                    {/* <h4 className='text-lg font-medium text-bunker-700'>
                    Hi! I&apos;m a passionate software developer with experience in a variety of programming languages and technologies. My goal is to create elegant and efficient solutions that solve real-world problems. I&apos;m constantly diving into new languages and libraries to stay up to date and improve my skills.
                    </h4> */}
                    <h4 className='text-lg font-medium text-bunker-700'>
                        {t("presentation")}
                    </h4>
                </div>
            </div>
        </>
    )
}
