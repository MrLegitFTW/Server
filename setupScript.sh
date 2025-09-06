npm install --legacy-peer-deps
npm run build
sudo cp -r dist/* /var/www/html/
sudo chown -R root:root /var/www/html
sudo chmod -R 755 /var/www/html
sudo nginx -t
sudo systemctl reload nginx
