 let ArrayData = [];

 let DataClient = document.getElementById('DataClient');

 async function ReadData() {
    const Answer = await fetch("https://alejandro-lopez.futuretecware.com/geolocation/geolocation.php");
    const data = await Answer.json();
    return data;
}

async function ShowInfo() {
    try { 
        ArrayData = await ReadData();
    }
    catch (Warning) {
        console.log("Error generado: " + Warning)
    }
        console.log(ArrayData);

    DataClient.innerHTML = `${DataClient.innerHTML} 
    <tr>
        <td>${ArrayData.Ip}</td> 
        <td>${ArrayData.Country}</td> 
        <td>${ArrayData.City}</td> 
        <td>
    </tr> `
 }
 ShowInfo();
 //! https://www.youtube.com/watch?v=1llmwngwoeA