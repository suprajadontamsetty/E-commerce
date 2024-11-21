import jwt from 'jsonwebtoken'
import cartRouter from '../routes/cartroute';

const authUser = async (req, res, next) => {

const {token} = req.headers;

if(!token) {
    return res.json({success:false, message:"Not authorized login again"})

}

try {
    const token_deocde = jwt.verify(token, process.env.JWT_SECRET)

    req.body.userId = token_deocde.id
    next()
    
} catch (error) {

    console.log(error)
    res.json({success:false, message:error.message})
    
}

}

export default authUser