var dataURL = "assets/js/service.json"
var dataProjectsURL = "assets/js/projects.json"


new Vue({
  delimiters:['[[', ']]'],
  el: "#services",
  data: {
    modal: [],
    serviceData: []
  },
  mounted(){
    var self = this;
    $.getJSON(dataURL, function(data){
      self.serviceData = data.services;
    });

  },
  methods: {
    modalOpen: function(i) {

      this.modal = this.serviceData[i];

      var modalView = document.getElementById("modal_content");
      modalView.classList.add("active");
    },

    modalClose: function(){
      var modalView = document.getElementById("modal_content");
      modalView.classList.remove("active");
    },
  }
})


new Vue({
  delimiters:['[[', ']]'],
  el: "#projects",
  data: {
    modal: [],
    projectData: []
  },
  mounted(){
    var self = this;
    $.getJSON(dataProjectsURL, function(data){
      self.projectData = data.projects;
    });

  }
})
