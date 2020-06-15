from re import *
import unicodedata
from potentialMatch import *


def processMentee(sheet, row):
    #Data Clean - UID
    uid = row
    
    #Data Clean - Name
    menteeName = sheet.cell(row=row, column=3).value
    if "," in menteeName:
        menteeName = menteeName.strip().split(",")
        firstName = menteeName[1].strip()
        lastName = menteeName[0].strip()
    else:
        menteeName = menteeName.split(" ")
        if len(menteeName) > 1:
            firstName = menteeName[0].strip()
            lastName = menteeName[1].strip()
        else:
            firstName = menteeName[0].strip()
            lastName = ""

    #Data Clean - Home Phone
    if sheet.cell(row=row, column=4).value == None:
        homePhone = ""
    else:
        homePhone = sub("[^0123456789]", "", str(sheet.cell(row=row, column=4).value))[0:10]
        homePhone = "(" + homePhone[0:3] + ")" + homePhone[3:6] + "-" + homePhone[6:10]
    
    #Data Clean - Student Cell
    if sheet.cell(row=row, column=5).value == None:
        studentCell = ""
    else:
        studentCell = sub("[^0123456789]", "", str(sheet.cell(row=row, column=5).value))[0:10]
        studentCell = "(" + studentCell[0:3] + ")" + studentCell[3:6] + "-" + studentCell[6:10]

        
    #Data Clean - Email
    if sheet.cell(row=row, column=6).value == None:
        email = ""
    else:
        email = sheet.cell(row=row, column=6).value.strip()

    #Data Clean - Email Type
    if sheet.cell(row=row, column=7).value == None:
        emailType = ""
    else:
        emailType = sheet.cell(row=row, column=7).value.split(" ")[0]

    #Data Clean - Gender
    if sheet.cell(row=row, column=8).value == None:
        gender = ""
    else:
        gender = sheet.cell(row=row, column=8).value[0]

    #Data Clean - Race
    if sheet.cell(row=row, column=9).value == None:
        race = ""
    else:
        race = sheet.cell(row=row, column=9).value

    #Data Clean - Middle School
    if sheet.cell(row=row, column=11).value == None:
        middleSchool = ""
    else:
        middleSchool = sheet.cell(row=row, column=11).value.replace(" Middle School", "")

    #Data Clean - Interests
    if sheet.cell(row=row, column=12).value == None:
        interests = [""]
    elif sheet.cell(row=row, column=12).value.find(";")== -1:
        interests = [sheet.cell(row=row, column=12).value]
    else:
        interests = sheet.cell(row=row, column=12).value.split(";")
        
    cleanRow = [firstName, lastName, homePhone, studentCell, email, emailType, gender, race, middleSchool, interests]
    return cleanRow

def processMentor(sheet, row):
    #Data Clean - UID
    uid = row

    #Data Clean - Name
    firstName = sheet.cell(row=row, column=1).value
    lastName = sheet.cell(row=row, column=2).value
        
    #Data Clean - Phone
    #print sheet.cell(row=row, column=5).value
    if sheet.cell(row=row, column=6).value == None:
        phone = ""
    else:
        x= unicode(sheet.cell(row=row, column=6).value)
        x = unicodedata.normalize('NFKD', x).encode("ascii")
        phone = sub("[^0123456789]", "", x)[0:10]
        phone = "(" + phone[0:3] + ")" + phone[3:6] + "-" + phone[6:10]
            
    #Data Clean - Email
    if sheet.cell(row=row, column=7).value == None:
       email = ""
    else:
        email = sheet.cell(row=row, column=7).value.strip()

    #Data Clean - Grade
    if sheet.cell(row=row, column=3).value == None:
        grade = ""
    else:
        grade = sheet.cell(row=row, column=3).value.split(" ")[1]

    #Data Clean - Gender
    if sheet.cell(row=row, column=4).value == None:
       gender = ""
    else:
       gender = sheet.cell(row=row, column=4).value[0]

    #Data Clean - Race
    if sheet.cell(row=row, column=5).value == None:
        race = ""
    else:
        race = sheet.cell(row=row, column=5).value

    #Data Clean - Period One
    if sheet.cell(row=row, column=8).value == None:
        homeRoom = ""
    else:
        homeRoom = sheet.cell(row=row, column=8).value

    #Data Clean - Interests
    if sheet.cell(row=row, column=9).value == None:
        interests = [""]
    elif sheet.cell(row=row, column=9).value.find(";")== -1:
        interests = [sheet.cell(row=row, column=9).value]
    else:
       interests = sheet.cell(row=row, column=9).value.split(";")

    cleanRow = [firstName, lastName, phone, grade, email, gender, race, homeRoom, interests]
    return cleanRow

def mentorMatch(mentee, mentorList):
    interests = mentee.interests
    if interests[0] == "":
        mentee.mentor = "No Match"
        return
    else:
        menteeLen = float(len(interests))
        selectedMentor = None
        matchRate = float(0)
        potentialMatches = []
        for mentor in mentorList:
            if mentor.menteeCount > 1:
                lackingSchoolDiversity = len(set(mentor.menteeSchools)) < 2
                if lackingSchoolDiversity:
                    avoidSchool = max(set(mentor.menteeSchools), key=mentor.menteeSchools.count)
                else:
                    avoidSchool = "You Good"
            else:
                avoidSchool = "You Good"           
            if (mentor.gender == mentee.gender or mentee.gender == "I") and mentor.menteeCount<4 and mentee.middleSchool != avoidSchool:
                matches = set(mentee.interests) & set(mentor.interests)
                checkRate = len(matches)/menteeLen
                if checkRate >= matchRate:
                    temp = PotentialMatch(mentor, checkRate, len(mentor.interests))
                    potentialMatches.append(temp)
                    matchRate = checkRate
        matches = [x.matchRate for x in potentialMatches]
        maxMatch = max(matches)
        maxMatchLocations = [i for i, j in enumerate(matches) if j == maxMatch]
        maxPotentials = []
        for x in maxMatchLocations:
            maxPotentials.append(potentialMatches[x])
        lenMaxPotentials = [x.totalMentorInterests for x in maxPotentials]
        foundYa = lenMaxPotentials.index(min(lenMaxPotentials))
        match = maxPotentials[foundYa]
        selectedMentor = match.mentor
        if selectedMentor == None:
            mentee.mentor = "No Match"
        else:
            mentee.mentor = selectedMentor.firstName + " " + selectedMentor.lastName
            mentee.matchRate = match.matchRate
            selectedMentor.menteeCount += 1
            selectedMentor.menteeSchools.append(mentee.middleSchool)
            #mentorList.append(mentorList.pop(mentorList.index(selectedMentor)))
                
                

