import fastify from "fastify";
import { readFileSync } from "fs";
import { load } from "js-yaml";

const server = fastify({ logger: true });

server.get("/", (request, reply) => {
  reply.send({ msg: "success" });
});

// get and load configs
const configFile = readFileSync("config/dev.yaml", "utf8");

const config: any = load(configFile);

const serverHost = config.server.host;
const serverPort = config.server.port;

server.listen(
  {
    host: serverHost,
    port: serverPort,
  },
  () => console.log(`Server up and running on ${serverPort}`)
);
