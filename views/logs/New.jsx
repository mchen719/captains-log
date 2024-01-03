const React = require('react')

function New(props) {
    return (
        <div>
            <h1>New Captain's Log</h1>
            <a href='/logs'>Go Back to Log Index</a>
            <form action='/logs' method='POST'>
                Title: <input type="text" name="title" /><br/>
                Entry: <input type="text" name="entry"/><br/>
                Ship is Broken: <input type="checkbox" name="shipIsBroken"/><br/>
                <input type="submit" value="Create a Log"/>
            </form>
        </div>
    )
}

module.exports = New