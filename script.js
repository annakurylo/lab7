let button = document.querySelector('.download_btn');
button.addEventListener('click', getResponse);
 
async function getResponse(){
    let success = document.querySelector('.download_success');
    success.innerHTML='';
    let people = document.querySelector('.people');
    people.innerHTML = '';
    for(let index = 0; index<5; index++){
    
        fetch('https://randomuser.me/api')
            .then(res => {
                if(res.ok){
                    success.innerHTML='success!';
                    return res.json();
                }else{
                    success.innerHTML='fail!';
                    throw Error;
                }
            })
            .then(data => 
                people.innerHTML += `
                    <div class="person">
                        <div class="person_image">
                            <img src="${data.results[0].picture.large}" alt="" width="300px" height="200px">
                         </div>
                        <div class="information">
                            <div class="inf"><span class="span">City:</span> ${data.results[0].location.city}</div>
                        </div>
                        <div class="information">
                            <div class="inf"><span class="span">Country:</span> ${data.results[0].location.country}</div>
                        </div> 
                        <div class="information">
                            <div class="inf"><span class="span">Postcode:</span> ${data.results[0].location.postcode}</div>
                        </div> 
                        <div class="information">
                            <div class="inf"><span class="span">e-mail:</span></br> ${data.results[0].email}</div>
                        </div>  
                    </div>
                    `    
                ).catch(error =>  {
                    success.innerHTML='fail!';
                    console.log(error);
                })     
    }
}