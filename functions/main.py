"""
main:
    Store Results JSON with query and list of images into Datastore
input:
    request
        - refer Google Cloud Function documentation
        - will accept a JSON object of the form {"query": " ... ", "results": " ... "}
    output
        - an echo of the requested JSON object
"""
def main(request):
    from google.cloud import datastore
    import shortuuid # This generates a random ID

    # Database operation
    output = request.get_json()
    db = datastore.Client(project="scenic-style-329702")
    key = db.key("Response", shortuuid.uuid())
    entity = datastore.Entity(key=key)
    entity["query"] = output["query"]
    entity["results"] = output["results"]
    db.put(entity)
    
    return f'{output["query"]} ::: {output["results"]}'