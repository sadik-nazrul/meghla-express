const busSeats = [
    { seatName: "A1", cost: 550, id: "A1" }, { seatName: "A2", cost: 550, id: "A2" }, { seatName: "A3", cost: 550, id: "A3" }, { seatName: "A4", cost: 550, id: "A4" }, { seatName: "B1", cost: 550, id: "B1" }, { seatName: "B2", cost: 550, id: "B2" }, { seatName: "B3", cost: 550, id: "B3" }, { seatName: "B4", cost: 550, id: "B4" }, { seatName: "C1", cost: 550, id: "C1" }, { seatName: "C2", cost: 550, id: "C2" }, { seatName: "C3", cost: 550, id: "C3" }, { seatName: "C4", cost: 550, id: "C4" }, { seatName: "D1", cost: 550, id: "D1" }, { seatName: "D2", cost: 550, id: "D2" }, { seatName: "D3", cost: 550, id: "D3" }, { seatName: "D4", cost: 550, id: "D4" }, { seatName: "E1", cost: 550, id: "E1" }, { seatName: "E2", cost: 550, id: "E2" }, { seatName: "E3", cost: 550, id: "E3" }, { seatName: "E4", cost: 550, id: "E4" }, { seatName: "F1", cost: 550, id: "F1" }, { seatName: "F2", cost: 550, id: "F2" }, { seatName: "F3", cost: 550, id: "F3" }, { seatName: "F4", cost: 550, id: "F4" }, { seatName: "G1", cost: 550, id: "G1" }, { seatName: "G2", cost: 550, id: "G2" }, { seatName: "G3", cost: 550, id: "G3" }, { seatName: "G4", cost: 550, id: "G4" }, { seatName: "H1", cost: 550, id: "H1" }, { seatName: "H2", cost: 550, id: "H2" }, { seatName: "H3", cost: 550, id: "H3" }, { seatName: "H4", cost: 550, id: "H4" }, { seatName: "I1", cost: 550, id: "I1" }, { seatName: "I2", cost: 550, id: "I2" }, { seatName: "I3", cost: 550, id: "I3" }, { seatName: "I4", cost: 550, id: "I4" }, { seatName: 'J1', cost: 550, id: 'J1' }, { seatName: "J2", cost: 550, id: "J2" }, { seatName: "J3", cost: 550, id: "J3" }, { seatName: "J4", cost: 550, id: "J4" }
];

// Get Bus seat container
const busContainer = document.getElementById('allSeats');

// Loop though the bus seats array get get individual seats with all the info
for (const seat of busSeats) {
    // Create a li on bus conatainer for setup those seats
    const seatLi = document.createElement('li');
    seatLi.classList.add('seat');
    seatLi.textContent = seat.seatName;
    seat.id = seat.id;
    seatLi.value = seat.cost;
    busContainer.appendChild(seatLi);
}

// Selected seat container
const selectedSeats = document.getElementById('selectedSeats');


// get all seat elements
const seatList = document.querySelectorAll('.seat');

// loop through the seatlist and get single seat for doing something
for (const seatLi of seatList) {
    seatLi.addEventListener('click', function seatClick() {

        // Selected Seat count
        const selectSeatCount = selectedSeats.childElementCount;

        // Limit Seat selection
        if (selectSeatCount < 4) {

            if (selectSeatCount === 3) {
                couponField.removeAttribute('disabled', true);
                couponField.classList.add('bg-[#1DD10040]')
            }

            if(selectSeatCount >= 0){
                phoneFiled.addEventListener('keyup', function(){
                    const number = phoneFiled.value;
                    if(/^[0-9][0-9]*$/.test(number)){
                        submitBtn.removeAttribute('disabled', true);
                    }
                    else{
                        submitBtn.setAttribute('disabled', true);
                    }
                });
            }

            // Bg change for click the seat
            seatLi.classList.add('primary-bg');

            // Get seat info
            const seatName = seatLi.textContent;
            const seatCost = seatLi.value;

            // Create a dynamic selected seat li
            const selectSeat = document.createElement('div');
            selectSeat.classList.add('flex', 'justify-between', 'py-3')
            selectSeat.innerHTML = `
                                    <h2>${seatName}</h2>
                                    <h2>Economy</h2>
                                    <h2>${seatCost}</h2>
                                    `
            selectedSeats.appendChild(selectSeat);

            // Decrements available seat count
            const availableSeat = totalSeat -= 1;
            seatCount.innerText = availableSeat;

            // Total price increment
            const newPrice = totalPrice += seatCost;
            price.innerText = newPrice;

            // Grand Total price increment
            const newGrand = grandAmount += seatCost;
            grandTotal.innerText = newGrand;

            // coupon handle
            // couponHandle();
        }
        else {
            alert('Warning you are try to select more than 4 seats')
        }
    }, { once: true });
}


