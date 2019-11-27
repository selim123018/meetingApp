const isAuthenticated=()=>{
    var token=localStorage.getItem('token');
    return token && token.length>10;
}
export default isAuthenticated;