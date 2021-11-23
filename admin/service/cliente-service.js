const listaClientes = async()=>{
    try{
        let resposta = await fetch(`http://localhost:3000/profile`);
        if(resposta.ok){
            return  resposta.json();
        }
    }
    catch(erro){
        throw new Error(`Não foi possível listar os clientes, erro: ${erro}`);
    }
}


const criaCliente = async (nome, email)=>{
    try{
        let resposta = await fetch(`http://localhost:3000/profile`,{
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json' 
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
        })
        if(resposta.ok){
            return resposta.body
        }
    }
    catch(erro){
        throw new Error(`Não foi possível gravar cliente! Erro: ${erro}`);
    }    
}


const removeCliente = async(id)=>{
    let resposta = await fetch(`http://localhost:3000/profile/${id}`,{
        method: 'DELETE'
    })
    if(!resposta.ok){
        throw new Error('Não foi possível remover cliente');
    }
}

const detalhaCliente = async (id)=>{
    try{
        let resposta = await fetch(`http://localhost:3000/profile/${id}`);
        if(resposta.ok){
            return resposta.json();
        }
    }
    catch(erro){
        throw new Error('Não foi possível detalhar o cliente');
    }
}


const atualizaCliente = async (id, nome, email)=>{
    
        let resposta = await fetch(`http://localhost:3000/profile/${id}`,{
        method: 'PUT',
        headers: {
            'Content-Type' : "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    })
        if(resposta.ok){
            return resposta.json();
        }
        console.log(resposta)
        throw new Error(`Não foi possível atualizar o cliente! Erro: ${resposta.statusText}`);
}

export const clienteService = {
    listaClientes,
    criaCliente,
    removeCliente,
    detalhaCliente,
    atualizaCliente
}