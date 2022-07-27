import './SolitaireGameButtons.scss';

export const SolitaireGameButtons = (props) => {
    return (
        <div>
            <div className='solitaireButtons'>
                <button onClick={props.handleUndo}>
                    Undo
                </button>
                <button>
                    New Game
                </button>
            </div>
        </div>
    )
}