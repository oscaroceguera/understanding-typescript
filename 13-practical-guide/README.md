https://auth0.com/blog/working-with-typeScript-a-practical-introduction/

# Create a new directory for your project

mkdir typescript-intro

# Make your project directory the current directory

cd typescript-intro

# Initialize a new Node.js project

npm init -y

# Install the TypeScript compiler

npm i typescript

# transpiling index.ts to index.js

npx tsc index.ts

# this will output 1

node index.js

# create a default tsconfig.json file

npx tsc --init
