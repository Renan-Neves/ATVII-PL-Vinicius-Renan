import { Component } from "react";

type props = {
    tema: string
}

export default class FormProd extends Component<props> {

    render() {
        let tema = this.props.tema
        return (
            <>
            <form style={{marginLeft: '15vw', marginRight: '15vw'}}>
            <div className='form-label-big' style={{ color: "purple", margin: 10, fontWeight: 'bold' }}>Nome do produto</div>
                <div className="form-floating mb-3" style={{margin: 10}}>
                    <input type="text" className="form-control" id='rg' placeholder="rg" aria-label="rg" aria-describedby="basic-addon1" />
                    <label className='form-label-placeholder'>ex: Bolinha...</label>
                </div>
            <div className='form-label-big' style={{ color: "purple", margin: 10, fontWeight: 'bold' }}>Preço</div>
                <div className="form-floating mb-3" style={{margin: 10}}>
                    <input type="text" className="form-control" id='rg' placeholder="rg" aria-label="rg" aria-describedby="basic-addon1" />
                    <label className='form-label-placeholder'>R$00,00</label>
            </div>
            <div className="input-group mb-3" style={{margin: 10}}>
                        <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Cadastrar</button>
            </div>
            </form>
            </>
        )
    }
}