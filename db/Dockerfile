FROM mongo:latest

ADD wait-for /tmp/wait-for
ADD db-setup.js /tmp/db-setup.js

RUN chmod +x /tmp/wait-for
RUN chmod +x /tmp/db-setup.js

CMD ["/tmp/wait-for db:27017 -- mongo db/admin < /tmp/db-setup.js"]