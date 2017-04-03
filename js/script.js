$(document).ready(function () {
    var myRequest = new XMLHttpRequest();
    myRequest.open('GET','contacts.json');
    myRequest.onload = function () {
        var i;
        var j;
        var myData = JSON.parse(myRequest.responseText);
        var myID = Object.keys(myData[0]);
    
        for(i = 0; i < myData.length; i++){
            var sameCity;
                if(myData[i].city != sameCity ){
                    $("#city").append("<option>" + myData[i].city + "</option>");
                    sameCity = myData[i].city;
                } 
        }
    
        for(i = 0; i < myData.length; i++){
            $("#data").append("<tr><td>" + myData[i].name + "</td>" + "<td>" + myData[i].surname + "</td>" + "<td>" + myData[i].city + "</td>" + "<td>" + myData[i].email + "</td>" + "<td>" + myData[i].phone + "</td><td>Active</td></tr>"); 
            $("td:last-child").addClass("at"); 
            $("td:first-child").addClass("test");
        }  
           
        
// ====  Filter =====        
        
        $('.filter').click(function() { 
    
            var selct = $('#city  option:selected').text().replace(' ','').toLowerCase(); 
            var impt = $('#text').val().toLowerCase();
            var regexp = new RegExp("\\d+","gi");
            var r = regexp.exec(impt);
            if(r){
               $('.error').removeClass("hidden");
               } else {
                   
                $('.error').addClass("hidden");
                var j;
                var table = document.getElementById("data");
                var tr = table.getElementsByTagName("tr");
                
                for( j = 1 ; j < tr.length; j++){
                    var td1 = tr[j].getElementsByTagName("td")[0].textContent.toLowerCase();
                    var td2 = tr[j].getElementsByTagName("td")[2].textContent.toLowerCase();
                    
                    
                    if(( selct == td2 )&&( td1.indexOf(impt) >= 0 )){
                        
                           tr[j].style.display = "";
                        
                          } else {
                            
                        if(( selct == td2 )&&( impt == 0 )){
                            
                           tr[j].style.display = "";
                            
                          } else {
                              
                            if(( selct == "city" )&&( td1.indexOf(impt) >= 0 )){
                                
                               tr[j].style.display = "";
                                
                              } else {
                                  
                                 if(( selct == "city" )&&( impt == 0 )){
                                
                                   tr[j].style.display = "";

                                  } else {

                                    tr[j].style.display = "none";
                                  }
                              }
                          }}

                } 
               }
        });
    
  
    
};

    myRequest.send();
    
// ===== Name sort =====     
    
    $('.first').click(function() {
          $('.first').removeClass("desc"); 
          var table, rows, switching, i, x, y, shouldSwitch, dir,a=0, switchcount = 0;
          table = document.getElementById("data");
          switching = true;
          dir = "asc";
              
          a++;  
          while (switching) { 
            switching = false;
            rows = table.getElementsByTagName("tr"); 
            for (i = 1; i < (rows.length - 1); i++) {
                  
              shouldSwitch = false;
              x = rows[i].getElementsByTagName("td")[0].textContent.toLowerCase();
              y = rows[i + 1].getElementsByTagName("td")[0].textContent.toLowerCase(); 
                
              if (dir == "asc") {
                if (x > y) {
//                  $('.first').removeClass("desc");
//                  $('.first').addClass("asc");   
                  shouldSwitch= true;
                  break;
                    
                }
              } else if (dir == "desc") {
                  
                if (x < y) {
                  shouldSwitch= true;           
                  break;
                    
                }
              }
            }
            if (shouldSwitch) {
                
              rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
              switching = true;   
              switchcount ++;       
                
            } else {
              if (switchcount == 0 && dir == "asc") { 
                dir = "desc";
                 $('.first').addClass("desc");  
                switching = true;
                  
              } 
            }
          }

    });
    
    $('.uContacts a').click(function() {
        $(this).toggleClass("open");
        $(".rotate").toggleClass("open");
        $(".list").toggleClass("open");
    }); 
    
     $(".burger").on('click', function(){
        $(".burger1").toggleClass("open");
        $(".burger2").toggleClass("close");
        $(".topHeader-body > nav > ul").toggleClass("open"); 
        
    });
});
//    console.log();