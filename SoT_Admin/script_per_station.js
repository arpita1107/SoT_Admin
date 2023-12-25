(() => {
  const tableBody = document.querySelector("#table-body");
  const data = [
    { PassengerID: 1, Name: "A", TransactionDateTime: "YYYY-MM-DD HH:MI:SS" },
    { PassengerID: 1, Name: "A", TransactionDateTime: "YYYY-MM-DD HH:MI:SS" },
    { PassengerID: 1, Name: "A", TransactionDateTime: "YYYY-MM-DD HH:MI:SS" },
    { PassengerID: 1, Name: "A", TransactionDateTime: "YYYY-MM-DD HH:MI:SS" },
    { PassengerID: 1, Name: "A", TransactionDateTime: "YYYY-MM-DD HH:MI:SS" },
    { PassengerID: 1, Name: "A", TransactionDateTime: "YYYY-MM-DD HH:MI:SS" },
    { PassengerID: 1, Name: "A", TransactionDateTime: "YYYY-MM-DD HH:MI:SS" },
    { PassengerID: 1, Name: "A", TransactionDateTime: "YYYY-MM-DD HH:MI:SS" },
    { PassengerID: 1, Name: "A", TransactionDateTime: "YYYY-MM-DD HH:MI:SS" },
    { PassengerID: 1, Name: "A", TransactionDateTime: "YYYY-MM-DD HH:MI:SS" },
    { PassengerID: 1, Name: "A", TransactionDateTime: "YYYY-MM-DD HH:MI:SS" },
    { PassengerID: 1, Name: "A", TransactionDateTime: "YYYY-MM-DD HH:MI:SS" },
  ];

  // date and time format: "YYYY-MM-DD HH:MI:SS"

  data.forEach((train) => {
    const tableRow = document.createElement("tr");

    // passenger ID
    const PassengerID = document.createElement("td");
    PassengerID.classList.add("border", "border-2", "p-3");
    PassengerID.innerText = train.PassengerID;
    tableRow.appendChild(PassengerID);

    // Name
    const Name = document.createElement("td");
    Name.classList.add("border", "border-2", "p-3");
    Name.innerText = train.Name;
    tableRow.appendChild(Name);

    // TransactionDateTime
    const TransactionDateTime = document.createElement("td");
    TransactionDateTime.classList.add("border", "border-2", "p-3");
    TransactionDateTime.innerText = train.TransactionDateTime;
    tableRow.appendChild(TransactionDateTime);

    // Passengers
    // const passengers = document.createElement("td");
    // passengers.classList.add("border", "border-2", "p-3");
    // passengers.innerText = train.passengers;
    // tableRow.appendChild(passengers);

    tableBody.appendChild(tableRow);
  });
})();
