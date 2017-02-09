// Appends a card to the container

export function updateCard(data, cards, cardTemplate, container, language) {
    var dataLastUpdated = new Date(data.record_timestamp);
    var postalCode = data.fields.code_postal;
    var age = data.fields.tranche_d_age;

    var name;
    var description;
    var address;

    if (language == 'fr') {
        name = data.fields.nom;
        description = data.fields.description;
        address = data.fields.addresse;
    } else {
        name = data.fieldsnaam;
        description = data.fields.beschrijving;
        address = data.fields.adres;
    }

    var card = cards[data.recordid];
    if (!card) {
        card = cardTemplate.cloneNode(true);
        card.classList.remove('cardTemplate');
        card.removeAttribute('hidden');
        container.appendChild(card);
        cards[data.recordid] = card;
    }

    // Verifies the data provide is newer than what's already visible
    // on the card, if it's not bail, if it is, continue and update the
    // time saved in the card
    var cardLastUpdatedElem = card.querySelector('.card-last-updated');
    var cardLastUpdated = cardLastUpdatedElem.textContent;
    if (cardLastUpdated) {
        cardLastUpdated = new Date(cardLastUpdated);
        // Bail if the card has more recent data then the data
        if (dataLastUpdated.getTime() < cardLastUpdated.getTime()) {
            return;
        }
    }
    cardLastUpdatedElem.textContent = data.record_timestamp;

    card.querySelector('.name').textContent = name;
    card.querySelector('.description').textContent = description;
    card.querySelector('.address').textContent = address;
    card.querySelector('.age').textContent = age;
    card.querySelector('.postalCode').textContent = postalCode;
    card.querySelector('.pay-button').addEventListener('click', (evt) => {
        getPaymentDetails(name);
    });
}

function getPaymentDetails(name) {
        console.log("new build 1", name);

    var methodData = [{
        supportedMethods: ["basic-card"],
        data: {
            supportedNetworks: ["visa", "mastercard"]
        }
    }];

    var details = {
        displayItems: [
            {
                label: "Original amount",
                amount: { currency: "EUR", value: "0.01" },
            }
        ],
        total: {
            label: "Total",
            amount: { currency: "EUR", value: "0.01" },
        }
    }

    var options = {};

    var request = new PaymentRequest(
        methodData, // required payment method data
        details,    // required information about transaction
        options     // optional parameter for things like shipping, etc.
    );

    request.show().then(function (paymentResponse) {
        // Process paymentResponse here

        // console.log(JSON.stringify(paymentResponse));
        console.log(paymentResponse);
        paymentResponse.complete("success");
    }).catch(function (err) {
        console.error("Uh oh, something bad happened", err);
        // alert("Uh oh, something bad happened", err.message);
    });

}