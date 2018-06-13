let Task = require("mongoose").model("Task");

class UserController{
	all(req,res){
		Task.find({},(err,tasks)=>{
			if(err){
				console.log("Returned error",err);

				return res.json({message: "Error", error: err})
			}
			else{
				return res.json({message:"Success",tasks:tasks.reverse()});
			}
		})
	}

	create(req,res){
		console.log(req.body);
		let task = new Task(req.body);
		console.log(task);
		

		task.save((err)=>{
			if(err){
				console.log("Returned error",err);
				return res.json({message:"Error",error:err});
			}else{
				return res.json(task);
			}
		})
	}

	update(req,res){


		console.log(req.body)
		Task.findByIdAndUpdate(req.params.id,req.body,(err,task)=>{
			if(err){
				return res.json({message:"Error",error:err})
			}
			else{
				return res.json(task);
			}
		});
		// Task.findOne({_id:req.params._id},(err,task)=>{
		// 	task.title=req.body.title;
		// 	task.description=req.body.description;
		// 	task.completed=req.body.completed;

		// 	task.save((err)=>{
		// 		if(err){
		// 			return res.json({message:"Error",error:err});
		// 		}else{
		// 			return res.json(task);
		// 		}
		// 	});
		// })
	}

	findById(req,res){
		Task.findOne({_id:req.params.id},(err,task)=>{
			if(err){
				console.log("Returned error",err);
				return res.json({message:"Error",error:err})
				
			}else{
				return res.json(task);
			}
		});
	}

	destroy(req,res){
		Task.remove({_id:req.params.id},(err)=>{
			return res.json({message:"User has been deleted"});
		});
	}
}

module.exports = new UserController();