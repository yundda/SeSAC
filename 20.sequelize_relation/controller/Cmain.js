// const models = require('../models')
const { Op } = require("sequelize"); // ⭐️ sequelize의 연산자들이 담겨져있음
const { Player } = require("../models");
const { Profile } = require("../models");
const { Team } = require("../models");
exports.main = (req, res) => {
  res.render("index");
};

// GET '/players'
exports.getAllPlayer = async (req, res) => {
  try {
    // select * from player;
    const players = await Player.findAll();
    console.log(players);
    res.send(players);
  } catch (err) {
    console.log("err", err);
    res.status(500).send("server error");
  }
};

// 특정 선수 조회
// GET '/players/:playerId'
// players, profile 정보 조회 >> join 필요!
exports.getPlayer = async (req, res) => {
  try {
    console.log(req.params);
    // { playerId: '2' }
    const { playerId } = req.params; // '2'

    const player = await Player.findOne({
      where: {
        player_id: playerId,
      },
      include: [{ model: Profile, attributes: ["position", "salary"] }],
      // join은 include로!
      // attributes  속성 ; 가져오고 싶은 칼럼만 가져올 수 있음 -> 모델에 작성한 칼럼명과 같아야 함
    });
    res.send(player);
  } catch (err) {
    console.log("err", err);
    res.status(500).send("server error");
  }
};

// 선수 추가
// POST '/players'
/*
req.body ;
{
  name:'손흥민',
  age:30,
  team_id:1
}
*/
exports.postPlayer = async (req, res) => {
  try {
    console.log(req.body);
    // { name : '손흥민', age : 30, teamid : 1}
    const newPlayer = await Player.create({
      name: req.body.name,
      age: req.body.age,
      teamid: req.body.teamid,
    });
    // 객체 없이 req.body 해도 무방 칼럼명과 보내는 객체명이 다 같기 때문
    res.send(newPlayer);
    // res.send("response");
  } catch (err) {
    console.log("err", err);
    res.status(500).send("server error");
  }
};

// 선수 수정
// Patch '/players/:playerId/team'
exports.patchPlayer = async (req, res) => {
  try {
    console.log(req.body);
    // { teamId : 1 }
    console.log(req.params);
    // { playerId : '2' }

    const isUpdated = await Player.update(
      {
        teamid: req.body.teamId,
      },
      {
        where: {
          player_id: req.params.playerId,
        },
      }
    );
    // res.send("response");
    res.send(isUpdated);
  } catch (err) {
    console.log("err", err);
    res.status(500).send("server error");
  }
};

// 선수 삭제
// DELETE '/players/:playerId'
exports.deletePlayer = async (req, res) => {
  try {
    console.log(req.params);
    // { playerId: '2' }
    const { playerId } = req.params;
    const isDeleted = await Player.destroy({
      where: {
        player_id: playerId,
      },
    });
    // res.send("delete");
    console.log("삭제 여부", isDeleted);
    // 삭제 여부 1
    if (Boolean(isDeleted)) {
      res.send("삭제 성공");
    } else {
      res.send(false);
    }
  } catch (err) {
    console.log("err", err);
    res.status(500).send("server error");
  }
};

/* 복잡한 where 조건 사용해보기 */
// GET '/teams'
// 정렬, 검색 >> req.query 사용
exports.getTeams = async (req, res) => {
  try {
    console.log(req.query); // {} or {sort} or {search}
    const { sort, search } = req.query;
    let teams; // 재할당해야 하기 때문에 const 안됨!
    if (sort === "name_asc") {
      // 팀을 이름순으로 정렬해서 전체 조회
      // Native Query - ORDER BY name ASC
      // ORM - order : [["정렬기준 칼럼명1","ASC/DESC"],["정렬기준 칼럼명2","ASC/DESC"]]
      teams = await Team.findAll({
        attributes: ["team_id", "name"],
        order: [["name", "ASC"]],
      });
    } else if (search) {
      // search 키워드 기준으로 검색 후 조회
      // SELECT team_id, name FROM Team WHERE name LIKE '%K%'
      teams = await Team.findAll({
        attributes: ["team_id", "name"],
        where: {
          name: { [Op.like]: `%${search}%` },
        },
      });
    } else {
      // sort=name_asc가 아니거나 search가 안 들어왔을 때
      // 전체 조회
      teams = await Team.findAll({
        attributes: ["team_id", "name"],
      });
    }
    // 검색 로직 종료

    // ----응답----
    // findAll 은 무조건 배열 형태로 반환
    if (teams.length === 0) {
      res.send("다시 검색하세요. 정보가 없어요");
    } else {
      res.send(teams);
    }
  } catch (err) {
    console.log("err", err);
    res.status(500).send("server error");
  }
};

// GET /teams/:teamId
// 특정 팀 조회
exports.getTeam = async (req, res) => {
  try {
    console.log(req.params);
    // { teamId: '1' }
    const { teamId } = req.params;
    const team = await Team.findOne({
      where: { team_id: teamId },
      attributes: ["team_id", "name"],
    });
    console.log("조회성공", team);
    res.send(team);
  } catch (err) {
    console.log("err", err);
    res.status(500).send("server error");
  }
};

// GET /teams/:teamId/players
// 특정 팀 모든 선수 조회 >> join 필요
exports.getTeamPlayers = async (req, res) => {
  try {
    const { teamId } = req.params;
    const teamPlayers1 = await Player.findAll({
      where: { teamid: teamId },
      attributes: ["player_id", "name", "age"],
    });
    const teamPlayers2 = await Team.findOne({
      where: { team_id: teamId },
      attributes: ["team_id", "name"],
      include: [{ model: Player, attributes: ["player_id", "name", "age"] }],
    });
    console.log("조회성공");
    // res.send(teamPlayers1);
    // 팀 정보 없이 해당 팀 선수만 가져옴
    res.send(teamPlayers2);
    // res.send(teamPlayers2);
    // 팀 정보(객체)와 해당 팀 선수(배열) 모두 가져옴
  } catch (err) {
    console.log("err", err);
    res.status(500).send("server error");
  }
};
