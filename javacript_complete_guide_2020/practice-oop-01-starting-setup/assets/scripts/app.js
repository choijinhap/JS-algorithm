class Tolltip {}
class ProjectItem {
  constructor(id, type) {
    this.id = id;
    this.type = type;
    this.connectMoreInfoBtn();
    this.connectSwitchBtn();
  }
  connectMoreInfoBtn() {}
  connectSwitchBtn() {
    const prjItemEl = document.getElementById(this.id);
    const switchBtn = prjItemEl.querySelector('button:last-of-type');
    //ProjectList에서 동작하는 함수가 등록되어야함
    switchBtn.addEventListener('click');
  }
}
class ProjectList {
  projects = [];
  constructor(type) {
    const prjItems = document.querySelectorAll(`#${type}-projects li`);
    for (const prjItem of prjItems) {
      this.projects.push(
        new ProjectItem(prjItem.id, type, this.updateProjectList)
      );
    }
    console.log(this.projects);
  }
  addProject() {}
  switchProject(projectId) {
    // const prjIndex=this.projects.findIndex(p=>p.id===projectId);
    // this.projects.splice(prjIndex,1);
    //위코드와 동일함
    this.projects = this.projects.filter((p) => p.id !== projectId);
  }
}
class App {
  static init() {
    const activeProjectList = new ProjectList('active');
    const finishedProjectList = new ProjectList('finished');
  }
}

App.init();
