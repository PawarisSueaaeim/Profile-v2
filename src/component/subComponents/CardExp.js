function CardExp(props) {

    console.log("this is props of CardExp", props);

    const classes = props.className;

    return (
        <div className={classes}>
            {props.children}
        </div>
    );

    
};

export default CardExp;