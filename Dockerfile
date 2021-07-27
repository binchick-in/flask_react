FROM node:14 AS nodebuild
RUN mkdir /build
ADD . /build
WORKDIR /build
RUN npm install
RUN npm run build-site

FROM ubuntu:20.04
RUN     apt-get update \
        && DEBIAN_FRONTEND=noninteractive apt-get install -y \
            apt-utils \
            python3.8 \
            python3.8-dev \
            python3-pip \
            dumb-init \
        && apt-get clean
ADD templates/ /code/templates
ADD app.py /code
RUN /usr/bin/python3.8 -m pip install flask
COPY --from=nodebuild /build/static/bundle.js /code/static/
EXPOSE 5000
WORKDIR /code
CMD ["/usr/local/bin/flask", "run", "-h", "0.0.0.0", "-p", "5000"]
