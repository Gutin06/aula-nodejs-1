/*@param {Number} ms
@returns {Promise}
*/
function sleep(ms){
    return new Promise((resolve) => setTimeout(resolve, ms));
}
module.exports = {sleep}