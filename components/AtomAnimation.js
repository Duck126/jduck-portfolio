

const AtomAnimation = (props) => {

    return (
        <div className="circularProgress" style={{top: props.top, right: props.left}}>
            <div className="circularProgresscircle" >
                <div className="dot">
                    <div className="rotateL infinite linear">
                        <div className="dot2"></div>
                        <div className="dot3"></div>
                        <div className="dot4"></div>
                        <div className="dot5"></div>
                    </div>
                    <div className="rotateR infinite linear" >
                        <div className="dot6"></div>
                        <div className="dot7"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AtomAnimation;