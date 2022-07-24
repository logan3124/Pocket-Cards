import './SolitairePile.scss';

export const SolitairePile = (props) => {
    return (
        <div className='pile' onDrop={props.cardDrop}>

        </div>
    )
}