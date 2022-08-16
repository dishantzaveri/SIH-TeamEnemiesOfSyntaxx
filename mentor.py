class Mentor(object):
    
    # Initialize Mentor object with all attributes from Excel
    def __init__(self, uid, firstName, lastName, phone, grade, email, gender, race, homeRoom, interests, menteeCount, menteeSchools):

        # Save a copy of the original image
        self.uid = uid

        self.firstName = firstName

        self.lastName = lastName

        self.phone = phone

        self.grade = grade

        self.email = email

        self.gender = gender

        self.race = race

        self.homeRoom = homeRoom

        self.interests = interests

        self.menteeCount = menteeCount

        self.menteeSchools = menteeSchools

    def printAll(self):
        if len(self.interests)>1:
            printInterests = ";".join(self.interests)
        else:
            printInterests = self.interests[0]
        print ("[uid = " + str(self.uid) + "; firstName = " + self.firstName + "; lastName = " + self.lastName + "; phone = " + self.phone + "; grade = " + self.grade + "; email = "+ self.email +  "; gender = "+ self.gender + "; race = "+ self.race + "; homeRoom = "+ self.homeRoom + "; interests = " + printInterests + "]")



