
export const capitalize = (inputString) => {
    if ( inputString === '') return '';
    const [firstChar, ...otherChars] = inputString;
    return `${firstChar.toUpperCase()}${otherChars.join('')}`;
};

//export default capitalize;
