/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length === 0) return ""
    const [first, ...rest] = strs;

    for (let i = 0; i < first.length; i++) {
        const ch = first[i];
        for (let current of rest) {
            if (ch !== current[i]) return first.slice(0, i);
        }
    }

    return first;
};