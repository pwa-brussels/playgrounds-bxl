
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

}