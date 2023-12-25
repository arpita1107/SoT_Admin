(() => {
  const tableBody = document.querySelector("#table-body");
  const data = [
    {
      passengerID: 1,
      Name: "A",
      Destination: "Aao Mono yokuchu",
      StopNum: 300,
      FareAmt: 1000,
      ModeOfPayment: "Cash",
      TransDateTime: "YYYY-MM-DD HH:MM:SS",
    },
    {
      passengerID: 1,
      Name: "A",
      Destination: "Aao Mono yokuchu",
      StopNum: 300,
      FareAmt: 1000,
      ModeOfPayment: "Cash",
      TransDateTime: "YYYY-MM-DD HH:MM:SS",
    },
    {
      passengerID: 1,
      Name: "A",
      Destination: "Aao Mono yokuchu",
      StopNum: 300,
      FareAmt: 1000,
      ModeOfPayment: "Cash",
      TransDateTime: "YYYY-MM-DD HH:MM:SS",
    },
    {
      passengerID: 1,
      Name: "A",
      Destination: "Aao Mono yokuchu",
      StopNum: 300,
      FareAmt: 1000,
      ModeOfPayment: "Cash",
      TransDateTime: "YYYY-MM-DD HH:MM:SS",
    },
    {
      passengerID: 1,
      Name: "A",
      Destination: "Aao Mono yokuchu",
      StopNum: 300,
      FareAmt: 1000,
      ModeOfPayment: "Cash",
      TransDateTime: "YYYY-MM-DD HH:MM:SS",
    },
    {
      passengerID: 1,
      Name: "A",
      Destination: "Aao Mono yokuchu",
      StopNum: 300,
      FareAmt: 1000,
      ModeOfPayment: "Cash",
      TransDateTime: "YYYY-MM-DD HH:MM:SS",
    },
    {
      passengerID: 1,
      Name: "A",
      Destination: "Aao Mono yokuchu",
      StopNum: 300,
      FareAmt: 1000,
      ModeOfPayment: "Cash",
      TransDateTime: "YYYY-MM-DD HH:MM:SS",
    },
    {
      passengerID: 1,
      Name: "A",
      Destination: "Aao Mono yokuchu",
      StopNum: 300,
      FareAmt: 1000,
      ModeOfPayment: "Cash",
      TransDateTime: "YYYY-MM-DD HH:MM:SS",
    },
    {
      passengerID: 1,
      Name: "A",
      Destination: "Aao Mono yokuchu",
      StopNum: 300,
      FareAmt: 1000,
      ModeOfPayment: "Cash",
      TransDateTime: "YYYY-MM-DD HH:MM:SS",
    },
    {
      passengerID: 1,
      Name: "A",
      Destination: "Aao Mono yokuchu",
      StopNum: 300,
      FareAmt: 1000,
      ModeOfPayment: "Cash",
      TransDateTime: "YYYY-MM-DD HH:MM:SS",
    },
    {
      passengerID: 1,
      Name: "A",
      Destination: "Aao Mono yokuchu",
      StopNum: 300,
      FareAmt: 1000,
      ModeOfPayment: "Cash",
      TransDateTime: "YYYY-MM-DD HH:MM:SS",
    },
    {
      passengerID: 1,
      Name: "A",
      Destination: "Aao Mono yokuchu",
      StopNum: 300,
      FareAmt: 1000,
      ModeOfPayment: "Cash",
      TransDateTime: "YYYY-MM-DD HH:MM:SS",
    },
  ];

  data.forEach((train) => {
    const tableRow = document.createElement("tr");

    // Pa ID
    const passengerID = document.createElement("td");
    passengerID.classList.add("border", "border-2", "p-3");
    passengerID.innerText = train.passengerID;
    tableRow.appendChild(passengerID);

    // Name
    const Name = document.createElement("td");
    Name.classList.add("border", "border-2", "p-3");
    Name.innerText = train.Name;
    tableRow.appendChild(Name);

    // Destination
    const Destination = document.createElement("td");
    Destination.classList.add("border", "border-2", "p-3");
    Destination.innerText = train.Destination;
    tableRow.appendChild(Destination);

    // StopNum
    const StopNum = document.createElement("td");
    StopNum.classList.add("border", "border-2", "p-3");
    StopNum.innerText = train.StopNum;
    tableRow.appendChild(StopNum);

    // FareAmt
    const FareAmt = document.createElement("td");
    FareAmt.classList.add("border", "border-2", "p-3");
    FareAmt.innerText = train.FareAmt;
    tableRow.appendChild(FareAmt);

    // ModeOfPayment
    const ModeOfPayment = document.createElement("td");
    ModeOfPayment.classList.add("border", "border-2", "p-3");
    ModeOfPayment.innerText = train.ModeOfPayment;
    tableRow.appendChild(ModeOfPayment);

    // TransDateTime
    const TransDateTime = document.createElement("td");
    TransDateTime.classList.add("border", "border-2", "p-3");
    TransDateTime.innerText = train.TransDateTime;
    tableRow.appendChild(TransDateTime);

    tableBody.appendChild(tableRow);
  });
})();
