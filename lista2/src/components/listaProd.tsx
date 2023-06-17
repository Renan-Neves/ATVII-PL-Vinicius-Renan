/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";

type props = {
    tema: string
}

export default class ListaProd extends Component<props>{
    render() {
        let tema = this.props.tema
        return (
            <>
            <div className="container-fluid">
                <div className="list-group">
                <div className='title-register'>
                    <h2>Produtos Cadastrados</h2>
                </div>
                    <a href="#" className="list-group-item list-group-item-action">Produto 1</a>
                    <a href="#" className="list-group-item list-group-item-action">Produto 2</a>
                    <a href="#" className="list-group-item list-group-item-action">Produto 3</a>
                    <a href="#" className="list-group-item list-group-item-action">Produto 4</a>
                </div>
            </div>
            </>
        )
    }
}