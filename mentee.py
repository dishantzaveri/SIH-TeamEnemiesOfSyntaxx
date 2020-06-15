class Mentee(object):
    
    # Initialize Mentee object with all attributes from Excel
    def __init__(self, uid, firstName, lastName, homePhone, studentCell, email, emailType, gender, race, middleSchool, interests, mentor, matchRate):

        # Save a copy of the original image
        self.uid = uid
        
        self.firstName = firstName

        self.lastName = lastName

        self.homePhone = homePhone

        self.studentCell = studentCell

        self.email = email

        self.emailType = emailType

        self.gender = gender

        self.race = race

        self.middleSchool = middleSchool

        self.interests = interests

        self.mentor = mentor

        self.matchRate = matchRate

    def printAll(self):
        if len(self.interests)>1:
            printInterests = ";".join(self.interests)
        else:
            printInterests = self.interests[0]
        print "[uid = " + str(self.uid)  + "; firstName = " + self.firstName + "; lastName = " + self.lastName + "; homePhone = " + self.homePhone + "; studentCell = " + self.studentCell + "; email = "+ self.email + "; emailType = "+ self.emailType + "; gender = "+ self.gender + "; race = "+ self.race + "; middleSchool = "+ self.middleSchool + "; interests = " + printInterests + "; mentor = " +  self.mentor + "; matchRate = " + str(self.matchRate) + "]"


