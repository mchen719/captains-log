const React = require('react')

function Edit(props) {
    const { title, _id, shipIsBroken, entry} = props.log

    return(
        <div>
            <h1>{title} Edit Page</h1>
            <a href='/logs'>Go Back to Captain's Logs</a>
            <form action={`/logs/${_id}?_method=PUT`} method='POST'>
                Title: <input type="text" name="title" defaultValue={title}/><br/>
                Entry: <input type="text" name="entry" defaultValue={entry}/><br/>
                Ship is Broken: <input type="checkbox" name="shipIsBroken" defaultValue={shipIsBroken}/><br/>
                <input type="submit" value="Update a Log"/>
            </form>
        </div>
    )
}

module.exports = Edit