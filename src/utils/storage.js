export const setStorage = (key, value) => {
    if (!window.localStorage) return alert('sorry, your client do not support local storage');
    localStorage.setItem(key, value);
}

export const getStorage = (key) => {
    return localStorage.getItem(key);
}