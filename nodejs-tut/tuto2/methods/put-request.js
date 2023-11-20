const requestBodyparser = require("../util/body-parser");
const writeToFIle = require("../util/write-to-file");

module.exports = async (req, res) => {
  let baseUrl = req.url.substring(0, req.url.lastIndexOf("/") + 1);
  let id = req.url.split("/")[3];
  const regexV4 = new RegExp(
    /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/
  );

  if (!regexV4.test(id)) {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        title: "Validation failed",
        message: "UUID is not valid",
      })
    );
  } else if (baseUrl === "/api/movies/" && regexV4.test(id)) {
    try {
      let body = await requestBodyparser(req);
      const index = req.movies.findIndex((movie) => {
        return movie.id === id;
      });

      if (index === -1) {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(
          JSON.stringify({
            title: "Not found",
            message: "Requested Movie is not found",
          })
        );
      } else {
        req.movies[index] = { id, ...body };
        writeToFIle(req.movies);
        res.writeHead(204, { "Content-Type": "application/json" });
        res.end();
      }
    } catch (err) {
      console.log(err); // Log the error for debugging
      res.writeHead(400, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({
          title: "Validation failed",
          message: "Request Body is not valid.",
        })
      );
    }
  }
};
