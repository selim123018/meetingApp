import decoded from 'jwt-decode';
const currenUser=()=>{
    var userToken=localStorage.getItem('token');
    if(userToken){
      var user=decoded(userToken);
      return user.role
    }else{
      return null
    }
}
export default currenUser;