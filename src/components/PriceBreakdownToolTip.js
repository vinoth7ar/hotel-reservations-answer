import React, {useState} from "react";

const PriceBreakdownToolTip = (props) => {

    const [hover, setHover] = useState(false);

    const onClickHandler = () => {
        setHover(!hover);
    };

    const tooltipStyle = {
        display: hover ? 'block' : 'none',
        width: '200px',
        backgroundColor: 'black',
        color: '#fff',
        textAlign: 'center',
        borderRadius: '10px',
        padding: '15px 0',
        position: 'absolute',
        zIndex: '1',
    };

    return (
        <div>
            <div onClick={onClickHandler}>
                {props.totalPrice}
            </div>
            <div>
                <div style={tooltipStyle}>
                    <table>
                        <tr>
                            <th>Price BreakDown</th>
                        </tr>
                    </table>
                    <tr>
                        <td>{props.breakDownPrice}</td>
                    </tr>
                </div>
            </div>
        </div>
    );
};

export default PriceBreakdownToolTip;
