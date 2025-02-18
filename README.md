# URL Shortener App

Build url shortener app so that it makes long URLs shorter and easier to share.

Routes In backend :
- POST => /url => User will provide url and get its shorter version.
- GET => /url/:shortId => User can visit provided url with its shorter version.
- GET => /url/analytics/:shortId => how much clicks on the particular url.
- GET => / => Get the home page.