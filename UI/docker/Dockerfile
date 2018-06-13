FROM docker.io/nginx:latest

COPY default.conf /etc/nginx/conf.d/default.conf.templ
COPY conf-builder.sh /usr/bin/conf-builder.sh
COPY html /usr/share/nginx/html
RUN chown -R nginx:nginx /usr/share/nginx/html/
COPY mtnsat.io.key /etc/ssl/mtnsat.io.key
COPY mtnsat.io.crt /etc/ssl/mtnsat.io.crt

EXPOSE 80 443

CMD conf-builder.sh &&\
  nginx -g "daemon off;"
