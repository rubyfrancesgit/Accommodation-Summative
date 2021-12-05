Overview:
This project was created as a summative project for my UX & Web Development course at Yoobee. It is an accommodation website that allows users to specify location, check-in & check-out dates, and number of guests.

Libraries/extensions used:
Jquery, Jquery UI datepicker, Google maps API, Bootstrap
Jquery UI has been imported so it is hosted locall in the jquery-3.5.1.min.js folder (which is linked to at the bottom of the body in index.html).

Changes you need to make:
You will need to fill in your Google Maps API Key in the mapKeyCopy.js 'key' variable - I have .gitignore the original file with my API, so in order for the Google Maps features to work, you will need to connect your API key.

To be continued:
Because accommodation cards are visible from both the landing page, and after you search, the information in these cards' pages (once you click) are slightly different. The pages of the accommodation options from the home page don't allow for booking, whereas the accommodation options for the searched pages do - this is due to the fact that when a user searches, the array of cards that pops up has already been filtered and fits the specified dates. It's a stretch goal to allow users to book from the home page cards - this is something I will come back to work on.

I would also like to allow users to edit the date in the accommodation page, and have the date feild as a calander rather than text. For the sake of the assignment, and given the pressed timeline, I have left it as text appended from the search calendar for now.