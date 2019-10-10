 const conexao = require('../config/conexao')

 
 
 exports.listar = (req, res) => {

   const query = "select * from tarefas"

   conexao.query(query, (err, rows) => {
      if (err){
        res.status(500)
        res.json({"mensagem": "Internal Serve Error"})
        console.log(err)
      } else if (rows.length > 0){
        res.status(200)
        res.json(rows)
      } else {
        res.status(404)
        res.json({"mensagem":"Nenhuma tarefa encontrada"})
      }
   })
 }

 exports.listarPorId = (req, res) =>{
   
  const id = req.params.id
  const query = "select * from tarefas where id = ?"

  conexao.query(query, [id], (err, rows) => {
    if (err){
      res.status(500)
      res.json({"mensagem": "Internal Serve Error"})
    } else if (rows.length > 0){
      res.status(200)
      res.json(rows)
    } else{
      res.status(404)
      res.json({"mensagem": "Nenhuma tarefa encontrada"})
    }
  })
 }

exports.inserir = (req, res) =>{

  const tarefa = []
  tarefa.push(req.body.descricao)
  tarefa.push(req.body.data)
  tarefa.push(req.body.realizado)
  tarefa.push(req.body.categoria_id)

  const query = "insert into tarefas (descricao, data, realizado, categoria_id) value (?, ?, ?, ?)"


  conexao.query(query, tarefa, (err, rows) =>{
    if (err){
      res.status(500)
      res.json({"messagem": "Internal Serve Error"})
      console.log(err)
    }else{
      res.status(201)
      res.json({"messagem": "Tarefa criada com sucesso", "id": rows.insertId})
    }
  })
} 

exports.alterar = (req, res) =>{

  const tarefas = []
  tarefas.push(req.body.descricao)
  tarefas.push(req.body.data)
  tarefas.push(req.body.realizado)
  tarefas.push(req.body.categoria_id)
  tarefas.push(req.params.id)
  
  const query = "update tarefas set descricao = ?, data = ?, realizado = ?, categoria_id = ? where id = ?"

  conexao.query(query, tarefas, (err, rows) => {
  if(err){
    res.status(500)
    res.json({"messagem": "Internal Serve Error"})
  }else if(rows.affectedRows > 0){
    res.status(202)
    res.json({"messagem": "Tarefa alterada", "id": req.params.id})
  }else{
    res.status(404)
    res.json({"messagem": "tarefa não encontrada"})
  }
})

}

exports.deletar = (req, res) =>{
  
  const id = req.params.id
 
  const query = "delete from tarefas where id =?"

  conexao.query(query, [id], (err, rows) =>{
    if(err){
      res.status(500)
      res.json({"messagem":"Internal Serve Error"})

    }else if (rows.affectedRows >0){
      res.status(200)
      res.json({"messagem": "tarefa excluida com sucesso", "id": id})
    }else{
      res.status(404)
      res.json({"messagem": "tarefa não encontrada"})
    }
  })

}


