const generateForm = document.getElementById("generateCertificateForm");

generateForm.onsubmit = async (e) => {
  e.preventDefault();
  var form = document.querySelector("#formElem");
  // var form = document.forms[0];

  data = {
    firstname: form.querySelector('input[name="firstname"]').value,
    lastname: form.querySelector('input[name="lastname"]').value,
    age: 5,
  };

  let response = await fetch("http://localhost:8482/decode", {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  let text = await response.text(); // read response body as text
  document.querySelector("#decoded").innerHTML = text;
};
