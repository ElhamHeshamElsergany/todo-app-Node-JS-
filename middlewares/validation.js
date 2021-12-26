const validateTodo = (req,res,next)=>{
    const {title}=req.body;
    if(!title){
        next('error , title not found')
    }
    next();
}
module.exports={
    validateTodo
}