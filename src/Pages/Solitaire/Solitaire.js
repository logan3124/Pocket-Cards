import './Solitaire.scss';
import { SolitaireColumn } from '../../Components/SolitaireColumn/SolitaireColumn';
import { SolitaireDeck } from '../../Components/SolitaireDeck/SolitaireDeck';
import { SolitairePile } from '../../Components/SolitairePile/SolitairePile';
import { SolitaireButtons } from '../../Components/SolitaireButtons/SolitaireButtons';
import { solitaireDeck } from './SolitaireLogic';
import { Player } from '../../Components/Player/Player';

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
                <div className='solitaireDisplay'>
                    <div className='playerRow'>
                        <Player theme='red' />
                        <p>Time: </p>
                        <p>Moves: </p>
                        <p>Score: </p>
                    </div>
                    <div className='solitaireRow'>
                        <SolitaireColumn />
                        <SolitaireColumn />
                        <SolitaireColumn />
                        <SolitaireColumn />
                        <SolitaireColumn />
                        <SolitaireColumn />
                        <SolitaireColumn />
                    </div>
                </div>
                <div className='solitaireCards'>
                    <SolitaireDeck />
                    <div className='pileRow'>
                        <SolitairePile />
                        <SolitairePile />
                        <SolitairePile />
                        <SolitairePile />
                    </div>
                </div>
            </main>
            <footer>
                <SolitaireButtons />
            </footer>
        </div>
    )
}