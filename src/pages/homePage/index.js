import React from 'react';
import { IoIosCalendar } from 'react-icons/io';
import { IoIosCreate } from 'react-icons/io';
import { IoIosChatbubbles } from 'react-icons/io';
import { IoIosBookmarks } from 'react-icons/io';
import { IoIosJournal } from 'react-icons/io';
import { IoIosExit } from 'react-icons/io';

import './styles.css';

function homePage({history}) {
    return (
        <body>
            <div class="menu-wrap">
                <input type="checkbox" class="toggler" />
                <div class="hamburger"><div></div></div>

                <div class="menu">
                    <div>
                        <div>
                            <ul>
                                <li><IoIosCalendar class="icon" /> <a href="/Planejamento">PLANEJAMENTO DE AULAS</a></li>
                                <li><IoIosCreate class="icon" /> <a href="/EntregaAtividade">CRIAÇÃO E ENTREGA DE ATIVIDADES</a></li>
                                <li><IoIosChatbubbles class="icon" /> <a href="/Chat">CHAT</a></li>
                                <li><IoIosBookmarks class="icon" /> <a href="/ListaAtividade">TRABALHOS, PROVAS E ATIVIDADES</a></li>
                                <li><IoIosJournal class="icon" /> <a href="/MaterialDidatico">MATERIAL DIDÁTICO</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <header class="showcase">
                <div class="container showcase-inner">
                    <h1>PORTAL DO ALUNO</h1>
                </div>
                <img src="/images/profile2.png" class="profile-image" alt="" />
                <div class="container showcase-outer">
                    <p>Bem-Vindo, Thales</p>
                </div>

                <button>
                <IoIosExit class="exit-icon" onClick={() => history.push('')} />
                </button>
            </header>
        </body>
    );
}

export default homePage;
