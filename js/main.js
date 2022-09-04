import {getLastKeyAndInsertData} from './firebase.js';

$("#trigger").click(function() {
  const checkOption=$('input[name="radioInput"]:checked').val();
  getLastKeyAndInsertData(checkOption);
});