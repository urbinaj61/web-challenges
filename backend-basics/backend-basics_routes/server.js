import { createServer } from "node:http";

export const server = createServer((request, response) => {
  const url = request.url;
  if (url === "/api/fish/1") {
    response.status = 200;
    response.end("Shrimp");
  } else if (url === "/api/fish/2") {
    response.status = 200;
    response.end("Anemonefish");
  } else {
    response.status = 404;
    response.end("Not Found");
  }
});
