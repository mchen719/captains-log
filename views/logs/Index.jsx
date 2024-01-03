const React = require('react')

function Index(props) {
    return(
        <div>
            <h1>List of Captain's Logs</h1>
            <a href='/logs/new'>Create a New Log</a>
            <ul>
                {
                    props.logs.map((log) => {
                        return(
                            <li key={log._id}>
                                <a href={`/logs/${log._id}`}>{log.title}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

module.exports = Index