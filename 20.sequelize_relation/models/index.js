"use strict";

const Sequelize = require("sequelize");

const config = require(__dirname + "/../config/config.js")["devel"];
const db = {};
// (1) Sequelize 클래스를 통해서 sequelize 객체를 생성
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

// (2) model을 불러오면서 인자로 정보 전달
db.sequelize = sequelize;
db.Sequelize = Sequelize;

const GameModel = require("./Game")(sequelize, Sequelize);
const PlayerModel = require("./Player")(sequelize, Sequelize);
const ProfileModel = require("./Profile")(sequelize, Sequelize);
const TeamModel = require("./Team")(sequelize, Sequelize);
const TeamGameModel = require("./TeamGame")(sequelize, Sequelize);

//(3) 모델간 관계 설정

// (4) db
db.Game = GameModel;
db.Player = PlayerModel;
db.Profile = ProfileModel;
db.Team = TeamModel;
db.TeamGame = TeamGameModel;

module.exports = db;
