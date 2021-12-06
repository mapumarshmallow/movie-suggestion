const { Datastore, Key } = require("@google-cloud/datastore")

const datastore = new Datastore({ projectId: "scenic-style-329702" })

module.exports.getResponses = async function () {
    const query = datastore.createQuery("Response")
    const [responses] = await datastore.runQuery(query)
    // responses.forEach(res => console.log(res[datastore.KEY].name))
    return responses.map(e => { return { query: e.query, results: e.results, id: e[datastore.KEY].name } })
}

module.exports.getResponse = async function (id) {
    const query = datastore.createQuery("Response").filter('__key__', '=', datastore.key(['Response', id]))
    const [responses] = await datastore.runQuery(query)
    const response = responses[0]
    return { query: response.query, results: response.results }
}