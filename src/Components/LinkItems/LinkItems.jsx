import "./LinkItems.css"

function LinkItems(props){
    return(
        <div id="butdiv">
            <button>
                <label>{props.SocialContact}</label>
            </button>
        </div>
    )
}

export default LinkItems