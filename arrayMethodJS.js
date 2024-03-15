    
    var arry=[];

    function displayArrResult(){
        var n=arry;
        document.getElementById('arrCount').innerHTML=n.toString();
    }
    function onpush(){
        var v=document.getElementById('input-arr').value;
        arry.push(v);
        document.getElementById('input-arr').value="";
        displayArrResult();
    }
    function onpop(){
        arry.pop();
        displayArrResult();
    }
    function onunshift(){
        var v=document.getElementById('input-arr').value;
        arry.unshift(v);
        document.getElementById('input-arr').value="";
        displayArrResult();
    }
    function onpshift(){
        arry.shift();
        displayArrResult();
    }
    function onshort_asc(){
        arry.sort();
        displayArrResult();
    }
    function onshort_desc(){
        arry.sort();
        arry.reverse();
        displayArrResult();
    }
    // function displayArrSearch(){
    //     var b=container;
    //     document.getElementById('arrCountSearch').innerHTML=b.toString();
    // }
    function onsearcharr(){
        var c=document.getElementById('searchArr').value;
        var container=arry.find(myFunction);
        function myFunction(value, index, array) {
            return value == c;
          }
        document.getElementById('arrCountSearch').innerHTML=container;
        
    }
