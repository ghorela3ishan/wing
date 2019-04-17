import { addLocaleData } from "react-intl";
import locale_en from "react-intl/locale-data/en";
import locale_de from "react-intl/locale-data/de";
import transalation_en from "./en.json";
import mergeInstance from "./mergeTranslations";

const transalationData = {
    en: transalation_en
}

addLocaleData([...locale_en, ...locale_de]);

class Internationalization {
    constructor() {
        this.language = null
        this.setLanguage();
    }
    setLanguage(language){
        let langCode = null;
        if(language){
            langCode = language;
        } else {
            langCode = (navigator.languages && navigator.languages[0]) ||
                                navigator.language || navigator.userLanguage;
        }
        this.language = langCode.split(/[-_]/)[0];
    }
    getLanguage() {
        return this.language;
    }
    getTransalations() {
        mergeInstance.mergeTanslations();
        return transalationData[this.language];
    }

}

const transalation = new Internationalization();
export default transalation;