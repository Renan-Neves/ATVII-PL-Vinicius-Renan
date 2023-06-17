import { Component } from "react";
import BarraNavegacao from "./barraNav";
import FormClie from "./formClie";
import ListaClie from "./listaClie";
import FormProd from "./formProd";
import FormServ from "./formServ";
import ListaProd from "./listaProd";
import ListaServ from "./listaServ";
import Dados from "./dados";
import Compras from "./compras";
import Info from "./barraSecao";

type state = {
    tela: any
}

export default class Roteador extends Component<{}, state>{
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            tela: 'Clientes'
        }
        this.selecionarView = this.selecionarView.bind(this)
    }

    selecionarView(novaTela: string, evento: Event) {
        evento.preventDefault()
        console.log(novaTela);
        this.setState({
            tela: novaTela
        })
    }

    render() {
        let barraNavegacao = <BarraNavegacao seletorView={this.selecionarView} tema="" botoes={['Clientes', 'CadastroCliente','Produto', 'CadastroProduto', 'Serviço', 'CadastroServiço', 'Compras', 'Dados']} />
        if (this.state.tela === 'Clientes') {
            return (
                <>
                    {barraNavegacao}
                    <ListaClie tema="" />
                </>
            )
        } else if (this.state.tela === "CadastroCliente"){
            return (
                <>
                    {barraNavegacao}
                    <FormClie tema="" />
                </>
            )
        }  else if (this.state.tela === "CadastroProduto"){
            return (
                <>
                    {barraNavegacao}
                    <FormProd tema="" />
                </>
            )
        }  else if (this.state.tela === "CadastroServiço"){
            return (
                <>
                    {barraNavegacao}
                    <FormServ tema="" />
                </>
            )
        }  else if (this.state.tela === "Produto"){
            return (
                <>
                    {barraNavegacao}
                    <ListaProd tema="" />
                </>
            )
        }  else if (this.state.tela === "Serviço"){
            return (
                <>
                    {barraNavegacao}
                    <ListaServ tema="" />
                </>
            )
        } else if (this.state.tela === "Compras"){
            return (
                <>
                    {barraNavegacao}
                    <Compras tema="" />
                </>
            )
        } else if (this.state.tela === "Dados"){
            return (
                <>
                    {barraNavegacao}
                    <Dados />
                </>
            )
        }  else if (this.state.tela === "Info"){
            return (
                <>
                    {barraNavegacao}
                    <Info tema="" />
                </>
            )
        } 
    }
}