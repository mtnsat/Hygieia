FROM docker.io/nginx:latest

COPY docker/default.conf /etc/nginx/conf.d/default.conf.templ
COPY docker/conf-builder.sh /usr/bin/conf-builder.sh
COPY docker/html /usr/share/nginx/html
RUN chown -R nginx:nginx /usr/share/nginx/html/
WORKDIR /etc/ssl
COPY ./private/mtnsat.io.key /etc/ssl/mtnsat.io.key
COPY ./certs/mtnsat.io.crt /etc/ssl/mtnsat.io.crt

EXPOSE 80 443

CMD conf-builder.sh &&\
  nginx -g "daemon off;"
