
const { Project, Routes } = require('../models');

/* Create Project Function */
const createProject = async (data) => {
    const result = {};



    console.log("서비스가 구동되었습니다.");
    console.log(data);
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


module.exports = {
    createProject: createProject
}