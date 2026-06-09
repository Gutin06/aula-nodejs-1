class Musica{
    constructor(nome, artista){
        this.nome = nome;
        this.artista = artista;
        this.capa;
        this.partes = []
    }
    addParte(parte){
        try{
            if(!parte.letra || !parte.tempoEspera || !parte.tag){
                throw new Error("Parte da música tá com problema");
                
            }

            this.partes.push(parte);

        }catch(error){
            console.log('Erro ao addParte:' + error.message)
        }
    }
    getLetraInteira(){
        let letra = "";

        this.partes.forEach((parte) => {
            letra += parte.letra
        });


        
    }
}


module.exports = {Musica}