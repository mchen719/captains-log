const React = require("react")

function Index(props) {
    return(
        <div>
            <h1>List of Food Logs</h1>
            <a href='/foods/new'>Create a New Food Log</a>
            <ul>
                {
                    props.foods.map((food) => {
                        return(
                            <li key={food._id}>
                                <a href={`/foods/${food._id}`}>{food.title}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

module.exports = Index