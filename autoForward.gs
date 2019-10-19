function autoForward() {
  var recipient = 'email@smtp.com,email2@smtp.com';
  var interval = 5;          //  the script runs every 5 minutes
  var date = new Date();
  var timeFrom = Math.floor(date.valueOf()/1000) - 60 * interval;
  var threads = GmailApp.search('in:sent subject:![AUTO-BCC] after:' + timeFrom);
  for (var i = 0; i < threads.length; i++) {
    var newSubject = "[AUTO-BCC] " + threads[i].getMessages()[0].getSubject()
    threads[i].getMessages()[0].forward("", { bcc: recipient, subject: newSubject });  // only the 1st message
  }
  if (threads.length > 0) {
    console.info(threads.length + " foaward(s)")
  } else {
    console.info("No foaward")
  }
}
