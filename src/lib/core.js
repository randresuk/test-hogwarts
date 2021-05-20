  
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

export const putParams = (resource, params = {}) => {
  Object.keys(params).forEach(key => {
    const downKey = key.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase();
    resource = resource.replace(`{${downKey}}`, params[key]);
  });
  return resource;
};