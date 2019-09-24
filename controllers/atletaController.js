module.exports = function(app){
  
  app.get('/atletas', function(req, res){
    console.log('Recebida requisicao de teste na porta 3001H.')
    res.send('OK.');
  });

  app.post('/atletas/atleta', function(req, res){
    console.log('Recebida requisicao de teste na porta 3001.')

    const connection = app.persistencia.connectionFactory();
    const atletaDao = new app.persistencia.AtletaDao(connection);

    let atleta = req.body;
    console.log(atleta);

    
    atleta.dataEntrada = new Date;

    atletaDao.salva(atleta, (erro,resultado)=>{
      if(erro){
        console.log('Erro ao inserir no banco:' + erro);
        res.status(500).send(erro);
      } else {
      atleta.id = resultado.insertId;
      console.log('atletaCriado criado');
      }
    });
     
    console.log(atleta)
    res.send(atleta);
  });

  
  };