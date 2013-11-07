function stopResumeTimer(sectionId, btn) {
  if (btn.innerHTML === 'Start') {
    document.getElementById(sectionId).getElementsByTagName('timer')[0].start();
    document.getElementById('title').start();
    btn.innerHTML = 'Stop';
    btn.className = btn.className + ' active';
  }
  else if (btn.innerHTML === 'Stop') {
    document.getElementById(sectionId).getElementsByTagName('timer')[0].stop();
    document.getElementById('title').stop();
    btn.innerHTML = 'Resume';
    btn.className = "";
    btn.className = "btn btn-default btn-lg";
  }
  else {
    document.getElementById(sectionId).getElementsByTagName('timer')[0].resume();
    document.getElementById('title').resume();
    btn.innerHTML = 'Stop';
    btn.className = btn.className + ' active';
  }
}

angular.module('tracker',['timer']).controller('Timer',['$scope',  function ($scope) {

}]);
