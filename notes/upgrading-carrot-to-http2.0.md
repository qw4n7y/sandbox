1. upgrade nginx to version > 1.9.5

2. upgrade openssl to version > 1.0.1

3. build nginx

      ```sh
      ./configure --prefix=/opt/nginx --with-http_ssl_module --with-http_gzip_static_module --with-http_stub_status_module --with-cc-opt=-Wno-error --with-ld-opt= --with-pcre=/home/webmaster/tools/pcre-8.42 --add-module=/usr/local/rvm/gems/ruby-2.0.0-p247/gems/passenger-5.0.21/src/nginx_module --with-http_v2_module --with-openssl=/home/webmaster/tools/openssl-1.0.2o
      ```

4. update nginx config
    ```sh
    server {
        listen   443 ssl http2;
        ssl_prefer_server_ciphers on;
	    ssl_ciphers EECDH+CHACHA20:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+AES256:EECDH+3DES:RSA+3DES:!MD5;
    }
    ```