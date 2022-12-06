import './startbutton.scss';

export const StartButton = ({ buttonType }) => {
    let data;

    switch (buttonType) {
        case 'blue':
            data = {
                style: 'blueButton',
                text: 'START NOW'
            }
            break;
        case 'orange':
            data = {
                style: 'orangeButton',
                text: 'START NOW'
            }
            break;
        case 'enquire':
            data = {
                style: 'orangeButton',
                text: 'ENQUIRE NOW'
            }
            break;
    };

    return (
        <button className={data.style}>
            {data.text}
        </button>
    )
}
