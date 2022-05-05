import React from "react"
import {Table} from "react-bootstrap";

class Alunos extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            alunos: []
        }
    }

    componenentDidMount(){
        alert("O componente Alunos foi montado!")

    }

    componentWillUnmount(){
        alert("O componente Alunos foi desmontado!")


    }

    render(){
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Opções</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.alunos.map((aluno) =>

                        <tr>
                        <td>{aluno.nome}</td>
                        <td>{aluno.email}</td>
                        <td>Atualizar Exluir</td>
                        </tr>
                        
                        )
                    }
                </tbody>
            </Table>
        )
    }

}


export default Alunos;