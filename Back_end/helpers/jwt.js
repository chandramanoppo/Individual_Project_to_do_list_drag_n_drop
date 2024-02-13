const jwt = require('jsonwebtoken')

const secret = 'secret'

const createToken = (payload) => { // buat nge encode payload yang mau kita simpan pas login jd access token (kayak ngecompress)
    return jwt.sign(payload, secret)
}

const verifyToken = (token) => {
    return jwt.verify(token, secret)
} // kayak nge decode token yang udah di buat (kayak unzip)

module.exports = { createToken, verifyToken }