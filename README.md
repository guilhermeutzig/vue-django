# vue-django

<!-- ABOUT THE PROJECT -->

## About The Project

It's a pretty basic todo list with the only intent of studying new technologies and self-improvement.

### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

- Docker
- Vue
- Django
- CircleCI
- Heroku

### How to run

Before everything you're gonna need to setup local and production env variables. Create an `.env` and an `.env.production` files inside `frontend/` with it's following contents (respectively):

```
VUE_APP_API_URL="http://127.0.0.1:8000/api"
```

```
VUE_APP_API_URL="http://utzigui-vue-django.herokuapp.com/api"
```

You're gonna need to install Python, Django and Pip to run.

Tutorial: https://docs.djangoproject.com/en/1.8/howto/windows/#:~:text=Django%20can%20be%20installed%20easily,version%20in%20the%20command%20prompt.

After all installed, install the project requirements:

```sh
pip install -r requirements.txt
```

And now you can open two terminals and run these commands on each:

```sh
./manage.py runserver
```

```sh
cd frontend && yarn && yarn serve
```

### Deploy

To deploy the application all you need to do is run `yarn build` in the frontend folder and push the changes to this repo. CircleCI will automatically start the build/deploy process to Heroku, which will be displayed in this URL:
https://utzigui-vue-django.herokuapp.com/

### TODO

- Automate to automatically build before push
- Fix docker compose
