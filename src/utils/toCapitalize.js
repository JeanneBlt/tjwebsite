/***
 * Capitalize Word
 * @param string
 * @param everyWord
 * @returns {string|*}
 */
const toCapitalize = (string, everyWord) => {
    if (string) {
        string = string.trim();
        if (everyWord) {
            return string.split(" ").map(word => {
                const lower = word.toLowerCase();
                return word.charAt(0).toUpperCase() + lower.slice(1);
            }).join(" ");
        } else {
            const lower = string.toLowerCase();
            return string.charAt(0).toUpperCase() + lower.slice(1);
        }
    } else {
        return ""; // Ou retourner un message d'erreur approprié si nécessaire
    }
};

export default toCapitalize