/* 프로젝트 관리 관련 컨트롤러 */
'use strict';
const projectService = require('../services/projectService.js');
const {createProject} = require("../services/projectService");

/*
* 프로젝트 생성 기능
* 입력인자: project 정보들
*/
const postCreateProject = async (req, res) => {
    const data = req.body;
    let result = {};

    // Register User Process ...
    try {
        data.routes = JSON.stringify(data.routes);

        const createResult = await projectService.createProject(data);
        console.log(createResult);
        if(createResult.isSuccess) {
            res.sendStatus(200);
        } else {
            result.message = "프로젝트 생성에 실패했습니다.";
            res.status(400).send(result);
        }

    } catch(e) {
        console.log(e.message);
        result.message = "예기치 못한 에러가 발생했습니다.";
        res.status(400).send(result);
    }
}

module.exports = {
    postCreateProject: postCreateProject
}
