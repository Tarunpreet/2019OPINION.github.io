window.onload = function runonstart()
{
    var bjp=takevalue_bjp();
    var cong=takevalue_cong();
    
}    
function takevalue_bjp()
{
    var b=fetch('https://opinion-2019.herokuapp.com/bjp')
    .then((res)=> res.json())
    .then((data)=>{
        let output="<h4>BJP</h4><br>";
        console.log(data)
        arr = Object.keys(data).map(function(_) { return data[_]; })
        arr[3]=arr[3].toFixed(2);
        arr[4]=arr[4].toFixed(2);
        
            output+=`
               <ul>
                  
                  <li>Positive Reviews: ${ arr[1]}</li>
                  <br>
                  <li>Negative Reviews: ${ arr[2]}</li>
                  <br>
                  <li>Total Reviews: ${ arr[1]+arr[2]}</li>
                  <br>
                </ul>
                `
    
        document.getElementById('bjp').innerHTML=output;
      
    })
}
function takevalue_cong()
{
    var c;
    fetch('https://opinion-2019.herokuapp.com/cong')
    .then((res)=> res.json())
    .then((data)=>{
        let output="<h4>CONGRESS</h4><br>";
        console.log(data)
        var arra = Object.keys(data).map(function(_) { return data[_]; })
        arra[3]=arra[3].toFixed(2);
        arra[4]=arra[4].toFixed(2);
        c=arra[3];
            output+=`
               <ul>
                  
                  <li>Positive Reviews: ${ arra[1]}</li>
                  <br>
                  <li>Negative Reviews: ${ arra[2]}</li>
                  <br>
                  <li>Total Reviews: ${ arra[1]+arra[2]}</li>
                  <br>
                </ul>
                `
        //     let changing=`<h3>* Results are continously changing......</h3>
        //     <h3>* The Final Result will be available on 10 JANUARY 2019</h3>`    
    
        document.getElementById('congress').innerHTML=output;
        document.getElementById('results').style.display='inline';
    })
    // return c;
    // console.log(c);

}
function results()
{
    document.querySelector(".bg-modal").style.display='flex';
    document.getElementById('close').addEventListener('click',function()
    {
        document.querySelector(".bg-modal").style.display='none';
        document.getElementById('rahul').style.display='none';
        document.getElementById('modi').style.display='none';
        document.getElementById('who_won').innerHTML='';
    });
    fetch('https://opinion-2019.herokuapp.com/comp')
    .then((res)=> res.json())
    .then((data)=>{
        let output="<h4>CONGRESS</h4><br>";
        console.log(data)
        var arr1 = Object.keys(data).map(function(_) { return data[_]; })
        winner=arr1[0]
          if(winner==="Congress")
          {
            document.getElementById('rahul').style.display='inline';
            changing=`<h2>${winner} is Winning Till Now<h2><br>
            <h3>* Results are continously changing......</h3>
           <h3>* The Final Result will be available on 10 JANUARY 2019</h3>`
          }
          else if(winner==="BJP")
          {
            document.getElementById('modi').style.display='inline';
            changing=`<h2>${winner} is Winning Till Now<h2><br>
            <h3>* Results are continously changing......</h3>
            <h3>* The Final Result will be available on 10 JANUARY 2019</h3>`
          }
          else
          {
              changing=`<h2>The Result is Draw at The Moment<h2>
              <h3>* Results are continously changing......</h3>
              <h3>* The Final Result will be available on 10 JANUARY 2019</h3>
              `
          }

        
        document.getElementById('who_won').innerHTML=changing;
    })
}
