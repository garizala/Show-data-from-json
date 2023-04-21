
function showData(){
    console.log('dentro de la funcion');

    const listData = new XMLHttpRequest();
    listData.open('GET', '../data/data.json', true);

    listData.send();

    listData.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
            //console.log(this.responseText);
            let newData = JSON.parse(this.responseText);
            console.log(newData);

            let res = document.querySelector("#result");
            res.innerHTML = "";
            for (let i of newData ) {
                /*res.innerHTML += `  <tr>
                                        <td><img src="${i.cover}" alt=""></td>
                                        <td>${i.artist}</td>
                                        <td>${i.price}</td>
                                        <td><a href="#">${i.link}</a></td>
                                    </tr>
                                    `*/
                res.innerHTML += `
                                        <li>
                                        <img src="${i.cover}" alt="">
                                        <h4>${i.artist}</h4>
                                        <p>$ ${i.price}</p>
                                        <a href="">${i.link}</a>
                                        </li>
                                `                 
            }
        }
    }
}

showData()