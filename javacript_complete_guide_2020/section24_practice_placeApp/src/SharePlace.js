import { Modal } from './UI/Modal';
class PlaceFinder {
  constructor() {
    const addressForm = document.querySelector('form');
    const locateUserBtn = document.getElementById('locate-btn');
    console.log('a');
    locateUserBtn.addEventListener('click', this.locateUserHandler.bind(this));
    addressForm.addEventListener('submit', this.findAddressHandler.bind(this));
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
        const coordinates = {
          lat: successResult.coords.latitude,
          lng: successResult.coords.longitude,
        };
        modal.hide();
        console.log(coordinates);
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
  }
}

new PlaceFinder();
