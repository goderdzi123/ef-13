let list = [
    {name:"გიორგი", photo:"images/student.png", age:24, reg:"2019/09/22", faculty:"პროგრამირება", attendance: 85, stipendium: true },
    {name:"გიორგი", photo:"images/student.png", age:22, reg:"2019/09/22", faculty:"ინჟინერია", attendance: 85, stipendium: false },
    {name:"გიორგი", photo:"images/student.png", age:23, reg:"2019/09/22", faculty:"ინჟინერია", attendance: 85, stipendium: false },
    {name:"გიორგი", photo:"images/student.png", age:25, reg:"2019/09/22", faculty:"ინფორმატიკა", attendance: 85, stipendium: false },
    {name:"გიორგი", photo:"images/student.png", age:14, reg:"2019/09/22", faculty:"ინჟინერია", attendance: 85, stipendium: false },
    {name:"გიორგი", photo:"images/student.png", age:34, reg:"2019/09/22", faculty:"ინფორმატიკა", attendance: 85, stipendium: false },
    {name:"გიორგი", photo:"images/student.png", age:22, reg:"2019/09/22", faculty:"ინფორმატიკაა", attendance: 85, stipendium: false },
    {name:"გიორგი", photo:"images/student.png", age:22, reg:"2019/09/22", faculty:"ინფორმატიკა", attendance: 85, stipendium: false },
    {name:"გიორგი", photo:"images/student.png", age:18, reg:"2019/09/22", faculty:"ინფორმატიკა", attendance: 85, stipendium: false },
    {name:"ნიკა", photo:"images/student.png", age:19, reg:"2019/09/22", faculty:"ინფორმატიკა", attendance: 85, stipendium: false },
    {name:"მარი", photo:"images/student.png", age:19, reg:"2019/09/22", faculty:"ინფორმატიკა", attendance: 85, stipendium: false },
    {name:"ნანა", photo:"images/student.png", age:24, reg:"2019/09/22", faculty:"ინფორმატიკა", attendance: 85, stipendium: false },
    {name:"ალექსანდრე", photo:"images/student.png", age:27, reg:"2019/09/22", faculty:"ინფორმატიკა", attendance: 85, stipendium: false },
    {name:"ალექსანდრე", photo:"images/student.png", age:28, reg:"2019/09/22", faculty:"პროგრამირება", attendance: 85, stipendium: false },
    {name:"ალექსანდრე", photo:"images/student.png", age:27, reg:"2019/09/22", faculty:"პროგრამირება", attendance: 85, stipendium: false },
    {name:"ალექსანდრე", photo:"images/student.png", age:29, reg:"2019/09/22", faculty:"პროგრამირება", attendance: 85, stipendium: false },
    {name:"ალექსანდრე", photo:"images/student.png", age:23, reg:"2019/09/22", faculty:"პროგრამირება", attendance: 85, stipendium: false },
    {name:"ნანა", photo:"images/student.png", age:23, reg:"2019/09/22", faculty:"ავიაცია", attendance: 85, stipendium: true },
    {name:"ნანა", photo:"images/student.png", age:13, reg:"2019/09/22", faculty:"პროგრამირება", attendance: 85, stipendium: false },
    {name:"ნანა", photo:"images/student.png", age:12, reg:"2019/09/22", faculty:"პროგრამირება", attendance: 85, stipendium: false },
    {name:"ნანა", photo:"images/student.png", age:35, reg:"2019/09/22", faculty:"პროგრამირება", attendance: 85, stipendium: false },
    {name:"ნანა", photo:"images/student.png", age:17, reg:"2019/09/22", faculty:"პროგრამირება", attendance: 85, stipendium: false },
    {name:"ნიკა", photo:"images/student.png", age:21, reg:"2019/09/22", faculty:"ინჟინერია", attendance: 85, stipendium: true },
    {name:"ნიკა", photo:"images/student.png", age:20, reg:"2019/09/22", faculty:"ინჟინერია", attendance: 85, stipendium: true },
    {name:"ნიკა", photo:"images/student.png", age:20, reg:"2019/09/22", faculty:"ინჟინერია", attendance: 85, stipendium: false },
    {name:"ნიკა", photo:"images/student.png", age:28, reg:"2019/09/22", faculty:"ინჟინერია", attendance: 85, stipendium: false },
    {name:"ნიკა", photo:"images/student.png", age:22, reg:"2019/09/22", faculty:"ინჟინერია", attendance: 85, stipendium: false },
    {name:"მარი", photo:"images/student.png", age:24, reg:"2019/09/22", faculty:"ინჟინერია", attendance: 85, stipendium: false },
    {name:"მარი", photo:"images/student.png", age:36, reg:"2019/09/22", faculty:"ინჟინერია", attendance: 85, stipendium: false },
    {name:"მარი", photo:"images/student.png", age:31, reg:"2019/09/22", faculty:"ინჟინერია", attendance: 85, stipendium: false },
];

let finall = document.getElementById("finall")


function checkst(person){
    if (person.stipendium) {
        return person;
    } 
}

let st = list.filter(checkst);
console.log(st)



function selectprof(value){
  
    finall.innerHTML = ''

    if (value == 1) {
        var prof = "პროგრამირება";
    } else if (value == 2) {
        var prof = "ინფორმატიკა";
    }else{
        var prof = "ინჟინერია";
    } 

    let ages = list.filter(findage)

    function findage(lis){
        return lis.faculty == prof;
    }
    
    ages.forEach(showlist);
}



function finds(value){
  
    finall.innerHTML = ''

    let ages = list.filter(findage)

    function findage(lis){
        return ! lis.name.search(value)
    }
    
    ages.forEach(showlist);
}

function showlist(element){

    let persona = `
    <div class="col-md-4 card-group">
    <div class="card mb-3 shadow" >
    <div class="row g-0">
      <div class="col-md-4 d-flex align-items-center">
        <img class="card-img" src="${element.photo}" alt="...">
      </div>
      <div class="col-md-8">
       <div class="card-body">
          <h4 class="card-title">${element.name}</h4>
          <p class="card-text"> ასაკი: ${element.age}</p>
          <p class="card-text"> ${element.faculty}</p>
         <span class="badge bg-light text-dark p-1 mb-3"> ${element.reg} </span>
         <div class="card-footer p-0">
         </div>
       </div>
       </div>
       </div>
    </div>
 </div>`;
 finall.innerHTML += persona }









