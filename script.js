let facts = document.querySelector('#fact');
let factText = document.querySelector('#faceText');

let numberInput = document.querySelector('#numberInput');
// numberInput.addEventListener('input',getFactAjax);
numberInput.addEventListener('input',getFactFetch);

// function getFactAjax(){
    
//     //number value
//     let number  = numberInput.value;
//     let xhr = new XMLHttpRequest();

//     xhr.open('GET',`http://numbersapi.com/${number}`,true)

//     xhr.onload = function(){
//         if(this.status == 200 && number !== ''){
//             facts.style.display = 'block';
//             factText.innerText = this.responseText;
//         }else{
//             facts.style.display = 'none';
//         }

    
//     }
//     xhr.send();
// }

//Using Fetch API
function getFactFetch(){
    //number value
    let number  = numberInput.value;

    fetch(`http://numbersapi.com/${number}`)
        .then(res => res.text())
        .then(data => {
            if(number !== ''){
                facts.style.display = 'block';
                factText.innerText = data;
            }else{
                facts.style.display = 'none';
            }
        })
        .catch(err => console.log(err))
}
