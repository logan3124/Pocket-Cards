import './Solitaire.scss';
import { SolitaireColumn } from '../../Components/SolitaireColumn/SolitaireColumn';
import { solitaireDeck } from './SolitaireLogic';

export const Solitaire = () => {
    return (
        <div className='solitaire'>
            <header className='top'>
                <div className='menu'>Menu</div>
                <div className='bet'>{0}</div>
                <h1>Pocket Cards</h1>
                <div className='funds'>{0}</div>
                <div className='theme'>Theme</div>
            </header>
            <main>
                <div className='solitaireRow'>
                    <SolitaireColumn />
                    <SolitaireColumn />
                    <SolitaireColumn />
                    <SolitaireColumn />
                    <SolitaireColumn />
                    <SolitaireColumn />
                    <SolitaireColumn />
                </div>
            </main>
        </div>
    )
}