/**
 * Capitalize Words
 * @param {string} string - The input string to be capitalized.
 * @param {boolean} everyWord - Whether to capitalize every word or just the first one.
 * @returns {string} - The capitalized string.
 */
const toCapitalize = (string, everyWord) => {
    if (!string) {
        return ""; // Handle empty input
    }

    const trimmedString = string.trim();
    if (everyWord) {
        const words = trimmedString.split(" ");
        const capitalizedWords = words.map(word => {
            const lower = word.toLowerCase();
            return word.charAt(0).toUpperCase() + lower.slice(1);
        });
        return capitalizedWords.join(" ");
    } else {
        const lower = trimmedString.toLowerCase();
        return trimmedString.charAt(0).toUpperCase() + lower.slice(1);
    }
};

export default toCapitalize;
