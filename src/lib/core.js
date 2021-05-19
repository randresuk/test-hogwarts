  
export default {

  //If is isset with nested object
  isset(accessor) {
    try {
      return typeof accessor() !== 'undefined';
    } catch (e) {
      return false;
    }
  },
}