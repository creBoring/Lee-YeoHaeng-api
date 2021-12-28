/* 프로젝트 관리 관련 컨트롤러 */
'use strict';
const projectService = require('../services/projectService.js');

/*
* 프로젝트 생성 기능
* 입력인자: project 정보들
*/
const createProject = async (req, res) => {
    const data = req.body;
    let result = {};

    // Register User Process ...
    try {
        data.routes = JSON.stringify(data.routes);

        const createResult = await projectService.createProject(data);
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

/*
* 프로젝트 리스트 나열 기능
* 입력인자: User ID
*/
const listProject = async (req, res) => {
    const data = req.query;
    let result = {};

    try {
        const listResult = await projectService.listProject(data);
        if(listResult.isSuccess) {
            result.projectList = listResult.projects;
            res.status(200).send(result);
        } else {
            result.message = "프로젝트 리스트를 가져오는데 실패했습니다.";
            res.status(400).send(result);
        }
    } catch(e) {
        result.message = "예기치 못한 에러가 발생했습니다.";
        res.status(400).send(result);
    }
}


/*
* 프로젝트 정보 제공 기능
* 입력인자: project ID
*/
const getProject = async (req, res) => {
    const data = req.query;
    let result = {};

    try {
        const getResult = await projectService.getProject(data);
        console.log(getResult);
        if(getResult.isSuccess) {
            result.project = getResult.project;
            res.status(200).send(result);
        } else {
            result.message = "프로젝트 정보를 가져오는데 실패했습니다.";
            res.status(400).send(result);
        }
    } catch(e) {
        result.message = "예기치 못한 에러가 발생했습니다.";
        res.status(400).send(result);
    }
}



module.exports = {
    postCreateProject: createProject,
    getListProject: listProject,
    getGetProject: getProject
}
