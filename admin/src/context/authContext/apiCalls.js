import axios from "axios";
import User from "../../pages/user/User";
import { loginFailure, loginStart, loginSuccess } from "./AuthActions";

export const login = async (user, dispatch)  => {
       dispatch(loginStart());
       try{
        const res = axios.post("auth/login", User);
        dispatch(loginSuccess(res.data));
       }catch(err){
        dispatch(loginFailure());
       }
};
