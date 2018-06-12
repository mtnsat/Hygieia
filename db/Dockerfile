FROM mongo:latest

ADD db-setup.js /tmp/db-setup.js
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait

RUN chmod +x /wait
RUN chmod +x /tmp/db-setup.js

CMD /wait && mongo db/admin < /tmp/db-setup.js