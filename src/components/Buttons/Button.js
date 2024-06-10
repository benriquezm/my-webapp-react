const Button = (props) => {
    const { buttonTag, classButton, hyperlink, isOutline, typeButton, sizeButton, valueButton } = props;
    
    switch (buttonTag) {
        case "anchor":
            return (
                <a 
                    className={(isOutline) ? 
                        `btn btn-outline-${classButton} ${(sizeButton) && sizeButton}` : 
                        `btn btn-${classButton} ${(sizeButton) && sizeButton}`}
                    href={hyperlink}
                    role="button">{valueButton}</a>
            );
        case "button":
            return (
                <button
                    className={(isOutline) ? 
                        `btn btn-outline-${classButton} ${(sizeButton) && sizeButton}` : 
                        `btn btn-${classButton} ${(sizeButton) && sizeButton}`}
                    type={typeButton}>{valueButton}</button>
            );
        default:
            return (
                <input
                    className={(isOutline) ? 
                        `btn btn-outline-${classButton} ${(sizeButton) && sizeButton}` : 
                        `btn btn-${classButton} ${(sizeButton) && sizeButton}`}
                    type={typeButton}
                    value={valueButton}/>
            );
    }
};

export default Button;