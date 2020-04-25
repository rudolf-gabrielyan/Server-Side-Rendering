import htmlReader from '../htmlReader';
import Signup from '../../src/Views/Signup';
import Login from '../../src/Views/Login';


exports.signup = function (req, res){
    htmlReader("Signup", res, Signup);
}

exports.login = function (req, res){
    htmlReader("Login", res, Login);
}