"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Permission",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  },
  {
    name: "Album",
    embedded: false
  },
  {
    name: "AlbumItem",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://eu1.prisma.sh/gallery4/gallery4/dev`
});
exports.prisma = new exports.Prisma();
