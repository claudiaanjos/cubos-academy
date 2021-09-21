import { useState } from "react";
import imagem1 from './assets/gallery/image 1.png';
import imagem2 from './assets/gallery/image 2.png';
import imagem3 from './assets/gallery/image 3.png';
import imagem4 from './assets/gallery/image 4.png';
import imagem5 from './assets/gallery/image 5.png';
import imagem6 from './assets/gallery/image 6.png';
import imagem7 from './assets/gallery/image 7.png';
import imagem8 from './assets/gallery/image 8.png';
import imagem9 from './assets/gallery/image 9.png';
import imagem10 from './assets/gallery/image 10.png';

import closed_menu from "./assets/closed-menu.svg";
import active_home from "./assets/active-home.svg";
import inactive_like from "./assets/inactive-like.svg";
import inactive_settings from "./assets/inactive-settings.svg";
import open_menu from "./assets/open-menu.svg";
import like from "./assets/like.svg";

import close_modal from "./assets/close-modal.svg";



function CriarGaleria(props) {


    function fecharModal() {
        setModal('escondido')
    }

    function abrirModal(img) {
        setModal(img)
    }
    const [modal, setModal] = useState('escondido')

    const [curtido, setCurtido] = useState('escondido')

    const [aside, setAside] = useState('')

    const [menuAberto, setMenuAberto] = useState('fechado')

    const [escondido, setEscondido] = useState('escondido')


    function curtir() {
        curtido === 'escondido' ? setCurtido('') : setCurtido('escondido')
    }

    return (
        <div>
            <div class="imagem">
                <img className={`curtida ${curtido}`} src={like} alt="curtida" />
                <img onClick={() => abrirModal(props.imagem)} src={props.imagem} alt="imagem animal" />
                <div>
                    <p>Lorem ipsum</p>
                    <span>há 1 mês</span>
                </div>
            </div>
            <div className={`modal ${modal}`}>
                <a target="_blank">
                    <img className={`curtida ${curtido}`} src={like} alt="curtida" />
                    <img className={'central'} onClick={(event) => event.stopPropagation} onDoubleClick={curtir} src={props.imagem} />
                </a>
                <button class="buttonClose">
                    <img onClick={fecharModal} src={close_modal} />
                </button>
            </div>
        </div>
    )
}


function App() {

    const imagens = [
        {
            imagem: imagem1,
            curtido: 'escondido'
        }, {
            imagem: imagem2,
            curtido: 'escondido'
        }, {
            imagem: imagem3,
            curtido: 'escondido'
        }, {
            imagem: imagem4,
            curtido: 'escondido'
        }, {
            imagem: imagem5,
            curtido: 'escondido'
        }, {
            imagem: imagem6,
            curtido: 'escondido'
        }, {
            imagem: imagem7,
            curtido: 'escondido'
        }, {
            imagem: imagem8,
            curtido: 'escondido'
        }, {
            imagem: imagem9,
            curtido: 'escondido'
        }, {
            imagem: imagem10,
            curtido: 'escondido'
        }]


    const [aside, setAside] = useState('')

    const [menuAberto, setMenuAberto] = useState('fechado')
    const [escondido, setEscondido] = useState('escondido')



    function abrirAside() {
        aside === '' ? setAside('aberto') : setAside('')
        escondido === '' ? setEscondido('escondido') : setEscondido('')
        menuAberto === 'aberto' ? setMenuAberto('fechado') : setMenuAberto('aberto');
    }


    return (
        <div >
            <div>
                <aside className={aside}>

                    <ul class="lista">
                        <li class="item1">
                            <button onClick={abrirAside}>
                                <img src={menuAberto === 'fechado' ? closed_menu : open_menu} />
                            </button>
                        </li>
                        <li class="item2">
                            <button>
                                <img src={active_home} />
                                <span className={escondido}>Início</span>
                            </button>
                        </li>
                        <li class="item3">
                            <button>
                                <img src={inactive_like} />
                                <span className={escondido}>Favoritos</span>
                            </button>
                        </li>
                        <li class="item4">
                            <button>
                                <img src={inactive_settings} />
                                <span className={escondido}>Configurações</span>
                            </button>
                        </li>
                    </ul>
                </aside>
                <div className={'main'}>
                    <h1>INÍCIO</h1>
                    <div className={`galeria  `}>

                        {imagens.map(e =>
                            <CriarGaleria
                                imagem={e.imagem}
                                curtido={e.curtido}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;