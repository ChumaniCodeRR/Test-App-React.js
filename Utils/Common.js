export const getUser = () => {
    const userStr = sessionStorage.getItem('user');
    if(userStr) return JSON.parse(userStr);
    else return null;
}

// return token session 


export const getToken = () => {
    return sessionStorage.getItem('token') || null;

}

// remove token and user 

export const removeUserSession = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');

}

// set toke and user 

export const setUserSession = (token,user) => {
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('user', JSON.stringify(user));

}
