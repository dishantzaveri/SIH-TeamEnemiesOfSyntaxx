class PotentialMatch(object):
    
    # Initialize Potential Match object 
    def __init__(self, mentor, matchRate, totalMentorInterests):

        # Save a copy of the original image
        self.mentor = mentor
        
        self.matchRate = matchRate

        self.totalMentorInterests = totalMentorInterests


    def printAll(self):
        print ("[matchRate = ") + str(self.matchRate)  + "; totalMentorInterests = " + str(self.totalMentorInterests) +"]"
