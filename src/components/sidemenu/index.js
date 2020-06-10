import React from 'react';
import {
    IoIosCalendar,
    IoIosCreate,
    IoIosChatbubbles,
    IoIosBookmarks,
    IoIosJournal,
} from 'react-icons/io';
import './styles.css';


export default function Sidemenu() {
    return (
        <div className="menu-wrap">
            <input type="checkbox" className="toggler" />
            <div className="hamburger">
                <div />
            </div>

            <div className="menu">
                <div>
                    <div>
                        <ul>
                            <li>
                                <IoIosBookmarks class="icon" />{' '}
                                <a href="/planejamento">
                                    PRÓXIMAS AULAS
                                </a>
                            </li>
                            <li>
                                <IoIosCreate class="icon" />{' '}
                                <a href="/entrega-atividade">
                                    ENTREGA DE EXERCÍCIOS
                                </a>
                            </li>
                            <li>
                                <IoIosChatbubbles class="icon" />{' '}
                                <a href="/chat">CHAT</a>
                            </li>
                            <li>
                                <IoIosCalendar class="icon" />{' '}
                                <a href="/lista-atividade">
                                    AGENDA ACADÊMICA
                                </a>
                            </li>
                            <li>
                                <IoIosJournal class="icon" />{' '}
                                <a href="/material-didatico">
                                    MATERIAL DIDÁTICO
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
