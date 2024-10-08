import { useTranslation } from "react-i18next";

export const Education = () => {
    const { t } = useTranslation();

    return (
        
                       <section id="education" className='w-full flex justify-center items-center max-h-max px-4'>
                <div className='w-full md:w-2/4 max-w-max flex flex-col gap-2 justify-center items-center text-center max-h-max py-4'>
                    <h4 className='text-xl font-medium text-bunker-700 mb-2'>Education</h4>
                    <ul className='flex flex-row flex-wrap gap-2 justify-center items-center'>
                        <div className='education-div'>
                            <img className='education-img w-full' src="/usm.jpeg" alt="node" />
                            <span className='skill-text'>Universidad Santa Maria</span>
                            <span className='education-text'>{t("careerUSM")}</span>
                            <span className='education-text'>{t("careerProgress")}</span>
                        </div>
                        <div className='education-div'>
                            <img className='education-img w-9/12' src="/usb.gif" alt="node" />
                            <span className='skill-text'>Universidad Simón Bolívar</span>
                            <span className='education-text'>{t("careerUSB")}</span>
                            <span className='education-text'>{t("careerProgress")}</span>
                        </div>
                        <div className='education-div'>
                            <img className='education-img w-full' src="/edte.png" alt="node" />
                            <span className='skill-text'>Neo Universidad EDTecnica</span>
                            <span className='education-text'>{t("edt")}</span>
                            <span className='education-text'>{t("finalized")} 2024</span>
                        </div>
                    </ul>
                </div>
            </section>
        
    )
}
