const tableBody = document.getElementById("tableBody")
const id = document.getElementById("txtId")
const name = document.getElementById("txtName")
const email = document.getElementById("txtEmail")
const age = document.getElementById("txtAge")

function obtenerClientes(){
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");

    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };

    fetch("https://gd257f4deb7943f-ntvho1f0kb24nopq.adb.us-chicago-1.oraclecloudapps.com/ords/admin/client/client", requestOptions)
    .then(response => response.json())
    .then(result => {
        const datos = result.items
        datos.forEach(element => {
            tableBody.innerHTML += `
            <tr>
                <td>${element.id}</td>
                <td>${element.name}</td>
                <td>${element.email}</td>
                <td>${element.age}</td>
                <td><button>Detalles</button></td>
                <td><button>Eliminar</button></td>
            </tr>
            `
        });
    })
    .catch(error => console.log('error', error));
}

obtenerClientes()