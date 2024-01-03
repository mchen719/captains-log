const React = require('react')

function Show(props) {
    return(
        <div>
            <h1>{props.log.title}</h1>
            <a href='/logs'>Go Back to Captain's Logs</a>

            <p>
                {props.log.entry}
            </p>
            
            <p>
                {props.log.shipIsBroken? 'The ship is broken': 'The ship is functional'}
            </p>
    
            <form action={`/logs/${props.log._id}?_method=DELETE`} method ='POST'>
                <input type="submit" value={`Delete This ${props.log.title} Entry`}/>
            </form>

            <div>
                <a href={`/logs/${props.log._id}/edit`}>
                    <button>{`Edit This ${props.log.title} Entry`}</button>
                </a>
            </div>
        </div>
    )
}

module.exports = Show