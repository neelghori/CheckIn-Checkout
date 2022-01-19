const btn1=document.querySelector('button');
console.log(btn1);
const btn2=document.querySelector('button:last-child');
const tbody=document.querySelector('tbody');

let count=1,hours,min,checkingetTime,Ampms,Outtime,oneCommonObject,checkOurgetTime,Ampm,totalWorkDuration=0,totalBrDuration=0;  
const checkin=()=>{
  btn2.disabled=false;
    btn1.disabled=true;
    const Intime=new Date();
     checkingetTime=(Intime.getTime()/1000).toFixed(0);
    console.log(checkingetTime);
     hours=Intime.getHours();
     min=Intime.getMinutes();
     Ampms= hours >=12?"PM":"AM";
      if(hours > 12){
          hours=hours%12;   
      }
      if(min < 10){
          min='0'+min;
        
      }

      const timeBreak=(Intime.getTime()/1000).toFixed(0);
      const timeOutBreak=(Outtime.getTime()/1000).toFixed(0);

      const differenceBreak=timeBreak-timeOutBreak;
      const totalBreakHours=differenceBreak/3600;
      const totalBreakMinutes=(differenceBreak/60);
    const totalBreakDuration=(totalBreakHours/60)+totalBreakMinutes;
    totalBrDuration+=totalBreakDuration;
    let OriginalHours = Math.floor(totalBrDuration / 60);
    let OriginalMinutes = Math.floor(totalBrDuration % 60);
    let OriginalWorkSecond=Math.floor(totalBrDuration*60);
    
    document.getElementById('breakDuration').innerHTML=`${OriginalHours} Hours ${OriginalMinutes} Minutes ${OriginalWorkSecond} Second`;
    
    
}
btn1.addEventListener('click',checkin);
const checkout = () =>{
   
     Outtime=new Date();
     checkOurgetTime=(Outtime.getTime()/1000).toFixed(0);
    console.log(checkOurgetTime);
    let hours2=Outtime.getHours();
    let min2=Outtime.getMinutes();
    Ampm= hours2 >=12?"PM":"AM";
      if(hours2 > 12){
        hours2=hours2%12;
        
      }

      if(min2 < 10){
        min2='0'+min2;
          //console.log(min2);
      }
   
    
   
 const differenceTime=checkOurgetTime-checkingetTime;
 const totalHours=differenceTime/3600;
 const totalMinutes=(differenceTime/60);

 const totalInDuration=(totalHours/60)+totalMinutes;
 totalWorkDuration+=totalInDuration;
 let OriginalWorkHours = Math.floor(totalWorkDuration / 60);
 let OriginalWorkMinutes =Math.floor(totalWorkDuration % 60);
 let OriginalWorkSecond=Math.floor(totalWorkDuration*60);

    const appendData=` <tr>
            <th scope="row">${count++}</th>
            <td>${hours}:${min} ${Ampms}</td>
            <td>${hours2}:${min2} ${Ampm}</td>
            <td>${Math.floor(totalHours)} Hours ${Math.floor(totalMinutes)%60} Minutes</td>
            </tr>`;
            tbody.insertAdjacentHTML('beforebegin',appendData);
     document.getElementById('workDuration').innerHTML=`${OriginalWorkHours} Hours ${OriginalWorkMinutes} Minutes ${OriginalWorkSecond} Second`;
    btn2.disabled=true;
    btn1.disabled=false;

  
}





btn2.disabled=true;

btn2.addEventListener('click',checkout);