window.onload=function()
{
   takevalue();
}
function takevalue()
{
    fetch('https://opinion-2019.herokuapp.com/bjp')
    .then((res)=> res.text())
    .then((data)=>{
        let output;
        data.forEach(element => {
            output+=`
               <ul>
                  <li>Positive Percentage: ${ element.positive_perc }</li>
                  <li>Negative Percentage: ${element.negative_perc}</li>
                  <li>Positive Reviews: ${ element.positive_no}</li>
                  <li>Negative Reviews: ${ element.negative_no}</li>
                  <li>Opinion: ${element.prediction}</li>
                </ul>
                `
        });
        document.getElementById('bjp').innerHTML=output;
    })
}