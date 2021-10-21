import requests
 
url = "https://imdb-api.com/en/API/Title/k_1234567/tt1832382"
 
payload = {}
headers= {}
 
response = requests.request("GET", url, headers=headers, data = payload)
 
print(response.text.encode('utf8'))