const React = require('react')

function New(props) {
    return(
        <div>
            <h1>New Food Log</h1>
            <a href='/foods'>Go Back to Food Logs</a>
            <form action='/foodlogs' method='POST'>
                Title: <input type="text" name="title"/><br/>
                Breakfast: <input type="text" name="breakfast"/><br/>
                Lunch: <input type="text" name="lunch"/><br/>
                Dinner: <input type="text" name="dinner"/><br/>
                <input type="submit" value="Create a Food Log"/>
            </form>
        </div>
    )
}

module.exports = New 