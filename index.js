(() => {
    const hotels = [
        {
            "hotel": "Rosewood Little Dix Bay",
            "supplier": "Rosewood",
            "location": "Virgin Gorda, BVI",
            "vibe": "Comfortable Beach",
            "perks": "Virtuoso",
            "from": "12.3k",
        },
        {
            "hotel": "Vila Planinka",
            "supplier": "Fairmont",
            "location": "Paris, France",
            "vibe": "Urban Chic",
            "perks": "Virtuoso",
            "from": "9.5k",
        },
        {
            "hotel": "Fairmont Olympic Hotel",
            "supplier": "Fairmont",
            "location": "Paris, France",
            "vibe": "Business",
            "perks": "Fairmont Plus",
            "from": "8.8k",
        },
        {
            "hotel": "Palmaia - House of AiA",
            "supplier": "Palmaia",
            "location": "Paris, France",
            "vibe": "Party Scene",
            "perks": "Virtuoso",
            "from": "8.5k",
        },
        {
            "hotel": "InterContinental Amstel",
            "supplier": "InterContinental",
            "location": "Amsterdam, Neth...",
            "vibe": "Boutique",
            "perks": "Virtuoso",
            "from": "7.2k",
        },
        {
            "hotel": "Aman Tokyo",
            "supplier": "Aman",
            "location": "Paris, France",
            "vibe": "Quiet Comfort",
            "perks": "Virtuoso",
            "from": "11.8k",
        },
        {
            "hotel": "Oasy Hotel",
            "supplier": "IHG",
            "location": "London, UK",
            "vibe": "Urban Living",
            "perks": "Virtuoso",
            "from": "7.4k",
        },
        {
            "hotel": "Como Uma Punakha",
            "supplier": "IHG",
            "location": "Mumbai, India",
            "vibe": "Hip/Trendy",
            "perks": "Virtuoso",
            "from": "6.3k",
        },
        {
            "hotel": "Central Private Hotel",
            "supplier": "InterContinental",
            "location": "Rotterdam, Nethe...",
            "vibe": "Busy Urban",
            "perks": "Virtuoso",
            "from": "6.5k",
        },
        {
            "hotel": "Capella Bangkok",
            "supplier": "InterContinental",
            "location": "Bangkok, Thailan...",
            "vibe": "Party Scene",
            "perks": "Virtuoso",
            "from": "4.7k",
        },
        {
            "hotel": "The Londoner",
            "supplier": "Fairmont",
            "location": "Bangkok, Thailan...",
            "vibe": "Busy Urban",
            "perks": "Virtuoso",
            "from": "4.8k",
        },
        {
            "hotel": "St. Regis Hong Kong",
            "supplier": "Marriott",
            "location": "Hong Kong",
            "vibe": "Party Scene",
            "perks": "Virtuoso",
            "from": "4.1k",
        },
        {
            "hotel": "Ritz-Carlton, Turks & Caicos",
            "supplier": "Ritz-Carlton",
            "location": "Turks & Caicos",
            "vibe": "Party Scene",
            "perks": "Multiple",
            "from": "9.3k",
        },
        {
            "hotel": "Ritz-Carlton, Aruba",
            "supplier": "Ritz-Carlton",
            "location": "Aruba",
            "vibe": "Party Beach",
            "perks": "Multiple",
            "from": "8.5k",
        },
        {
            "hotel": "The Bedford",
            "supplier": "IHG",
            "location": "Coppenhagen",
            "vibe": "Quiet Luxury",
            "perks": "Virtuoso",
            "from": "5.1k",
        },
        {
            "hotel": "Fairmont London",
            "supplier": "Fairmont",
            "location": "London, UK",
            "vibe": "Busy Urban",
            "perks": "Virtuoso",
            "from": "6.5k",
        }
    ];

    // Fill table with data
    const tableBody = document.querySelector('tbody');
    hotels.map(el => {
        const newRow = document.createElement('tr');
        newRow.classList.add('table__row');
        newRow.innerHTML = `
            <td class="table__item table__item--input">
                <label class="a"><input type="checkbox" value="${el.hotel}"/><span></span></label>
            </td>
            <td class="table__item table__item--hotel">${el.hotel}</td>
            <td class="table__item table__item--supplier">${el.supplier}</td>
            <td class="table__item table__item--location">${el.location}</td>
            <td class="table__item table__item--vibe">${el.vibe}</td>
            <td class="table__item table__item--perks"><span>${el.perks}</span></td>
            <td class="table__item table__item--from"><span>US$</span> ${el.from}</td>
            <td class="table__item table__item--amenities">
                <img class="jump" src="./images/png/jump-rope.png" />
                <img class="swimming" src="./images/png/swimming.png" />
                <img class="pizza" src="./images/png/pizza.png" />
            </td>`;
        tableBody.appendChild(newRow);
    });

    // Guest list
    const guests = ['Colin Nelson', 'Gresham Carr', 'Virgil Grant', 'Gilbert Hopkins', 'Sarah Lamb', 'Dennis Dinwiddie', 'Mia Pope', 'Jessica Bird'];
    const list = document.createElement('ul');
    list.classList.add('check__guestList');
    guests.map(el => {
        const guest = document.createElement('li');
        guest.classList.add('check__guest');
        guest.innerHTML = `${el}`;
        list.appendChild(guest);
    });
    const guestBox = document.querySelector('.check__guestBox');
    guestBox.appendChild(list);

    // Show guest list
    const guestButton = document.querySelector('.check__guests');
    guestButton.addEventListener('click', showGuests);
    function showGuests () {
        const icon = document.querySelector('.check__icon');
        // Show list and change the icon (rotate)
        list.classList.toggle('active');
        icon.classList.toggle('active');
    }

    // Open modal
    const buttonModal = document.querySelector('.page-nav__new');
    const popup = document.querySelector('.popup');
    buttonModal.addEventListener('click', () => {
        popup.style.display = 'flex';
    });


    // Close modal
    const buttonClose = document.querySelector('.popup__button');
    const buttonCancel = document.querySelector('.popup__cancel');
    buttonClose.addEventListener('click', closeForm);
    buttonCancel.addEventListener('click', closeForm);
    function closeForm () {
        popup.style.display = 'none';
        const guestDiv = document.querySelector('.popup-assignedChosen');
        if(guestDiv) guestDiv.remove();
    }

    // Choose guests
    const buttonAssign = document.querySelector('.popup__assigned');
    buttonAssign.addEventListener('click', () => {
        const list = document.querySelector('.popup__assignedList');
        list.classList.toggle('active');
        const icon = document.querySelector('.popup__assignedSpan');
        icon.classList.toggle('active');
        list.addEventListener('click', (e) => {
            e.stopImmediatePropagation();
            const newGuest = document.createElement('p');
            newGuest.classList.add('popup__guestName');
            newGuest.textContent = e.target.textContent;
            const buttonDelete = document.createElement('button');
            buttonDelete.classList.add('popup__delete');
            newGuest.prepend(buttonDelete);
            const guestDiv = document.querySelector('.popup-assignedChosen');
            guestDiv.appendChild(newGuest);
            // buttonAssign.after(newGuest);

            // Delete guest
            buttonDelete.addEventListener('click', (e) => {
                e.preventDefault();
                e.target.parentElement.remove();
                
            })
        })
    })

})();
