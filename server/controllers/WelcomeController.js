import htmlReader from '../htmlReader';
import Welcome from '../../src/Views/Welcome';

exports.welcome = function (req, res){
    htmlReader("Welcome", res, Welcome);
}

