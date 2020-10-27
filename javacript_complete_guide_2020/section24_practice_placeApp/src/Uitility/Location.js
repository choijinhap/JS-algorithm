const GOOGLE_API_KEY = 'AIzaSyDQx28BLV7YzioEIuZ7wIVjKkwurS4avNI';
export async function getCoordsFromAddress(address) {
  const urlAddress = encodeURI(address);
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${urlAddress}&key=${GOOGLE_API_KEY}`
  );
  if (!response.ok) {
    throw new Error('Faile to fetch coordinates. Please try again');
  }
  const data = await response.json();
  if (data.error_message) {
    throw new Error(data.error_message);
  }
  console.log(data);
  return data;
}
