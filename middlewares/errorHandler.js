const {constants} = require('../constants');
const errorHandler = (err,req,res,next) =>{
const statuscode = res.statuscode ? res.statuscode :500;// Default to 500 if status code is not set
switch(statuscode){
    case constants.NOT_FOUND:
      res.json({
        title:"Not Found",
        message: err.message || "Resource not found",
        stackTrace: err.stack,
      });
      break;
      case constants.VALIDATION_ERROR:
        res.json({
            title:"Validation Error",
            message: err.message || "Invalid request data",
            stackTrace: err.stack,
        });
        case constants.UNAUTHORIZED:
        res.json({ 
            title:"Unauthorized",
            message: err.message || "You are not authorized to access this resource",
            stackTrace: err.stack,
        });
        case constants.FORBIDDEN:
        res.json({
            title:"Forbidden",
            message: err.message || "You do not have permission to access this resource",   
            stackTrace: err.stack,
        });
        case constants.INTERNAL_SERVER_ERROR:
        res.json({
            title:"Internal Server Error",
            message: err.message || "An unexpected error occurred",
            stackTrace: err.stack,
        }); 
        default:
            console.log("No erroe found");
        break;


}
};
module.exports = errorHandler;