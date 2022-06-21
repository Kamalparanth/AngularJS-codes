# AngularJS-codes
1) calculator using service and controller
2) calculator using controller
3) filter
4) Routing will not work in our browsers because the problem is that you are running your example off the file system (using the file:// protocol) and many browsers (Chrome, Opera) restricts XHR calls when using the file:// protocol. AngularJS templates are downloaded via XHR and this, combined with the usage of the file:// protocol results in the error you are getting.
https://stackoverflow.com/questions/16251420/couldnt-load-template-using-templateurl-in-angularjs
5) Switch between layouts using angular switch
