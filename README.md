# Mosearch

Made by Long Nguyen and Ivan Ahumada

## About

Mosearch is a web app that's about seeing people's perceptions of the world. The best way to contextualize our app is by asking a question:

> What comes to mind when people think of the color red?

Some may say roses, and others may say exit signs. Everyone's got a different perception of the color red. Our app is about exploring these perspectives through search.

## Usage

The app makes more sense in the context of a prompt. You can try answering to yourself: "what do I think of when I think of the color red?"

You can search for responses here:

https://scenic-style-329702.uc.r.appspot.com/

You can see the results of various search queries to this prompt here:

https://scenic-style-329702.uc.r.appspot.com/research/

# Development

We use the following technologies:

- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/docs/intro)
- [Google Cloud Functions](https://cloud.google.com/functions)
- [Google Datastore](https://cloud.google.com/datastore)
- [Google AppEngine](https://cloud.google.com/appengine)

## Developing Locally

Make sure [Node.js](https://nodejs.org/en/) is installed.
You will need your own [Google Cloud](https://cloud.google.com/) workspace as well as your own [Unsplash API key](https://unsplash.com/developers) because of security requirements.

### Environment Setup

1. Retrieve an [Unsplash API key](https://unsplash.com/developers). It should be free for development.
2. Rename `default.env` to `.env` in the root directory. In that file, please update with the relevant information.

   > We will allow the usage of our Google Function (our URL), but you can customize it with your own Cloud Function. We will also allow the usage of our DataStore. You will need to update the relevant project ID in `.env`, however. Remember, to authenticate the proper service accounts if you do choose to customize this project.

   > The Google Cloud function to customize is located in `/functions/main.py`

### Running the Project

Run

```
npm install
```

Then to run the localized, development version

```
npm run dev
```

If you would like to update the customized CSS in the `src/public/styles/styles.css`, run in another terminal window

```
npm run tailwind:dev
```
