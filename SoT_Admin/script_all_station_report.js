(() => {
  const tableBody = document.querySelector("#table-body");
  const data = [
    { trainId: 1, station: "A", earnings: 3000, passengers: 300 },
    { trainId: 1, station: "A", earnings: 3000, passengers: 300 },
    { trainId: 1, station: "A", earnings: 3000, passengers: 300 },
    { trainId: 1, station: "A", earnings: 3000, passengers: 300 },
    { trainId: 1, station: "A", earnings: 3000, passengers: 300 },
    { trainId: 1, station: "A", earnings: 3000, passengers: 300 },
    { trainId: 1, station: "A", earnings: 3000, passengers: 300 },
    { trainId: 1, station: "A", earnings: 3000, passengers: 300 },
    { trainId: 1, station: "A", earnings: 3000, passengers: 300 },
    { trainId: 1, station: "A", earnings: 3000, passengers: 300 },
    { trainId: 1, station: "A", earnings: 3000, passengers: 300 },
    { trainId: 1, station: "A", earnings: 3000, passengers: 300 },
  ];

  data.forEach((train) => {
    const tableRow = document.createElement("tr");

    // Train ID
    const trainId = document.createElement("td");
    trainId.classList.add("border", "border-2", "p-3");
    trainId.innerText = train.trainId;
    tableRow.appendChild(trainId);

    // Station
    const station = document.createElement("td");
    station.classList.add("border", "border-2", "p-3");
    station.innerText = train.station;
    tableRow.appendChild(station);

    // Earnings
    const earnings = document.createElement("td");
    earnings.classList.add("border", "border-2", "p-3");
    earnings.innerText = train.earnings;
    tableRow.appendChild(earnings);

    // Passengers
    const passengers = document.createElement("td");
    passengers.classList.add("border", "border-2", "p-3");
    passengers.innerText = train.passengers;
    tableRow.appendChild(passengers);

    tableBody.appendChild(tableRow);
  });
})();
