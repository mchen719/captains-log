const React = require('react')

function Show(props) {
    return(
        <div>
            <h1>{props.food.title}</h1>
            <a href='/foods'>Go Back to Food Logs</a>

            <p>{props.food.breakfast}</p>
            <p>{props.food.lunch}</p>
            <p>{props.food.dinner}</p>

            <form action={`/foods/${props.food._id}?_method=DELETE`} method ='POST'>
                <input type="submit" value={`Delete This ${props.food.title} Entry`}/>
            </form>

            <div>
                <a href={`/foods/${props.food._id}/edit`}>
                    <button>{`Edit This ${props.food.title} Entry`}</button>
                </a>
            </div>
        </div>
    )
}

module.exports = Show