import * as fs from "file-system";
import { sync as globSync } from "glob";
// import { sync as mkdirpSync } from "mkdirp";
import last from "lodash/last";

class MergeUtility {
    mergeTanslations() {
            const LANG_PATTERN = "./src/translations/**/*.json";
            // Try to delete current json files from public/locales
            // try {
            // fs.unlinkSync("./public/locales/data.json");
            // } catch (error) {
            // console.log(error);
            // }

            // Merge translated json files (es.json, fr.json, etc) into one object
            // so that they can be merged with the eggregated "en" object below
            let appLocale = "en";
            const mergedTranslations = globSync(LANG_PATTERN)
            .map(filename => {
                const locale = last(filename.split("/")).split(".json")[0];
                if(locale === appLocale)
                    return JSON.parse(fs.readFileSync(filename, "utf8"));
                return null;
            })
            .reduce((acc, localeObj) => {
                return { ...acc, ...localeObj };
            }, {});

            // Aggregates the default messages that were extracted from the example app's
            // React components via the React Intl Babel plugin. An error will be thrown if
            // there are messages in different components that use the same `id`. The result
            // is a flat collection of `id: message` pairs for the app's default locale.

            // Create a new directory that we want to write the aggregate messages to
            // mkdirpSync(LANG_DIR);

            // Merge aggregated default messages with the translated json files and
            // write the messages to this directory
            const LANG_DIR = "./src/core/Internationalization/"+appLocale;

            fs.writeFileSync(
            `${LANG_DIR}.json`,
            JSON.stringify({...mergedTranslations }, null, 2)
            );
    }
}

const mergeInstance = new MergeUtility();
export default mergeInstance;