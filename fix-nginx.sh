#!/bin/bash
# Fix vendybites nginx routing
cat > /etc/nginx/sites-available/srp-3001 << 'EOF'
server {
    listen 3001;
    server_name _;
    client_max_body_size 12m;

    # VendyBites — no trailing slash = path is preserved (required for multi-page routing)
    location /vendybites {
        proxy_pass http://127.0.0.1:3002;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_cache_bypass $http_upgrade;
    }

    # React build (srp-frontend)
    root /var/www/srp-frontend;
    index index.html;

    location / {
        try_files $uri /index.html;
    }

    # PHP API
    location ~ ^/api/(?<phpfile>.+\.php)$ {
        add_header X-API-MATCH "php-location" always;
        set $api_root /home/nick/services/srp-server/srp/backend/public;
        include fastcgi_params;
        fastcgi_param SCRIPT_FILENAME $api_root/$phpfile;
        fastcgi_param PATH_INFO "";
        fastcgi_index index.php;
        fastcgi_pass unix:/run/php/php8.3-fpm.sock;
    }

    location /api/ {
        add_header X-API-MATCH "api-block" always;
        return 404;
    }
}
EOF

nginx -t && systemctl reload nginx && echo "✅ Done! Visit http://10.0.0.251:3001/vendybites/"
