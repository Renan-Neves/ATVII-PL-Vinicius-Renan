import { Component } from "react";

type props = {
    tema: string
}

export default class FormClie extends Component<props> {

    render() {
        let tema = this.props.tema
        return (
            <>
            <div className="container-fluid">
                <form style={{marginLeft: '15vw', marginRight: '15vw'}}>
                <div className="form-label-big" style={{ color: "purple", marginBottom: 10, fontWeight: 'bold' }}>Informações pessoais</div>
                <div className='form-floating mb-3'>
                        <input type="text" className="form-control" id='nome' placeholder="nome" aria-label="nome" aria-describedby="basic-addon1" />
                        <label className='form-label-placeholder'>Nome</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id='nomeSocial' placeholder="nomeSocial" aria-label="nomeSocial" aria-describedby="basic-addon1" />
                        <label className='form-label-placeholder'>Nome social</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id='cpf' placeholder="cpf" aria-label="cpf" aria-describedby="basic-addon1" />
                        <label className='form-label-placeholder'>CPF</label>
                    </div>
                    <div className='form-label-big' style={{ color: "purple", marginBottom: 10, fontWeight: 'bold' }}>RG</div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id='rg' placeholder="rg" aria-label="rg" aria-describedby="basic-addon1" />
                        <label className='form-label-placeholder'>RG</label>
                    </div>
                    <div className='form-label-big' style={{ color: "purple", marginBottom: 10, fontWeight: 'bold' }}>Telefone</div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id='rg' placeholder="rg" aria-label="rg" aria-describedby="basic-addon1" />
                        <label className='form-label-placeholder'>Telefone</label>
                    </div>
                    <div className='form-label-big' style={{ color: "purple", marginBottom: 10, fontWeight: 'bold' }}>Pets</div>
                    <div className='mb-3'>
                <div className='form-floating mb-3'>
                    <input type="text" id='nomePet' aria-label="nome do pet" className="form-control" placeholder='Nome'></input>
                    <label className='form-label-placeholder'>Nome</label>
                </div>
                <div className='input-group mb-3'>
                    <div className='form-floating mb-3'>
                        <input type="text" id='tipoPet' aria-label="tipo do pet" className="form-control" placeholder='Tipo'></input>
                        <label className='form-label-placeholder'>Tipo</label>
                    </div>
                    <div className='form-floating mb-3'>
                        <input type="text" id='racaPet' aria-label="raça do pet" className="form-control" placeholder='Raça'></input>
                        <label className='form-label-placeholder'>Raça</label>
                    </div>
                </div>
                <div>
                    <select className="form-select" aria-label="gênero do pet">
                        <option selected disabled>Gênero</option>
                        <option value="F">Fêmea</option>
                        <option value="M">Macho</option>
                    </select>
                </div></div>
                    <div className="input-group mb-3">
                        <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Cadastrar</button>
                    </div>
                </form>
            </div>
            </>
        )
    }
}