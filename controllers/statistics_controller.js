var models = require('../models/models.js');

exports.statistics =  function(req, res){
	models.Quiz.findAll({include: models.Comment}).then(function(quizes) {
	var npreguntas=0;//Numero de preguntas
	var ncomments=0;//Numero de comentarios
	var mediacomments=0;//Media de comentarios por pregunta
	var npregsin=0;//Numero de preguntas sin comentarios
	var npregcon=0;//Numero de preguntas con comentarios

		
		for (quiz in quizes){
		   npreguntas++;
		   for(comment in quizes[quiz].Comments){
			if (comment == 0){
			  npregcon++;
			}
			ncomments++;
		   }
		}
		npregsin = npreguntas - npregcon;
		mediacomments = ncomments / npreguntas;
		res.render('quizes/statistics', { npreguntas:npreguntas, ncomments:ncomments, npregcon:npregcon, npregsin:npregsin,
              mediacomments:mediacomments, quiz: req.quiz, errors: []}); 	

	});
}; 	

