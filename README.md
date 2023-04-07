# Next.js + Contentful CMS on Netlify

This is a minimal starting point for Netlify + Contentful + NextJS Integration. It is built with Next.js and uses Contentful as the content source. 

## Run Locally

Clone the project
```txt
git clone https://github.com/netmagik/contentful-starter
```

Got to the project directory:

```txt
cd contentful-starter
```

Install dependencies:
```txt
npm install
```

Push this repo to your Github or GitLab or Bitbucket account. Connect it to Netlify. 

Add the Contentful tokens to the Netlify Environment variables ([see reference](https://docs.netlify.com/environment-variables/get-started/) to get started). 

**If you don't have a Contentful space with the proper content**, [see below](#importing-contentful-content) for importing default content and schema into Contentful.

Install the Netlify CLI. 
[See reference](https://docs.netlify.com/cli/get-started/) to get started with Netlify CLI. 

```txt
npm install netlify-cli -g
```

Run Netlify development server:

```txt
netlify dev
```

## Importing Contentful Content

If you don't have a Contentful space set up and ready to go, you can import the starting content provided by this project.

1. Create a new Space in Contentful
1. Create new Contentful Personal Access Tokens [here](https://app.contentful.com/account/profile/cma_tokens/).
1. Import the Contentful data stored in the `contentful/export.json` file to the new space by running the following command. Replace the `<management_token>` with your Personal Access Token and the `<space_id>` with the new space ID.

   ```txt
   ./contentful/import.js <management_token> <space_id>
   ```

1. Create **Content Preview API - Access Token** for the new space via Contentful app **Settings** => **API Keys** => **Content delivery / preview tokens** => **Add API Key**. Add these keys to `.env` file(s) as mentioned above.

