import {addnewContact,findDetails,removebyId} from "../controllers/controller";
import {register,login,loginRequired} from "../controllers/userController";
const routes =(app)=>{

	app.route("/dashbord")
		.get(loginRequired,findDetails)
		.post(loginRequired,addnewContact);
	

	app.route("/kalash/register")
		.post(register);

	app.post("/login",login);

	
	
};

export default routes;



