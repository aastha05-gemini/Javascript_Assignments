let namecheck,
  emailcheck,
  mobilecheck = false;
let counter = 1;
const handleSubmit = () => {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  formvalidation(name, email, phone);
};

const formvalidation = (name, email, phone) => {
  const pattern1 = /^([a-zA-Z ]){2,30}$/;
  const pattern2 = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  const pattern3 = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if (pattern1.test(name) && name.length != 0) {
    namecheck = true;
    document.getElementById("namecheck").style.display = "none";
  } else {
    namecheck = false;
    document.getElementById("namecheck").style.display = "block";
  }
  if (pattern2.test(email) && email.length != 0) {
    emailcheck = true;
    document.getElementById("emailcheck").style.display = "none";
  } else {
    emailcheck = false;
    document.getElementById("emailcheck").style.display = "block";
  }
  if (pattern3.test(phone) && phone.length == 10) {
    mobilecheck = true;
    document.getElementById("mobilecheck").style.display = "none";
  } else {
    mobilecheck = false;
    document.getElementById("mobilecheck").style.display = "block";
  }
  saveAllValidData(namecheck, emailcheck, mobilecheck, name, email, phone);
};

const saveAllValidData = (
  namecheck,
  emailcheck,
  mobilecheck,
  name,
  email,
  phone
) => {
  if (namecheck && emailcheck && mobilecheck) {
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);
    addDetailsToTable();
  }
};

const addDetailsToTable = () => {
  var table = document.getElementById("table-body");
  let data = document.createElement("tr");
  data.innerHTML = `<tr>
    <td>${counter}</td>
    <td>${localStorage.getItem("name")}</td>
    <td>${localStorage.getItem("email")}</td>
    <td>${localStorage.getItem("phone")}</td>
  </tr>`;
  table.append(data);
  counter++;
};