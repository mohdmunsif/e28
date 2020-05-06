# blog

## Project setup
```
npm install
npm install -g @vue/cli
npm install vue-router 
npm install axios
```

## Domain
[blog.mohdmunsif.me](http://blog.mohdmunsif.me)

which is pointing to

[http://mohdmunsif.me/e28/blog/public/](http://mohdmunsif.me/e28/blog/public/)

(which has been setup ) as follows on Apache

```
<VirtualHost *:80>
  ServerName blog.mohdmunsif.me
  DocumentRoot /var/www/html/e28/blog/public
  <Directory /var/www/html/e28/blog/public>
    AllowOverride All
  </Directory>
</VirtualHost>
```

Somehow it doesnt work.

[Github repo](https://github.com/mohdmunsif/e28/tree/master/blog)


### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



 
