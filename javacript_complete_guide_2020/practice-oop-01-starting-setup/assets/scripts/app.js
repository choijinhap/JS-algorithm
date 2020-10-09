class DomHelper {
    static clearEventListeners(element){
        const clonedEl=element.cloneNode(true)
        element.replaceWith(clonedEl);
        return clonedEl;
    }
  static moveElement(elemnetId, newDestSelector) {
    const element = document.getElementById(elemnetId);
    const destEl = document.querySelector(newDestSelector);
    destEl.append(element);
  }
}

class Tolltip {}
class ProjectItem {
  constructor(id, type, updateProjectList) {
    this.id = id;
    this.type = type;
    this.updateProjectListHandler = updateProjectList;
    this.connectMoreInfoBtn();
    this.connectSwitchBtn();
  }
  connectMoreInfoBtn() {}
  connectSwitchBtn() {
    const prjItemEl = document.getElementById(this.id);
    let switchBtn = prjItemEl.querySelector('button:last-of-type');
    switchBtn =DomHelper.clearEventListeners(switchBtn)
    switchBtn.textContent=this.type==='active'?'Activate':'Finish'
    //ProjectList에서 동작하는 함수가 등록되어야함
    switchBtn.addEventListener(
      'click',
      this.updateProjectListHandler.bind(null, this.id)
    );
  }
  //have to clear old EventListener
  update(updateProjectList,type){
    this.type=type;
    this.updateProjectListHandler = updateProjectList;
    this.connectSwitchBtn();
    }
}
class ProjectList {
  projects = [];
  constructor(type) {
    this.type = type;
    const prjItems = document.querySelectorAll(`#${type}-projects li`);
    for (const prjItem of prjItems) {
      this.projects.push(
        new ProjectItem(prjItem.id, type, this.switchProject.bind(this))
      );
    }
    console.log(this.projects);
  }
  setSwitchHanderlFunction(switchHandlerFunction) {
    this.switchHander = switchHandlerFunction;
  }
  addProject(project) {
    this.projects.push(project);
    DomHelper.moveElement(project.id, `#${this.type}-projects ul`);
    project.update(this.switchProject.bind(this),this.type);
  }
  switchProject(projectId) {
    // const prjIndex=this.projects.findIndex(p=>p.id===projectId);
    // this.projects.splice(prjIndex,1);
    //위코드와 동일함
    this.switchHander(this.projects.find((p) => p.id === projectId));
    this.projects = this.projects.filter((p) => p.id !== projectId);
  }
}

class App {
  static init() {
    const activeProjectList = new ProjectList('active');
    const finishedProjectList = new ProjectList('finished');
    activeProjectList.setSwitchHanderlFunction(
      finishedProjectList.addProject.bind(finishedProjectList)
    );
    finishedProjectList.setSwitchHanderlFunction(
      ProjectList.prototype.addProject.bind(activeProjectList)
    );
  }
}

App.init();
