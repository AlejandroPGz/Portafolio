import { useTranslation } from "react-i18next";

export default function LngBtn() {

  const { i18n } = useTranslation();
  const { t } = useTranslation();

  const changeLng = () => {
    switch (i18n.resolvedLanguage) {
      case "eng":
        i18n.changeLanguage("es")
        break;
      case "es": 
      i18n.changeLanguage("eng")
      break;
    }
  };

  return (
        <button
        onClick={changeLng}
        className="text-base font-medium text-bunker-900 hover:bg-stone-100 hover:text-bunker-500 px-2 py-1 rounded-xl flex flex-row justify-center items-center gap-1">
        <svg className="w-4" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="#272d53 "><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M0 0h48v48H0z" fill="none"></path> <g id="Shopicon"> <path d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20c11.046,0,20-8.954,20-20S35.046,4,24,4z M31.96,22 c-0.208-5.225-1.223-9.846-2.726-13.103c5.649,1.964,9.861,6.998,10.627,13.103H31.96z M24,39.9 c-1.213-0.955-3.608-5.736-3.954-13.9h7.908C27.608,34.164,25.213,38.945,24,39.9z M20.046,22C20.392,13.836,22.787,9.055,24,8.1 c1.213,0.955,3.608,5.736,3.954,13.9H20.046z M18.766,8.897C17.264,12.154,16.248,16.775,16.04,22H8.139 C8.905,15.896,13.117,10.861,18.766,8.897z M16.04,26c0.208,5.225,1.223,9.846,2.726,13.103C13.117,37.139,8.905,32.104,8.139,26 H16.04z M29.234,39.103c1.502-3.257,2.518-7.878,2.726-13.103h7.902C39.095,32.104,34.883,37.139,29.234,39.103z"></path> </g> </g></svg>
          {t("btnChangeLanguage")}
        </button>
  );
};