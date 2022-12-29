function CardExp(props) {

    return (
        <div>
            {props.children.map((item,index) => {
                let isEvent = index%2 === 0;
                return (
                    <div className={isEvent ? `${props.className} left`: `${props.className} right`}>
                        {props.children[index]}
                    </div>);
                })}
        </div>
    );
};

export default CardExp;