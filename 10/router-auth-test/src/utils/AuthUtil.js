import users from '@/data/users.json';
import roles from '@/data/roles.json';

const setUserInfo = (userInfo) => {
    if (userInfo && userInfo.authenticated) // 인가 이용자
        window.localStorage.setItem('userInfo', btoa(JSON.stringify(userInfo)));
    else                                    // 비인가 이용자
        window.localStorage.removeItem('userInfo');
}

const getUserInfo = () => {
    const strUserInfo = window.localStorage.getItem('userInfo');
    if (strUserInfo)    return JSON.parse(window.atob(strUserInfo));
    else                return { authenticated: false };
}

/**
 * 
 * @param {string} userid 
 * @param {string} userpw 
 * @param {callback} success 
 * @param {callback} fail 
 */
const loginProcess = (userid, userpw, success, fail) => {
    // 인증 처리
    const user = users.find((u) => u.userid === userid && u.password === userpw); // 임시

    if (user) {
        const userinfo = { authenticated: true, userid: user.userid, roles: user.roles };
        setUserInfo(userinfo);
        success();
    } else if (fail) {
        fail();
    }
}

/**
 * 
 * @param {callback} success 
 */
const logoutProcess = (success) => {
    setUserInfo(null);
    success();
}

/**
 * 
 * @param {string} reqPath 요청 경로
 * @returns {boolean} 접근 가능 여부
 */
const isMatchToRoles = (reqPath) => {
    console.log('1 reqPath', reqPath);

    const path = roles.find((role) => role.path === reqPath);
    console.log('2 path', path);
    if (!path) return false;        // 미정의: 접근 불가 AssertError

    if (path.roles.some(r => r === 'everybody')) return true; // 모든 사용자: 접근 가능
    
    const userInfo = getUserInfo();
    console.log('3 userInfo', userInfo);
    if (!userInfo.authenticated) return false; // 비인가: 접근 불가

    return path.roles.some((r) => userInfo.roles.includes(r)); // 권한 검사
}

export { setUserInfo, getUserInfo, loginProcess, logoutProcess, isMatchToRoles };