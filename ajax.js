class MyAjax {
    constructor() {}
    
    adatbeolvas(faljnev, tomb, myCallback) {
     tomb=[];
      $.ajax({
        url: faljnev,
        type: "GET",
        success: function (result) {
          result.forEach((value) => {
            tomb.push(value);
          });
          myCallback(tomb);
        },
      });
    }
  
    adatkuldes(faljnev, adat) {
      $.ajax({
        url: faljnev,
        type: "POST",
        data: adat,
        success: function (result) {
          console.log(result);
        },
      });
    }
  
    adattorles(faljnev, id) {
      $.ajax({
        url: faljnev + "/" + id,
        type: "DELETE",
        success: function (result) {
          console.log(result);
        },
      });
    }
  
    adatmodosit(faljnev, adat, id) {
      $.ajax({
        url: faljnev + "/" + id,
        type: "PUT",
        data: adat,
        success: function (result) {
          console.log(result);
        },
      });
    }
  }