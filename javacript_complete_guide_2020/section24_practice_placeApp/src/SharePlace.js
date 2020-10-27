import { Modal } from './UI/Modal';
import { Map } from './UI/Map';
import {
  getCoordsFromAddress,
  getAddressFromCoords,
} from './Uitility/Location';
class PlaceFinder {
  constructor() {
    const addressForm = document.querySelector('form');
    const locateUserBtn = document.getElementById('locate-btn');
    this.shareBtn = document.getElementById('share-btn');

    locateUserBtn.addEventListener('click', this.locateUserHandler.bind(this));
    addressForm.addEventListener('submit', this.findAddressHandler.bind(this));
  }
  selectPlace(coordinates, address) {
    if (this.map) {
      this.map.render(coordinates);
    } else {
      this.map = new Map(coordinates);
    }
    const shareLink = document.getElementById('share-link');
    shareLink.value = `${location.origin}/my-place?address=${encodeURI(
      address
    )}&lat=${coordinates.lat}&lng=${coordinates.lng}`;
    this.shareBtn.disabled = false;
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
      async (successResult) => {
        modal.hide();
        const coordinates = {
          lat: successResult.coords.latitude,
          lng: successResult.coords.longitude,
        };
        const address = await getAddressFromCoords(coordinates);
        this.selectPlace(coordinates, address);
      },
      (error) => {
        modal.hide();
        alert(
          'Could not locate you unfortunately. Please enter an address manually'
        );
      }
    );
  }
  async findAddressHandler(event) {
    event.preventDefault();
    const address = event.target.querySelector('input').value;
    if (!address || address.trim().length === 0) {
      alert('Invalid address entered - please try again!');
      return;
    }
    const modal = new Modal('loading-modal-content', 'wait');
    modal.show();
    const coords = await getCoordsFromAddress(address);
    this.selectPlace(coords);
    modal.hide();
    console.log(coords);
  }
}

new PlaceFinder();
