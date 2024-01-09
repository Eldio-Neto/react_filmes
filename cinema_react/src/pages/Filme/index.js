import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";

function Filme (){
    const {id} = useParams();
    const [filme, setFilme] = useState({});
    const [loading, serLoading] = useState(true);
    useEffect(() =>{
         async function loadFilmes (){
            await api.get(`/movie/${id}`,{
                params:{
                    api_key:'f46cf56386ef49f4ae57f91317162b84',
                    language:'pt-br',
                }
            }).then(
                (response)=>{
                    setFilme()
                }
            ).catch(()=>{

            });


        };

        loadFilmes();
    },[])

    if(loading){
        div
    }

    return(
        <div>
            <h1>Bem vindo aos Detalhes do Filme</h1>
        </div>
    )
}

export default Filme;