import { Modal } from './UI/Modal';
import { Map } from './UI/Map';
import { getCoordsFromAddress } from './Uitility/Location';
class PlaceFinder {
  constructor() {
    const addressForm = document.querySelector('form');
    const locateUserBtn = document.getElementById('locate-btn');
    console.log('a');
    locateUserBtn.addEventListener('click', this.locateUserHandler.bind(this));
    addressForm.addEventListener('submit', this.findAddressHandler.bind(this));
  }
  selectPlace(coordinates) {
    if (this.map) {
      this.map.render(coordinates);
    } else {
      this.map = new Map(coordinates);
    }
  }
  locateUserHandler() {
    if (!navigator.geolocation) {
      alert(
        'Location feature is not unavailable in your browser - please use a more modern browser or manually enter an address'
      );
      return;
    }
    const modal = new Modal(
      'loading-modal-content',
      'Loading location - please wait!'
    );
    modal.show();
    navigator.geolocation.getCurrentPosition(
      (successResult) => {
        modal.hide();
        const coordinates = {
          lat: successResult.coords.latitude,
          lng: successResult.coords.longitude,
        };
        this.selectPlace(coordinates);
      },
      (error) => {
        modal.hide();
        alert(
          'Could not locate you unfortunately. Please enter an address manually'
        );
      }
    );
  }
  findAddressHandler(event) {
    event.preventDefault();
    const address = event.target.querySelector('input').value;
    console.log(address);
    if (!address || address.trim().length === 0) {
      alert('Invalid address entered - please try again!');
      return;
    }
    const modal = new Modal('loading-modal-content', 'wait');
    modal.show();
    const coords = getCoordsFromAddress(address);
    modal.hide();
    console.log(coords);
  }
}

new PlaceFinder();
