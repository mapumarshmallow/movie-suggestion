const { Datastore, Key } = require("@google-cloud/datastore")

const datastore = new Datastore({ projectId: process.env.PROJECT_ID })

// Get all of the results from the datastore and return a listing of that
module.exports.getResponses = async function () {
    const query = datastore.createQuery("Response")
    const [responses] = await datastore.runQuery(query)
    return responses.map(e => { return { query: e.query, results: e.results, id: e[datastore.KEY].name } })
}

// Get a specific response based on the id of the result
module.exports.getResponse = async function (id) {
    const query = datastore.createQuery("Response").filter('__key__', '=', datastore.key(['Response', id]))
    const [responses] = await datastore.runQuery(query)
    const response = responses[0]
    return { query: response.query, results: response.results }
}