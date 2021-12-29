FROM openjdk:latest as builder
WORKDIR /opt
RUN microdnf install wget
COPY ./swagger.yml ./
RUN wget https://repo1.maven.org/maven2/io/swagger/codegen/v3/swagger-codegen-cli/3.0.30/swagger-codegen-cli-3.0.30.jar -O swagger-codegen-cli.jar
RUN java -jar /opt/swagger-codegen-cli.jar generate -i /opt/swagger.yml -l nodejs-server -o ./

FROM node:16
WORKDIR /opt
COPY --from=builder /opt /opt
RUN npm install
