function CardExp(props) {

    console.log("this is a CardExp", props);
    console.log("this is a props children", props.children);

    const {isActive} = props;

    const getClassName = () => {
        props.children.map(() => {
            
        });
    };

    const classes = props.className;

    return (
        <div className={classes}>
            {props.children}
        </div>
    );

    
};

export default CardExp;