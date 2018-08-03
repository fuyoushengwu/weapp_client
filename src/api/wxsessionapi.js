import { wxRequest } from '../utils/wxRequest';

function jscode2Session(jscode) {
    return wxRequest(`/wxservice/wxsession?jscode=${jscode}`)
}
module.exports = { jscode2Session }