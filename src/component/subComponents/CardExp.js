function CardExp(props) {

    // console.log("this is a CardExp", props);
    // console.log("this is a props children", props.children);

    const getClassName = () => {
        if (props.children.map((items,index) => {
            return index
        })%2 === 0){
            return "container-exp left";
        }else{
            return "container-exp right";
        }
    };

    const classes = props.className + getClassName();

    return (
        <div className={getClassName()}>
            {props.children}
        </div>
    );

    
};

export default CardExp;