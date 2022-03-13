git checkout prod
git pull origin main
cd .\UrlShortening_FE\
ng build --prod --base-href "https://glenntjr96.github.io/url-shortener/"
npx angular-cli-ghpages --dir=dist/UrlShortening

