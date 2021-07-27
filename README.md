# med3web - NodeJS Assets' Server

## Deployment Procedure - on Heroku

1. Clone the repo 

    `git clone <repo-url>`

### Make sure to have Heroku cli installed

2. Add your files to `public` directory

3. Commit changes


4. Login from heroku to your account
    
    `heroku login`

5. Create new app with 

    `heroku create <app-name>`

    or
    
    Add git URL of existing app with - Find the URL inside your app in Settings tab on your heroku dashboard in browser
    
    `git remote add <app-name> <url>`

6. Push and deploy your app to selected app

    `git push <app-name> master`

Find your app's domain in CLI or inside your app in `Settings` tab  under `Domains` section on your heroku dashboard in browser