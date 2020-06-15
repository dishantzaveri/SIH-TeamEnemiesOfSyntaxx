Mentor Match helps facilitate a public high school program where incoming freshmen (Mentees) are matched with upper classmen (Mentors) based on the criteria below, in priority order. The end user is a high school guidance councelor.

1) Capacity -- Each Mentor can be paired with a maximum of 4 Mentees.

2) Gender -- Each Mentee is matched with a Mentor of the same identifying gender.

3) Middle School -- Each Mentor is paired with at most 2 Mentees from a single middle school.

4) Interests/Engagement -- Each Mentee designates their interests from a specified list (clubs, sports, arts, etc). They are then paired with an available Mentor who is engaged in as many of those activities as possible.

The program takes as input 2 spreadsheets - a list of Mentors, with all their attributes stored by row, and a list of Mentees, with all their attributes also stored by row. The lists of attributes for both Mentors and Mentees are initially gathered via Google Forms before being automatically consolidated into their corresponding spreadsheets. The program outputs 1 spreadsheet which shows all Mentors related to their Mentees, with all attributes still stored by row.
_____________________________________________

In order to repurpose this program for your own use, you will need to do the following:

1) Build your own Google Forms to gather Mentor/Mentee information and transfer it to an xlsx file. Examples of the xlsx used have been added to the repository. 

2) Update rows 12 and 13 in mentor_match.py to pull from your desired Mentor and Mentee spreadsheets.

3) Update the processMentee() and processMentor() functions in util.py to ensure that the columns are adjusted for your xlsx. OR, modify your xlsx so the columns of data conform to the existing code.

That's it! As long as you gather Mentor/Mentee data via the syntax shown in the example xlsx files, the program should be able execute with only the above components updated. Happy matching! :)
_____________________________________________

Future enhancements to this program will be:

1) More robust Google Forms - This will enable the gathering of prioritized interests which will improve the algorithms effectiveness in matching Mentees to Mentors. Data quality and new data points will also be targeted.

2) Increased data analysis - This will provide more insight about students as a whole to help the guidance councelors make broader decisions in their jobs. As an example, if more than half of Mentees are interested in the Arts this year (last year's class was more focused on Athletics), then they can reprioritize attention and potentially funding to match this change in interest.

2) A reusable front end - This will make the end user more independent as the program currently runs via the terminal.
