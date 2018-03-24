# ripp-cord-cli

With the rise in popularity of serverless architectures and graphQL endpoints it can be overwhelming sifting through the thousands of articles and tutorials just to create your first app. We have decided to create a quick bootstrap CLI to help you streamline the reduntant parts of creating a GraphQL server and get straight to the good parts!

This project will allow you to easily get started with the a lightweight GraphQL Server hosted in Node.

## To create and publish your own CLI:

1.  Install the ripp-cord-cli globally

```
npm i -g ripp-cord-cli
```

2.  Create a new app

```
ripp-cord-cli YourAppName
```

3.  CD into your newly created directory

```
cd YourAppName
```

##### (Skip step 4 if the file already exists)

4.  Create a .firebaserc

```
touch .firebaserc
```

5.  Replace the contents of .firebaserc with the following

```
{
  "projects": {
    "default": "YourAppName"
  }
}
```

## To setup a new Firebase project:

##### The following steps will walk you through setting up a project in firebase console

6.  Make sure you have a firebase account already setup
7.  Create a new project "YourAppName" in the firebase console at:

```
https://console.firebase.google.com
```

8.  Add a new project "YourAppName"
9.  Install the firebase-tools CLI

```
npm i -g firebase-tools
```

10. Log into Firebase

```
firebase login
```

## Before running the project:

##### The following steps will walk you through running the project

11. Navigate to functions > src > config> index.ts
12. Update the endpoint URL with your project name

```
endpointURL: "/YourAppName/us-central1/api/graphql/"
graphIQLURL: "/YourAppName/us-central1/api/graphiql/"
schemaURL: "/YourAppName/us-central1/api/schema/"
```

13. Save

## To run the server

14. Start the graphQL server locally

```
npm run open:dev
```

15. Clean the project

```
npm run clean
```

##### **Please note** If you're graphQL is failing please verify that the endpoint URL in step 12 matches the endpoint in the console output after running step 14

## Testing the GraphQL endpoints

14. Visit your graphIQLURL endpoint from step 12.
15. Execute the following querys in the graphQL window:

```
mutation saveStuff($email:String!, $password: String!){
  saveStuff(email: $email, password:$password) {
    message
  }
}
query stuff{
    getStuff{
      message
    }
}
query otherStuff($stuff:String){
    getOtherStuff(stuff: $stuff){
      message
    }
}
```

16. Add the Query Variables

```
{
  "email": "hey",
  "password": "stuff",
  "stuff": "stuff"
}
```

17. Leave questions comments and feedback
18. Enjoy!!
