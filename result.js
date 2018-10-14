window.onload = function runonstart()
{
    var bjp=takevalue_bjp();
    var cong=takevalue_cong();
    console.log(bjp);
    // var winner;
    // if (bjp>cong)
    // {
    //   winner="BJP";
    // }
    // else
    // {
    //     winner="CONGRESS";
    // }
    // let output="<br><br><h4>Result</h4><br>";
    // output+=`
    // <h5>${ winner} is winning at this moment....</h5> 
    //  `
    //  document.getElementById('declare').innerHTML=output;
}
function takevalue_bjp()
{
   var b;
    fetch('https://opinion-2019.herokuapp.com/bjp')
    .then((res)=> res.json())
    .then((data)=>{
        let output="<h4>BJP</h4><br>";
        console.log(data)
        const arr = Object.keys(data).map(function(_) { return data[_]; })
        arr[3]=arr[3].toFixed(2);
        arr[4]=arr[4].toFixed(2);
        b=arr[3];
            output+=`
               <ul>
                  <li>Positive Percentage: ${ arr[3] + '%'}</li>
                  <li>Negative Percentage: ${arr[4] + '%'}</li>
                  <li>Positive Reviews: ${ arr[1]}</li>
                  <li>Negative Reviews: ${ arr[2]}</li>
                  <li>Opinion: ${arr[0]}</li>
                </ul>
                `
    
        document.getElementById('bjp').innerHTML=output;
    })
   return b;
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
                  <li>Positive Percentage: ${ arra[3]+ '%'}</li>
                  <li>Negative Percentage: ${arra[4]+ '%'}</li>
                  <li>Positive Reviews: ${ arra[1]}</li>
                  <li>Negative Reviews: ${ arra[2]}</li>
                  <li>Opinion: ${arra[0]}</li>
                </ul>
                `
            let changing=`<h3>* Results are continously changing......</h3>
            <h3>* The Final Result will be available on 10 JANUARY 2019</h3>`    
    
        document.getElementById('congress').innerHTML=output;
        document.getElementById('change').innerHTML=changing;
    })
    // return c;
    // console.log(c);

}
