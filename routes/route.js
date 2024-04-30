const {
  addBooksHandler,
  getAllBooksHandler,
  getIdBookHandler,
  editBooksHandler,
  deleteBookHandler,
} = require("./addHandler");

const routes = [
  {
    method: "POST",
    path: "/books",
    handler: addBooksHandler,
  },
  {
    method: "GET",
    path: "/books",
    handler: getAllBooksHandler,
  },
  {
    method: "GET",
    path: "/books/{bookId}",
    handler: getIdBookHandler,
  },
  {
    method: "PUT",
    path: "/books/{bookId}",
    handler: editBooksHandler,
  },
  {
    method: "DELETE",
    path: "/books/{bookId}",
    handler: deleteBookHandler,
  },
];

module.exports = routes;
