
const { Project, Routes } = require('../models');

/* Create Project Function */
const createProject = async (data) => {
    const result = {};

    try {
        data.projectId = data.createUser + '-' + data.projectName;
        await Project.create(data);

        data.projectDay = data.projectDays; // temp
        await Routes.create(data);

        result.isSuccess = true;
    } catch(e) {
        console.log(e.message);
        result.isSuccess = false;
        result.message = "예기치 못한 에러가 발생했습니다.";
    }
    return result;
}


/* List Project Function */
const listProject = async (data) => {
    const result = {};

    try {
        result.projects = await Project.findAll({
            where: {
                createUser: data.userId
            }
        });
        result.isSuccess = true;
    } catch(e) {
        console.log(e);
        result.isSuccess = false;
        result.message = "예기치 못한 에러가 발생했습니다.";
    }
    return result;
}


/* Get Project Function */
const getProject = async (data) => {
    const result = {};

    try {
        result.project = await Project.findOne({
            where: {
                projectId: data.projectId
            }
        });
        result.isSuccess = true;
    } catch(e) {
        console.log(e);
        result.isSuccess = false;
        result.message = "예기치 못한 에러가 발생했습니다.";
    }
    return result;
}


module.exports = {
    createProject: createProject,
    listProject: listProject,
    getProject: getProject
}