# Flagpol - a system to help you plan an outing with your friends

This app is written to be deployed on Heroku.
This repo contains the server code and frontend for the app. For info about the frontend, see [frontend/README.md](./frontend/README.md)

## How to set up your local environment for development
Make sure you're running Postgres. I'm running PostgreSQL 12 on port 5432.
Clone this repo. (See instructions on Github.)
Install all the Ruby dependencies by executing `bundle install` in the root directory.
Install the javascript dependencies by changing to the `frontend` directory and executing `yarn install`.
Initialize the database by running `rails db:create && rails db:migrate`

## How to run locally for development
Execute `bundle exec rake start` to run both frontend and backend.
The backend will now be serving at http://localhost:3001/
The frontend will open at http://localhost:3000/

## How to run tests locally
To test the backend run `bundle exec rake test` in the root directory.
To test the frontend change to the `frontend` directory and run `yarn test`

## How to set up a deployment on Heroku
See Heroku's instructions on how to set up an app.
Make sure there's a Postgres resource for the Application to use.
Run `heroku run rake db:seed`

TODO: Services (job queues, cache servers, search engines, etc.)

## How To Deploy To Heroku
For routine deploys of new code execute `git push heroku master`
For troubleshooting, check [Procfile](Procfile) to see where execution starts.

## More relevant info for developers (i.e. me)
This is a Rails API with a React frontend in the `frontend` directory.
* This app runs on this [Ruby version](.ruby-version)

## References
I did the initial setup of this app following https://medium.com/swlh/set-up-your-rails-and-react-apps-for-heroku-right-from-the-start-eed2bca83b6
