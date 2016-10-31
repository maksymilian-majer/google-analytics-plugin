module.exports = {
  startTrackerWithId: function (success, err, args) {
    var trackerId = args[0];
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','__ga');
    __ga('create', trackerId, 'auto');
  },
  setAllowIDFACollection: function (success, err, args) {
    var enable = args[0];
  },
  setUserId: function (success, err, args) {
    var id = args[0];
    __ga('set', 'userId', id);
  },
  setAnonymizeIp: function (success, err, args) {
    var anonymize = args[0];
    __ga('set', 'anonymizeIp', true);
  },
  setAppVersion: function (success, err, args) {
    var version = args[0];
    __ga('set', 'appVersion', version);
  },
  debugMode: function (success, err, args) {
  },
  trackMetric: function (success, err, args) {
    var key = args[0];
    var value = args[1];
    __ga('set', key, value);
  },
  trackView: function (success, err, args) {
    var screen = args[0];
    var campaingUrl = args[1];
    __ga('send', 'screenview', {
      'screenName': screen
    });
  },
  addCustomDimension: function (success, err, args) {
    var key = args[0];
    var value = args[1];
    __ga('set', key, value);
  },
  trackEvent: function (success, err, args) {
    var category = args[0];
    var action = args[1];
    var label = args[2];
    var value = args[3];
    __ga('send', 'event', {
      'eventCategory': category,
      'eventAction': action,
      'eventLabel': label,
      'eventValue': value
    });
  },
  trackTiming: function (success, err, args) {
    var category = args[0];
    var intervalInMilliseconds = args[1];
    var name = args[2];
    var label = args[3];
    __ga('send', 'timing', {
      'timingCategory': category,
      'timingVar': name,
      'timingLabel': label,
      'timingValue': intervalInMilliseconds
    });
  },
  addTransaction: function (success, err, args) {
    var transactionId = args[0];
    var affiliation = args[1];
    var revenue = args[2];
    var tax = args[3];
    var shipping = args[4];
    var currencyCode = args[5];
    console.error('UniversalAnalytics addTransaction not implemented for browser platform');
  },
  addTransactionItem: function (success, err, args) {
    var transactionId = args[0];
    var name = args[1];
    var sku = args[2];
    var category = args[3];
    var quantity = args[4];
    var currencyCode = args[5];
    console.error('UniversalAnalytics addTransactionItem not implemented for browser platform');
  },
  enableUncaughtExceptionReporting: function (success, err, args) {
    var enable = args[0];
    console.error('UniversalAnalytics enableUncaughtExceptionReporting not implemented for browser platform');
  }
};

require("cordova/exec/proxy").add("UniversalAnalytics", module.exports);
