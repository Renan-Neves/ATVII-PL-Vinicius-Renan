/* eslint-disable jsx-a11y/anchor-is-valid */
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

// eslint-disable-next-line no-unused-vars
import '../stylesheets/barraSecao.css'


export default function BarraSecao(props: any) {
    const gerarSecoes = () => {
        if (props.secoes.length <= 0) {
            return <></>
        } else {
            let listaSecoes = props.secoes.map((valor: any) =>
                <span className={props.secaoAtual === `${valor}` ? 'selecionado' : ''}
                      onClick={(e) => props.secaoAtual === `${valor}` ? props.alterarSecao('') : props.alterarSecao(`${valor}`)}
                >{valor}</span>
            )
            return listaSecoes
        }
    }

    return (
        <div className="container-fluid">
            <div className="barra-secao">
                {gerarSecoes()}
            </div>
        </div>
    )
}