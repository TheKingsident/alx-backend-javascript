/* eslint-disable prefer-promise-reject-errors */
export default function getResopnseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const sucess = true;
      if (sucess) {
        resolve('Received');
      } else {
        reject('Error: Failed');
      }
    }, 1000);
  });
}
