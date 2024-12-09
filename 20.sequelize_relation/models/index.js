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

// (3) 모델간 관계 설정
// 3-1) Player : Profile = 1 : 1
PlayerModel.hasOne(ProfileModel, {
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
  foreignKey: "player_id",
});
ProfileModel.belongsTo(ProfileModel, {
  foreignKey: "player_id", // 내가 정해주는 이름 but, 이름이 ProfileModel의 pk라면 sourceKey 안 적어도 알아서 참조
});

// 3-2) Team : Player = 1 : N
TeamModel.hasMany(PlayerModel, {
  foreignKey: "teamid", // 내가 정해주는 이름
  sourceKey: "team_id", // 실제로 참조할 이름 => 실제 team model의 PK 컬럼명과 일치해야 함
});
ProfileModel.belongsTo(TeamModel, {
  foreignKey: "teamid", // 내가 정해주는 이름
  targetKey: "team_id", // 실제로 참조할 이름
});
// 3-3) Team : Game = M : N
// 중계 테이블 Teamgame 활용
TeamModel.belongsToMany(GameModel, {
  through: TeamGameModel,
  foreignKey: "team_id", // 내가 정해주는 이름
});
GameModel.belongsToMany(TeamModel, {
  through: TeamGameModel,
  foreignKey: "game_id", // 내가 정해주는 이름
});

// (4) db 객체에 모델 추가
// 관계 설정이 필요한 경우엔 (2),(4) 과정이 있어야 함!
db.Game = GameModel;
db.Player = PlayerModel;
db.Profile = ProfileModel;
db.Team = TeamModel;
db.TeamGame = TeamGameModel;

module.exports = db;
