 function myfun(){
            var nm= document.getElementById("name").value;
            var mo=document.getElementById("mother").value;
            var st=document.getElementById("stream").value;
            var sn=document.getElementById("seatno").value;
            var cn=parseInt(document.getElementById("center").value);
            var mn=document.getElementById("month").value;
            var scn=document.getElementById("schoolname").value;
            var son=parseInt(document.getElementById("schoolno").value);
            var en=parseInt(document.getElementById("english").value);
            var ma=parseInt(document.getElementById("marathi").value);
            var ge=parseInt(document.getElementById("Geography").value);
            var hi=parseInt(document.getElementById("History").value);
            var po=parseInt(document.getElementById("political").value);
            var so=parseInt(document.getElementById("sociology").value);
            
            
            
              document.getElementById("n_name").innerHTML=""+nm;
              document.getElementById("m_mother").innerHTML=""+mo;
              document.getElementById("s_stream").innerHTML=""+st;
              document.getElementById("s_seatno").innerHTML=""+sn;
              document.getElementById("c_center").innerHTML=""+cn;
              document.getElementById("m_month").innerHTML=""+mn;
              document.getElementById("s_schoolname").innerHTML=""+scn;
              document.getElementById("s_schoolno").innerHTML=""+son;
              document.getElementById("e_english").innerHTML=""+en;
              document.getElementById("m_marathi").innerHTML=""+ma;
              document.getElementById("g_geography").innerHTML=""+ge;
              document.getElementById("h_history").innerHTML=""+hi;
              document.getElementById("p_political").innerHTML=""+po;
              document.getElementById("s_sociology").innerHTML=""+so;
              document.getElementById("p_percentage").innerHTML=""+(en+ma+ge+hi+po+so)/600*100+"%";
              document.getElementById("t_total").innerHTML=""+(en+ma+ge+hi+po+so);

              //english grade
              if((en<=20)){
                document.getElementById("e_grade").innerHTML="E";
              }
              else if((en>=21)&&(en<=40)){
                document.getElementById("e_grade").innerHTML="D";
              }
              else if((en>=41)&&(en<=60)){
                document.getElementById("e_grade").innerHTML="C";
              }
              else if((en>=61)&&(en<=80)){
                document.getElementById("e_grade").innerHTML="B";
              }
              else if((en>=81)&&(en<=100)){
                document.getElementById("e_grade").innerHTML="A";
              }

              //marathi grade
              if((ma<=20)){
                document.getElementById("ma_grade").innerHTML="E";
              }
              else if((ma>=21)&&(ma<=40)){
                document.getElementById("ma_grade").innerHTML="D";
              }
              else if((ma>=41)&&(ma<=60)){
                document.getElementById("ma_grade").innerHTML="C";
              }
              else if((ma>=61)&&(ma<=80)){
                document.getElementById("ma_grade").innerHTML="B";
              }
              else if((ma>=81)&&(ma<=100)){
                document.getElementById("ma_grade").innerHTML="A";
              }

              //history grade
              if((hi<=20)){
                document.getElementById("h_grade").innerHTML="E";
                }
                else if((hi>=21)&&(hi<=40)){
                  document.getElementById("h_grade").innerHTML="D";
                  }
                  else if((hi>=41)&&(hi<=60)){
                    document.getElementById("h_grade").innerHTML="C";
                  }
                  else if((hi>=61)&&(hi<=80)){
                    document.getElementById("h_grade").innerHTML="B";
                  }
                  else if((hi>=81)&&(hi<=100)){
                    document.getElementById("h_grade").innerHTML="A";
                  }

                  //Geography grade
                  if((ge<=20)){
                    document.getElementById("g_grade").innerHTML="E";
                  }
                  else if((ge>=21)&&(ge<=40)){
                    document.getElementById("g_grade").innerHTML="D";
                  }
                  else if((ge>=41)&&(ge<=60)){
                    document.getElementById("g_grade").innerHTML="C";
                  }
                  else if((ge>=61)&&(ge<=80)){
                    document.getElementById("g_grade").innerHTML="B";
                  }
                  else if((ge>=81)&&(ge<=100)){
                    document.getElementById("g_grade").innerHTML="B";
                  }

                  
                   //Political Science
                   if((po<=20)){
                    document.getElementById("po_grade").innerHTML="E";
                  }
                  else if((po>=21)&&(po<=40)){
                    document.getElementById("po_grade").innerHTML="D";
                  }
                  else if((po>=41)&&(po<=60)){
                    document.getElementById("po_grade").innerHTML="C";
                  }
                  else if((po>=61)&&(po<=80)){
                    document.getElementById("po_grade").innerHTML="B";
                  }
                  else if((po>=81)&&(po<=100)){
                    document.getElementById("po_grade").innerHTML="A";
                  }

                  //Sociology grade
                  if((so<=20)){
                    document.getElementById("so_grade").innerHTML="E";
                  }
                  else if((so>=21)&&(so<=40)){
                    document.getElementById("so_grade").innerHTML="D";
                  }
                  else if((so>=41)&&(so<=60)){
                    document.getElementById("so_grade").innerHTML="C";
                  }
                  else if((so>=61)&&(so<=80)){
                    document.getElementById("so_grade").innerHTML="B";
                  }
                  else if((so>=81)&&(so<=100)){
                    document.getElementById("so_grade").innerHTML="A";
                  }

                  //grade
                  if(((en+ma+ge+hi+po+so)/600*100<=20)){
                    document.getElementById("per_grade").innerHTML="E";
                  }
                  else if(((en+ma+ge+hi+po+so)/600*100>=21)&&((en+ma+ge+hi+po+so)/600*100<=40)){
                    document.getElementById("per_grade").innerHTML="D";
                  }
                  else if(((en+ma+ge+hi+po+so)/600*100>=41)&&((en+ma+ge+hi+po+so)/600*100<=60)){
                    document.getElementById("per_grade").innerHTML="C";
                  }
                  else if(((en+ma+ge+hi+po+so)/600*100>=61)&&((en+ma+ge+hi+po+so)/600*100<=80)){
                    document.getElementById("per_grade").innerHTML="B";
                  }
                  else if(((en+ma+ge+hi+po+so)/600*100>=81)&&((en+ma+ge+hi+po+so)/600*100<=100)){
                    document.getElementById("per_grade").innerHTML="A";
                  }      
                }
                    
        
        function downfun(marksheet){
          var printContents = document.getElementById(marksheet).innerHTML;
          var originalContents = document.body.innerHTML;
         document.body.innerHTML = printContents;
         window.print();
         document.body.innerHTML = originalContents;
          
        }
      
        function readURL(input) {
        if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
        $('#blah')
        .attr('src', e.target.result)
        .width(165)
        .height(140);
    };
    reader.readAsDataURL(input.files[0]);
  }
}
function previewFile() {
  var preview = document.querySelector('img');
  var file    = document.querySelector('input[type=file]').files[0];
  var reader  = new FileReader();

  reader.onloadend = function () {
    preview.src = reader.result;
  }

  if (file) {
    reader.readAsDataURL(file);
  } else {
    preview.src = "";
  }
}
