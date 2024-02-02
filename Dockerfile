FROM node:latest

WORKDIR /usr/app

# Install @actions/artifact package
RUN npm i  @actions/artifact

COPY app.js /usr/app/
COPY entrypoint.sh /usr/app/
COPY file.txt /usr/app/


RUN chmod +x /usr/app/entrypoint.sh
ENTRYPOINT [ "/usr/app/entrypoint.sh" ]