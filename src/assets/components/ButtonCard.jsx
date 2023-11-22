function ButtonCard({ onClick, buttonText, disabled }) {
    return (

            <button onClick={onClick} disabled={disabled}>
                {buttonText}
            </button>

    );
}

export default ButtonCard;