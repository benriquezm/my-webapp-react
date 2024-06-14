const Button = (props) => {
    const {
        btnName,
        btnSize,
        btnStyle,
        btnTag,
        btnValue,
        dataTestId,
        isOutline
    } = props;
    if (btnTag === 'input') {
        return(
            <input
                className={
                    `btn btn-${(isOutline) ? 'outline-' : ''}${btnStyle} 
                    ${(btnSize && btnSize === 'large') ? 'btn-lg' : 'btn-sm'}`
                }
                data-testid={dataTestId}
                type="button"
                value={btnValue}
            />
        );
    } else {
        return(
            <button
                type="button"
                className={
                    `btn btn-${(isOutline) ? 'outline-' : ''}${btnStyle} 
                    ${(btnSize && btnSize === 'large') ? 'btn-lg' : 'btn-sm'}`
                }
            >{btnName}</button>
        );
    }
};

export default Button;
