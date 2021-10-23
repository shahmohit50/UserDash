const Data = [
  {
      id : "1",
      Projects: "New Admin Design",
      Start_Date: "2019-05-02",
      Status: "Completed",
      Team: "https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-1.jpg",
      Progress: 100
  },
  {
    id : "2",
      Projects: "Landing Page Design",
      Start_Date: "2019-06-04",
      Status: "Pending",
      Team: "https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-2.jpg",
      Progress: 78
  },
  {
    id : "3",
      Projects: "Multipurpose Landing Template",
      Start_Date: "2019-06-06",
      Status: "Completed",
      Team: "https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-3.jpg",
      Progress: 100
  },{
    id : "4",
      Projects: "Blog Template Design",
      Start_Date: "2019-05-07",
      Status: "Completed",
      Team: "https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-4.jpg",
      Progress: 100
  },
  {
    id : "5",
      Projects: "Brand Logo Design",
      Start_Date: "2019-06-08",
      Status: "Pending",
      Team: "https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-5.jpg",
      Progress: 54
  },
  {
    id : "6",
      Projects: "Redesign - Landing Page",
      Start_Date: "2019-06-10",
      Status: "Pending",
      Team: "https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-2.jpg",
      Progress: 41
  },
  {
    id : "7",
      Projects: "Redesign - Dashboard",
      Start_Date: "2019-05-12",
      Status: "Completed",
      Team: "https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-3.jpg",
      Progress: 100
  },
  {
    id : "8",
      Projects: "Landing Page Design",
      Start_Date: "2019-06-13",
      Status: "Pending",
      Team: "https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-4.jpg",
      Progress: 84
  },
  {
    id : "9",
      Projects: "Multipurpose Landing Template",
      Start_Date: "2019-06-15",
      Status: "Completed",
      Team: "https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-5.jpg",
      Progress: 100
  }
];

function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
      let th = document.createElement("th");
      var text;
      if(key == "id"){
         text = document.createTextNode("#");
      }else{
         text = document.createTextNode(key);
      }
      
      th.appendChild(text);
      row.appendChild(th);
    }
    let th = document.createElement('th')
     text = document.createTextNode('Actions')
    th.appendChild(text)
    row.appendChild(th)
  }
    
  function generateTable(table, data) {
    for (let element of data) {
      let row = table.insertRow();
      for (let key in element) {
          if(typeof element[key] === 'string' && element[key].includes('https://')) {
              let cell = row.insertCell()
              let image = document.createElement('img')
              image.src = element[key]
              cell.appendChild(image)
          } else if(typeof element[key] === 'number') {
              let cell = row.insertCell()
              let div = document.createElement('div')
              let innerDiv = document.createElement('div')
              innerDiv.style.width = element[key] + "%";
              div.appendChild(innerDiv)
              cell.appendChild(div)
          } else {
              let cell = row.insertCell();
              let text = document.createTextNode(element[key]);
              cell.appendChild(text);
          }
      }
      let cell = row.insertCell();
      let newCell = row.insertCell(-1);
      let edit = document.createElement('button')
      edit.addEventListener('click', () => {
        alert("not yet working")
      })
      let remove = document.createElement('button')
      remove.addEventListener('click', (event) => {
        let td = event.target.parentNode; 
        let tr = td.parentNode; 
        tr.parentNode.removeChild(tr)
      })
      cell.appendChild(edit);
      newCell.appendChild(remove)
    }
  }
  let table = document.querySelector("table");
let data = Object.keys(Data[0]);
generateTableHead(table, data);
generateTable(table, Data);
function addData(event) {
    const newData = []
    const obj = {};
    event.preventDefault()
    const getData = document.querySelectorAll('#addData input')
    console.log(getData[1].value)
    obj.projectName = getData[0].value
    obj.startDate = getData[1].value
    obj.status = getData[2].value < 100 ? 'Pending' : 'Completed'
    obj.members = "https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-3.jpg"
    obj.progress = parseInt(getData[2].value)
    newData.unshift(obj)
    generateTable(table, newData);
    document.querySelector('#addData').style.display = 'none'
  }
  