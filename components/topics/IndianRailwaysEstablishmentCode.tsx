"use client"

import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const rules = [
  { num: 101, title: "Scope and extent of application" },
  { num: 102, title: "Power to interpret rules" },
  { num: 103, title: "Definitions" },
  { num: 104, title: "Pensionable Service" },
  { num: 105, title: "Non-pensionable Service" },
  { num: 106, title: "" },
  { num: 107, title: "" },
  { num: 108, title: "Classification of Services" },
  { num: 109, title: "Scales of pay of Groups 'A' & 'B' Railway Servants" },
  { num: 110, title: "Sanctioned strength of Cadres" },
  { num: 111, title: "" },
  { num: 112, title: "" },
  { num: 113, title: "" },
  { num: 114, title: "Principles for fixing Cadres" },
  { num: 115, title: "Reversion to open line" },
  { num: 116, title: "Holding of posts in abeyance or keeping them unfilled" },
  { num: 117, title: "Checks to be applied to Cadres" },
  { num: 118, title: "Tenure posts" },
  { num: 119, title: "" },
  { num: 120, title: "Cadres of Railway Servants—Groups 'C' and 'D'" },
  { num: 121, title: "Scales of pay" },
  { num: 122, title: "Supernumerary posts" },
  { num: 123, title: "" },
  { num: 124, title: "Power to frame rules" },
]

const rules2 = [
  { num: 201, title: "Recruitment to Railway Services Group A" },
  { num: 202, title: "Posts in the office of the Railway Board etc" },
  { num: 203, title: "Administrative posts on Railways" },
  { num: 204, title: "Rate of recruitment" },
  { num: 205, title: "Method of recruitment" },
  { num: 206, title: "Training" },
  { num: 207, title: "Recruitment to Railway Service Group 'B'" },
  { num: 208, title: "Officiating promotions" },
  { num: 209, title: "Promotions to Railway Services Group 'A'" },
  { num: 210, title: "Promotion to Railway ServicesGroup 'B'" },
  { num: 211, title: "Promotion by limited Departmental Competitive Examination" },
  { num: 212, title: "Conditions for making officiating promotions" },
  { num: 213, title: "Officiating promotions in Group 'B' posts" },
  { num: 214, title: "Powers of General Managers in making officiating promotions" },
  { num: 215, title: "Authorities competent to make first appointment" },
  { num: 216, title: "Methods of filling up of Group 'C' and 'D' posts on Indian Railways and other Railway Administrations" },
  { num: 217, title: "Recruitment of Group 'C' and Group 'D' staff" },
  { num: 218, title: "Nationality" },
  { num: 219, title: "General conditions for recruitment" },
  { num: 220, title: "Special reservations" },
  { num: 221, title: "Oath of allegiance" },
  { num: 222, title: "Medical Certificate of health" },
  { num: 223, title: "First-aid" },
  { num: 224, title: "Service agreements" },
  { num: 225, title: "Date of birth" },
  { num: 226, title: "" },
  { num: 227, title: "Transfers" },
  { num: 228, title: "Retention of lien on transfer" },
  { num: 229, title: "Transfer on request" },
  { num: 230, title: "Transfer on mutual exchange" },
  { num: 231, title: "Transfer fiom one department to another" },
  { num: 232, title: "Transfer on public grounds" },
  { num: 233, title: "Charge of Office" },
  { num: 234, title: "Head Quarters of a railway servant" },
  { num: 235, title: "Leaving jurisdiction" },
  { num: 236, title: "Casual Leave" },
  { num: 237, title: "Other general conditions of service" },
  { num: 238, title: "Substantive appointment" },
  { num: 239, title: "Lien" },
  { num: 240, title: "Retention of lien" },
  { num: 241, title: "Suspension of lien" },
  { num: 242, title: "Termina­tion of lien" },
  { num: 243, title: "Transfer of lien" },
  { num: 244, title: "Forwarding of applications to another post in railway service or outside the Railways" },
]

const rules3 = [
  { num: 301, title: "Termination of service and period of notice" },
  { num: 302, title: "Resignation" },
  { num: 303, title: "Discharge on reduction of establishment" },
  { num: 304, title: "Termination of service on account of inefficiency due to failure to conform to the requisite standard of physical  fitness." },
]

const rules4 = [
  { num: 401, title: "" },
  { num: 402, title: "" },
  { num: 403, title: "" },
  { num: 404, title: "General" },
  { num: 405, title: "Criteria for grant of extension/re-employment to railway servants" },
]

const rules5 = [
  { num: 501, title: "Short title" },
  { num: 502, title: "Extent of application" },
  { num: 503, title: "Right to leave" },
  { num: 504, title: "Effect of dismissal, removal or resignation on leave at credit" },
  { num: 505, title: "Conversion of one kind of leave into another" },
  { num: 506, title: "Commencement and end of leave" },
  { num: 507, title: "Combination of different kinds of leave" },
  { num: 508, title: "Combination of holidays with leave" },
  { num: 509, title: "Employment during leave" },
  { num: 510, title: "Maximum amount of continuous leave" },
  { num: 511, title: "Application for leave" },
  { num: 512, title: "Grant of leave" },
  { num: 513, title: "Leave account" },
  { num: 514, title: "Verification of title to leave" },
  { num: 515, title: "Leave when not to be granted" },
  { num: 516, title: "Recall to duty before expiry of leave" },
  { num: 517, title: "Return to duty from leave" },
  { num: 518, title: "Absence after the expiry of leave" },
  { num: 519, title: "Grant of leave on Medical Certificate" },
  { num: 520, title: "Grant of leave on Medical Certificate to Group A and Group B Officers" },
  { num: 521, title: "Comutted leave/Leave on Production of Medical Certificate by the Railway Servants" },
  { num: 522, title: "Leave to a railway servant who is unlikely to be fit to return to duty" },
  { num: 523, title: "Leave on average pay" },
  { num: 524, title: "Calculation of leave on average pay" },
  { num: 525, title: "Leave applicable to school staff" },
  { num: 526, title: "Leave on half average pay" },
  { num: 527, title: "Commuted leave" },
  { num: 528, title: "Leave not due" },
  { num: 529, title: "Leave not due to temporary railway employees" },
  { num: 530, title: "Extraordinary leave" },
  { num: 531, title: "Leave to probationers and a railway servant on probation" },
  { num: 532, title: "Leave to Special Class Railway Apprentices" },
  { num: 533, title: "Leave to Apprentices Mechanics" },
  { num: 534, title: "Leave to Trade Apprentices" },
  { num: 535, title: "Leave to other Apprentices" },
  { num: 536, title: "Extraordinary leave to Apprentices" },
  { num: 537, title: "General Conditions for grant of leave to Apprentices" },
  { num: 538, title: "Leave to persons re-employed after retirement" },
  { num: 539, title: "Leave to workshop staff" },
  { num: 540, title: "Leave preparatory to retirement" },
  { num: "540-A", title: "Encashment of Leave on Average Pay along with Railway Pass while in service" },
  { num: 541, title: "Leave beyond the date of retirement or quitting service" },
  { num: 542, title: "Leave on termination of employment and leave (terminal) to teporary railway servantm" },
  { num: 543, title: "Drawal of leave salary" },
  { num: 544, title: "Leave salary" },
  { num: 545, title: "Leave salary to workshop staff" },
  { num: 546, title: "Leave salary to running staff" },
  { num: 547, title: "Reckoning of special pay for leave salary" },
  { num: 548, title: "Advances of leave salary" },
  { num: 549, title: "Cash equivalent of leave salary in case of death in service" },
  { num: "549A", title: "Payment of Cash equivalent of Leave Salary in case of death etc. of Railway servant" },
  { num: 550, title: "Cash Payment in lieu of unutilized leave on average pay on the date of retirement" },
  { num: 551, title: "Maternity leave" },
  { num: "551A", title: "Paternity Leave" },
  { num: "551B", title: "Paternity Leave to Leave to Male casual Railway employee who has been granted temporary status" },
  { num: "551C", title: "Child Adoption Leave" },
  { num: "551D", title: "Paternity Leave for child adoption" },
  { num: "551E", title: "Child Care Leave" },
  { num: 552, title: "Special disability leave for injury intentionally inflicted" },
  { num: 553, title: "Special disability leave for accidental  injury" },
  { num: 554, title: "Hospital Leave" },
  { num: 555, title: "Quarantine Leave-- Deleted" },
  { num: 556, title: "Study Leave" },
  { num: 557, title: "Miscellaneous" },
]

const rules6 = [
  { num: 601, title: "Railway servants employed in the office of the Railway Board the Research Design and Standards Organisation and office of the Railway Liaison Office at New Delhi and their families" },
  { num: 602, title: "Railway servants employed on Indian Railways and in offices not covered in Rule 601—referred to above" },
  { num: 603, title: "Definitions" },
  { num: 604, title: "Entitlement of Medical treatment" },
  { num: 605, title: "Places where railway servant is entitled to get treatment" },
  { num: 606, title: "Entitlement of female railway servant" },
  { num: 607, title: "Treatment at railway servant's residence" },
  { num: 608, title: "Charges for services rendered which are not included in medical attendance or treatment" },
  { num: 609, title: "Duties of medical officers in urgent cases" },
  { num: 610, title: "Medical attendance in foreign service" },
  { num: 611, title: "Medical attendance for persons transferred from service governed by other rules" },
  { num: 612, title: "Medical atten­dance for railway servants on leave" },
  { num: 613, title: "Railway servants on foreign Railways" },
  { num: 614, title: "Rail­way servants on deputation abroad" },
  { num: 615, title: "Medical attendance and treatment of the family of Railway servants" },
  { num: 616, title: "Charges for service at a hospital other than Railway hospital for family of Railway servant" },
  { num: 617, title: "Medical attendance at a consulting room maintained by authorised medical attendant" },
  { num: 618, title: "Medical attendance in the hospitals recognised by Govern­ment" },
  { num: 619, title: "Medical treatment includes confinement of Railway servant's wife" },
  { num: 620, title: "Payment of fees for Medical attendance of families at residence" },
  { num: 621, title: "" },
  { num: 622, title: "" },
  { num: 623, title: "" },
  { num: 624, title: "" },
  { num: 625, title: "" },
  { num: 626, title: "" },
  { num: 627, title: "" },
  { num: 629, title: "" },
  { num: 630, title: "Contract system" },
  { num: 631, title: "Medical facilities for private servants" },
  { num: 632, title: "Railway servants injured in civil disturbances" },
  { num: 633, title: "" },
  { num: 634, title: "Infectious diseases and quarantine" },
  { num: 635, title: "Report of infectious diseases" },
  { num: 636, title: "Verification of diseases when a Railway servant resides within the prescribed beat of a medical officer" },
  { num: 637, title: "Verification of diseases beyond the prescribed beat of medical officer" },
  { num: 638, title: "Duty of railway servant under quarantine" },
  { num: 639, title: "Duty of Railway servant not under quarantine in whose household an infectious disease is verified" },
  { num: 640, title: "Treatment of cases of infectious diseases in civil hospital" },
  { num: 641, title: "" },
  { num: 642, title: "" },
  { num: 643, title: "" },
  { num: 644, title: "Treatment of diseases viz. T.B.Mental diseases. cancer and polio myelitis" },
  { num: 645, title: "Consultation and/or treatment for mental diseases" },
]

const rules7 = [
  { num: 701, title: "" },
  { num: 702, title: "" },
  { num: 703, title: "" },
  { num: 704, title: "" },
  { num: 705, title: "Law suits and criminal charges against railway servants." },
]

const rules8 = [
  { num: 801, title: "Railway staff Benefit Fund" },
  { num: 802, title: "Objects of the Fund" },
  { num: 803, title: "Extension of benefit of the Fund" },
  { num: 804, title: "" },
  { num: 805, title: "Credits to the Fund" },
  { num: 806, title: "Expenditure from the Fund" },
  { num: 807, title: "Management of the Fund" },
  { num: 808, title: "" },
  { num: 809, title: "" },
  { num: 810, title: "Divisional staff Benefit Fund Committee" },
  { num: 811, title: "Accounts of the Fund" },
  { num: 812, title: "Annual report on the working of the Fund" },
]

const rules9 = [
  { num: 901, title: "Short title and extent of application" },
  { num: 902, title: "Definitions" },
  { num: 903, title: "Constitution and manage­ment of the fund" },
  { num: 904, title: "Compulsory subscribers" },
  { num: 905, title: "Optional subscribers" },
  { num: 906, title: "Exceptions" },
  { num: 907, title: "Subscribers' Accounts" },
  { num: 908, title: "Conditions and rates of subscription" },
  { num: 909, title: "Amount of subscription" },
  { num: 910, title: "Realisation of subscriptions" },
  { num: 911, title: "Recovery of arrears of subscrip­tion" },
  { num: 912, title: "Contribution by Government" },
  { num: 913, title: "Commercial employment by Railway officers after retirement" },
  { num: 914, title: "Rate of Government contribution" },
  { num: 915, title: "Special contribution to Provident Fund" },
  { num: 916, title: "Effect of reduced pay on special contiibution" },
  { num: 917, title: "Refund of Pro­vident Fund money and/or gratuity on re-employment" },
  { num: 918, title: "Breaks a.id deficiencies in service" },
  { num: 919, title: "Service on more than one railways" },
  { num: 920, title: "Interest" },
  { num: 921, title: "Incentive Bonus Scheme" },
  { num: 922, title: "Advances and withdrawals from the Fund, General" },
  { num: 923, title: "Advances from the Fund" },
  { num: 924, title: "Final withdrawal" },
  { num: 925, title: "Other final withdrawals" },
  { num: 926, title: "Recovery of advances" },
  { num: 927, title: "Payment towards Insurance Policies" },
  { num: 928, title: "Number of policies which can be financed from the fund" },
  { num: 929, title: "" },
  { num: 930, title: "" },
  { num: 931, title: "" },
  { num: 932, title: "" },
  { num: 933, title: "" },
  { num: 934, title: "" },
  { num: 935, title: "" },
  { num: 936, title: "" },
  { num: 937, title: "" },
  { num: 938, title: "" },
  { num: 939, title: "Adjustments in the fund for payment towards insurance policies" },
  { num: 940, title: "Withdrawal of 90% from the Fund" },
  { num: 941, title: "Nominations" },
  { num: 942, title: "Circumstances in which accumulations are payable." },
  { num: "942-A", title: "Transfer of balances in other Provident Funds to the State Railway Pro­vident Fund" },
  { num: 943, title: "Persons to whom accumulations are payable" },
  { num: 944, title: "Deductions" },
  { num: 945, title: "Payment of Provident Fund" },
  { num: 946, title: "Annual Statement of account" },
]

const rules10 = [
  { num: 1001, title: "Extent of application" },
  { num: 1002, title: "Definitions" },
  { num: 1003, title: "Conditions of eligibility" },
  { num: 1004, title: "Re-employed retired staff not eligible" },
  { num: 1005, title: "Amount of gratuity" },
  { num: 1006, title: "" },
  { num: 1007, title: "Payment of gratuity to the dependents" },
  { num: 1008, title: "Compassionate gratuity" },
  { num: 1009, title: "Payment in the case of a minor or lunatic" },
  { num: 1010, title: "Deductions from gratuity" },
  { num: 1011, title: "Contribution during deputation or foreign service" },
  { num: 1012, title: "Delegation of powers" },
]

const rules11 = [
  { num: 1101, title: "Joining Time Rules Extent of application" },
  { num: 1102, title: "On temporary transfer" },
  { num: 1103, title: "On discharge for taking appointment at another station" },
  { num: 1104, title: "On first appointment" },
  { num: 1105, title: "Commencement of joining time" },
  { num: 1106, title: "Time and place from which joining time is calculated" },
  { num: 1107, title: "Amount of joining time admissible" },
  { num: 1108, title: "Joining time on transfer" },
  { num: 1109, title: "Extension of joining time" },
  { num: 1110, title: "Crediting leave account with unutilised joining time" },
  { num: 1111, title: "Continuation with vacation" },
  { num: 1112, title: "When transfer orders are modified" },
  { num: 1113, title: "Joining time Pay and Allowance" },
  { num: 1114, title: "On deputation outside railways" },
  { num: 1115, title: "On deputation to Railways" },
]

const rules12 = [
  { num: 1201, title: "Title to Compensation" },
  { num: 1202, title: "Compensation for injuries or death" },
  { num: 1203, title: "Reimbursement of expenses incurred on account of hospitalisation charges cost of procurement renewals etc. of artificial limbs" },
  { num: 1204, title: "Compensation for loss of personal property" },
  { num: 1205, title: "Grant of compensation at the discretion of the competent sanctioning authority" },
  { num: 1206, title: "Payment of compensation in respect of animals destroyed by order of competent authority" },
  { num: 1207, title: "Compensation requiring the sanction of the President" },
]

const rules13 = [
  { num: 1301, title: "Definitions" },
  { num: 1302, title: "Drawal of Pay and  Allowances" },
  { num: 1303, title: "Meaning of Pay and Average Pay" },
  { num: 1304, title: "Overseas Pay" },
  { num: 1305, title: "Personal Pay" },
  { num: 1306, title: "Presumptive Pay" },
  { num: 1307, title: "Special Pay" },
  { num: 1308, title: "Subsistence Grant" },
  { num: 1309, title: "Substantive Pay" },
  { num: 1310, title: "Meaning of Time Scale Pay" },
  { num: 1311, title: "Pay During training etc." },
  { num: 1312, title: "Where time Scale Pay does not apply" },
  { num: 1313, title: "Fixation of initial substantive pay" },
  { num: 1314, title: "Fixation of pay on reappointment" },
  { num: 1315, title: "Pay of Probationer/Apprentice" },
  { num: 1316, title: "Fixation of  Pay on Promotion/appointment to a post carrying higher responsibilities/greater importance" },
  { num: 1317, title: "Change of Pay of Post" },
  { num: 1318, title: "Increments in time scale" },
  { num: 1319, title: "Increments above an Efficiency Bar" },
  { num: 1320, title: "Reckoning service for increments" },
  { num: 1321, title: "Premature Increment" },
  { num: 1322, title: "Pay on reduction to a Lower Post" },
  { num: 1323, title: "Period of reduction to a lower post" },
  { num: 1324, title: "Regulating pay when reduction to lower post is set aside or modified" },
  { num: 1325, title: "Pay of Officiating Railway Servant" },
  { num: 1326, title: "Presumptive Pay when drawn" },
  { num: 1327, title: "Regulating  pay when promotion or appointment is found to be erroneous" },
  { num: 1328, title: "Pay in a post which has been fixed at a rate personnel to another railway Servant" },
  { num: 1330, title: "Special  orders allowing officiating promotion" },
  { num: 1331, title: "Personal pay" },
  { num: 1332, title: "Pay of temporary post" },
  { num: 1333, title: "Fixation of pay in a temporary post" },
  { num: 1334, title: "Fees and Honoraria" },
  { num: 1335, title: "Premium and Reward" },
  { num: 1336, title: "Patents for inventions" },
  { num: 1337, title: "Combination of appointment" },
  { num: 1338, title: "Sanctioning authority for deputation out of India" },
  { num: 1339, title: "Pay during deputation out of India" },
  { num: 1340, title: "Regulation of pay when deputed out of India to a regular post" },
  { num: 1341, title: "Date from which pay is affected on removal or dismissal" },
  { num: 1342, title: "Pay during Suspensions" },
  { num: 1343, title: "Pay on reinstatement as a result of appeal or review" },
  { num: 1344, title: "Pay on reinstatement where dismissal/removal is set aside by Court of law" },
  { num: 1345, title: "Pay on reinstatement after suspension" },
]

const rules14 = [
  { num: 1401, title: "Conditions" },
  { num: 1402, title: "Applicability of Rules" },
  { num: 1403, title: "Definitions" },
  { num: 1404, title: "Allowance to Contract Officer" },
  { num: 1405, title: "Allowance on ad-hoc rates of pay" },
  { num: 1406, title: "Allowances to Military Officers in Railway Service" },
  { num: 1407, title: "Allowances on varying rates of pay" },
  { num: 1408, title: "Allowances on joining and leaving service" },
  { num: 1409, title: "Allowances during foreign service" },
  { num: 1410, title: "During deputation out of India" },
  { num: 1411, title: "During suspension" },
  { num: 1412, title: "During leave and joining time" },
  { num: 1413, title: "During Study leave" },
  { num: 1414, title: "During unpaid holidays" },
  { num: 1415, title: "During re-employment" },
  { num: 1416, title: "Allowances to Railway servants who are Nationals of Nepal and Bhutan" },
  { num: 1417, title: "Dearness Pay" },
  { num: 1418, title: "House Allowance" },
  { num: 1419, title: "Allowances to Nursing Staff" },
  { num: 1420, title: "Breakdown allowance" },
  { num: 1421, title: "Outturn Allowance" },
  { num: 1422, title: "Washing Allowance" },
  { num: 1423, title: "Compensatory (Project) Allowance" },
  { num: 1424, title: "National Holiday Allowance" },
  { num: 1425, title: "Allowances admissible to RPF/RPSF personnel" },
  { num: 1426, title: "Allowances to Doctors" },
  { num: 1427, title: "Daily officiating Allowance" },
]

const rules15 = [
  { num: 1501, title: "General" },
  { num: 1502, title: "Extent of application" },
  { num: 1503, title: "Obligation to pay more than allowances" },
  { num: 1504, title: "Allowances to employees in Workshops or Printing Presses" },
  { num: 1505, title: "Discretion to pay allowance to Chargemen/Assistant Chargemen etc." },
  { num: 1506, title: "Consolidated monthly Overtime" },
  { num: 1507, title: "Definition of Running Allowance" },
  { num: 1508, title: "Types of Allowances" },
  { num: 1509, title: "Eligibility conditions for kilometrage allowance" },
  { num: 1510, title: "Eligibility conditions for kilometrage allowance" },
  { num: 1511, title: "Breach of Rest Allowance" },
  { num: 1512, title: "Special Compensatory Allowance" },
  { num: 1513, title: "Officiating Allowance" },
  { num: 1514, title: "Allowances for Loco Inspectors" },
  { num: 1515, title: "Type of Allowances" },
  { num: 1516, title: "Allowances for Drivers drafted to performed duties of power controllers /crew controllers" },
]

const rules16 = [
  { num: 1601, title: "Extent of Application" },
  { num: 1602, title: "Gradation of Railway Servants for T.A." },
  { num: 1603, title: "Definition of pay for T.A." },
  { num: 1604, title: "Different kinds of Travelling Allowances" },
  { num: 1605, title: "Permanent Travelling Allowance" },
  { num: 1606, title: "Conveyance allowance" },
  { num: 1607, title: "Mileage Allowance" },
  { num: 1608, title: "Point of commencement of journey for T.A. purposes" },
  { num: 1609, title: "Definition of Railway Allowance" },
  { num: 1610, title: "Eligibility for Daily allowance" },
  { num: 1611, title: "Rates of Daily Allowance" },
  { num: 1612, title: "Classification of localities for Daily Allowance" },
  { num: 1613, title: "Higher or lower rate of Daily Allowance" },
  { num: 1614, title: "Minimum distance for Daily Allowance" },
  { num: 1615, title: "Time of absence for claiming percentage of D.A. in a day" },
  { num: 1616, title: "Daily Allowance in expensive locality" },
  { num: 1617, title: "Daily Allowance during holidays" },
  { num: 1618, title: "Maximum limit of Daily Allowance" },
  { num: 1619, title: "Travelling allowance on tour" },
  { num: 1620, title: "Reckoning of period of absence on tour" },
  { num: 1621, title: "Headquarters of Railway servants" },
  { num: 1622, title: "Leaving jurisdiction" },
  { num: 1623, title: "Limits of sphere of duty" },
  { num: 1624, title: "T.A. To beyond sphere of duty" },
  { num: 1625, title: "Interpretation of absence on duty" },
  { num: 1626, title: "Restriction on duration of journeys" },
  { num: 1627, title: "Duties connected with moving trains" },
  { num: 1628, title: "Cases where pay fixed compensates for cost of journeys" },
  { num: 1629, title: "Entitlements for journey on tour" },
  { num: 1630, title: "Journey by Road on tour" },
  { num: 1631, title: "Conveyance hire at outstation" },
  { num: 1632, title: "Road mileage at higher rate" },
  { num: 1633, title: "Journeys by seas or river steamers" },
  { num: 1634, title: "Class of travel for purposes of journey by sea/river" },
  { num: 1635, title: "Journey by rail combined with road/sea/river" },
  { num: 1636, title: "Journeys by air" },
  { num: 1637, title: "Part journey by air and part by locomotion" },
  { num: 1638, title: "Journey by air when not authorized" },
  { num: 1639, title: "Journey by air on return ticket" },
  { num: 1640, title: "Toll Tax" },
  { num: 1641, title: "Journey at or near headquarter-reimbursement of taxi/auto-rickshaw" },
  { num: 1642, title: "Transfer Travelling allowance not allowed." },
  { num: 1643, title: "Transfer Travelling Allowance facilities" },
  { num: 1644, title: "Transfer traveling allowance for journeys by road only" },
  { num: 1645, title: "Transfer traveling allowance for short distance transfers" },
  { num: 1646, title: "Transfer Travelling allowance for family members" },
  { num: 1647, title: "Daily allowance on temporary transfer" },
  { num: "1648, 1649", title: "Transfer travelling allowance after going charge of the old post" },
  { num: 1650, title: "Transfer traveling allowance in cases of appointment to new posts while in transit from one post to another" },
  { num: 1651, title: "Special Rules of T.A. admissible to Members of Railway Board" },
  { num: "1652 to 1654", title: "Journey to join first appointment" },
  { num: 1655, title: "Journeys to hill station" },
  { num: "1656 to 1658", title: "Journeys to attend examination" },
  { num: "1659 to 1661", title: "Journeys connected with interview" },
  { num: "1662 to 1665", title: "Journeys while on leave" },
  { num: 1666, title: "Journeys on retirement dismissal or termination of service" },
  { num: 1667, title: "Journeys to attend Court of Law" },
  { num: 1668, title: "Journey to give evidence in departmental enquiry" },
  { num: 1669, title: "Journey to outstation to peruse official records in connection with disciplinary enquiry" },
  { num: "1670, 1671", title: "Journey when summon to give evidence in a Court of law" },
  { num: 1672, title: "Journeys when under suspension" },
  { num: "1673 to 1683", title: "Journeys to obtain medical treatment etc." },
  { num: 1684, title: "Journey by medical Officers" },
  { num: "1685 to 1687", title: "Journey while on a course of training" },
  { num: 1688, title: "Journey to attend levees" },
  { num: 1689, title: "Journeys to attend Conferences" },
  { num: 1690, title: "Journey to attend meetings of Railway Institutes etc." },
  { num: 1691, title: "Journey in connection with St.John's Ambulance Brigade etc." },
  { num: 1692, title: "Journeys by departmental representatives in Selection Boards" },
  { num: 1693, title: "Journeys by Members of Parliament in NRUCC/ZRUCC" },
  { num: 1694, title: "Journeys by non-Government servants to give evidence before Railway Rates Tribunal" },
  { num: 1695, title: "Journeys by non-Government servant summoned as witness" },
  { num: 1696, title: "Journeys by non-Government servants to attend Commission of enquiry / Board / Conferences" },
  { num: "1697 to 1700", title: "Controlling Officer" },
]

const rules17 = [
  { num: 1701, title: "General" },
  { num: 1702, title: "Rates of City Compensatory Allowance" },
  { num: 1703, title: "Rates of House Rent Allowance" },
  { num: 1704, title: "Definition of pay rent and family" },
  { num: 1705, title: "Limits of localities" },
  { num: 1706, title: "House Rent Allowance when not to be granted" },
  { num: 1707, title: "During leave" },
  { num: 1708, title: "During suspension" },
  { num: 1709, title: "During temporary transfer" },
  { num: 1710, title: "During deputation abroad" },
  { num: 1711, title: "During joining time" },
  { num: 1712, title: "For re-employed pensioners" },
  { num: 1713, title: "During training abroad" },
  { num: 1714, title: "During periods specially treated as duty" },
  { num: 1715, title: "To whom the rules do not apply" },
]

const rules18 = [
  { num: 1801, title: "Retirement on superannuation" },
  { num: 1802, title: "Right of Government to retire any Railway servant compulsorily" },
  { num: 1803, title: "Right of Government to retire any non-pensionable Railway servant after 30 years' service" },
  { num: 1804, title: "Right of Government to retire any non-pensionable railway servant after 30 years service" },
  { num: 1805, title: "Regulating the intervening period between premature retirement and reinstatement" },
]

const rules19 = [
  { num: "—", title: "DELETED" },
  { num: "", title: "(Authority Railway Board's letter No. 2000/289-B/ Secy. Administration dated 2-2-2001)" },
]

const rules20 = [
  { num: 2001, title: "General" },
  { num: 2002, title: "Conditions of transfer to foreign service" },
  { num: 2003, title: "Transfer to Foreign Service during leave" },
  { num: 2004, title: "Permission during Foreign Service" },
  { num: 2005, title: "Drawal of pay from the foreign employer" },
  { num: 2006, title: "Foreign service contribution" },
  { num: "2007, 2008", title: "Rates of contribution" },
  { num: 2009, title: "Procedure for payment of contribution" },
  { num: 2010, title: "Foreign service contribution by recognized Unions/Federations" },
  { num: 2011, title: "Remittances of Foreign Service contribution" },
  { num: 2012, title: "Interest on overdue contribution" },
  { num: 2013, title: "Travelling Allowance" },
  { num: 2014, title: "Withholding of contribution" },
  { num: 2015, title: "Payment of pension or gratuity by foreign employer" },
  { num: 2016, title: "Leave during foreign service in India" },
  { num: 2017, title: "Leave during foreign service out of India" },
  { num: 2018, title: "Officiating Promotion in parent department while in foreign service" },
  { num: "2019, 2020", title: "Reversion from foreign service" },
  { num: 2021, title: "Procedure when an addition is made to regular establishment" },
  { num: 2022, title: "Persons transferred to Railway service from a local fund" },
  { num: 2023, title: "Deputation Allowance and other facilities" },
  { num: 2024, title: "Sanctioning authority for deputation out of India" },
  { num: "2025, 2026", title: "Pay during deputation out of India" },
]

const chapters = [
  { id: 1, title: "General", rules },
  { id: 2, title: "General Conditions of Service", rules: rules2 },
  { id: 3, title: "Termination of Service", rules: rules3 },
  { id: 4, title: "Extension of Service and Re-employment of persons previously in Government Service", rules: rules4 },
  { id: 5, title: "Leave Rules", rules: rules5 },
  { id: 6, title: "Medical Attendance and Treatment Rules", rules: rules6 },
  { id: 7, title: "Law suits against railway servants", rules: rules7 },
  { id: 8, title: "Staff Benefit Fund", rules: rules8 },
  { id: 9, title: "Provident Fund Rules", rules: rules9 },
  { id: 10, title: "State Railway Gratuity Rules", rules: rules10 },
  { id: 11, title: "Joining Time Rules", rules: rules11 },
  { id: 12, title: "Compensation for Injuries and Loss of Personal Property", rules: rules12 },
]

const chaptersVolume2 = [
  { id: 13, title: "RAILWAY FUNDAMENTAL RULES-PAY AND INCREMENT", rules: rules13 },
  { id: 14, title: "DEARNESS AND OTHER COMPENSATORY ALLOWANCES", rules: rules14 },
  { id: 15, title: "OVERTIME AND RUNNING ALLOWANCES", rules: rules15 },
  { id: 16, title: "TRAVELLING ALLOWANCE", rules: rules16 },
  { id: 17, title: "HOUSE RENT AND CITY COMPENSATORY ALLOWANCES", rules: rules17 },
  { id: 18, title: "RETIREMENT", rules: rules18 },
  { id: 19, title: "CONFIDENTIAL REPORTS", rules: rules19 },
  { id: 20, title: "FOREIGN SERVICE AND DEPUTATION", rules: rules20 },
]

const IndianRailwaysEstablishmentCode = () => {
  const [expandedChapter, setExpandedChapter] = useState<number | null>(null)
  const [expandedChapterVolume2, setExpandedChapterVolume2] = useState<number | null>(null)

  const toggleChapter = (chapterId: number) => {
    setExpandedChapter((prev) => (prev === chapterId ? null : chapterId))
  }

  const toggleChapterVolume2 = (chapterId: number) => {
    setExpandedChapterVolume2((prev) => (prev === chapterId ? null : chapterId))
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-indigo-950/20 to-slate-900 relative overflow-hidden text-stone-100">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-400/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 py-12 px-4 sm:px-6 lg:px-8">
        {/* Volume 1 */}
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight bg-linear-to-r from-teal-200 via-emerald-200 to-cyan-200 bg-clip-text text-transparent mb-2 text-center">
              Indian Railways Establishment Code <br/> (Volume 1)
            </h1>
          </header>

          <div className="space-y-3">
            {chapters.map((chapter) => {
              const isExpanded = expandedChapter === chapter.id
              return (
                <div
                  key={chapter.id}
                  className="rounded-2xl border border-teal-500/20 bg-slate-900/60 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-teal-400/40 hover:shadow-lg hover:shadow-teal-500/5"
                >
                  <button
                    type="button"
                    onClick={() => toggleChapter(chapter.id)}
                    className="w-full flex flex-col items-start gap-3 py-5 px-6 text-left hover:bg-slate-800/40 transition-colors duration-200 group"
                  >
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 font-semibold tracking-widest text-xs uppercase">
                      Chapter {chapter.id}
                    </span>
                    <span className="text-slate-100 font-medium text-base sm:text-lg leading-snug">
                      {chapter.title}
                    </span>
                    <span className="self-center mt-1 w-10 h-10 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400 transition-all duration-200 group-hover:bg-teal-500/30">
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </span>
                  </button>

                  {isExpanded && (
                    <div className="border-t border-teal-500/20 bg-slate-950/70 px-5 sm:px-6 py-5 space-y-2">
                      {chapter.rules.map((rule) => (
                        <div
                          key={`${chapter.id}-${String(rule.num)}`}
                          className="group flex items-center gap-4 sm:gap-6 py-4 px-5 sm:px-6 rounded-xl border border-slate-700/50 bg-slate-900/50 backdrop-blur-sm transition-all duration-300 hover:border-teal-500/30 hover:bg-slate-800/60"
                        >
                          <span className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-linear-to-br from-teal-600/30 to-emerald-700/30 border border-teal-500/30 flex items-center justify-center font-bold text-teal-200 text-sm sm:text-base">
                            {rule.num}
                          </span>
                          <span className={`flex-1 ${rule.title ? "text-slate-200" : "text-slate-500 italic"}`}>
                            {rule.title || "—"}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Volume 2 */}
        <div className="max-w-6xl mx-auto mt-24">
          <header className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight bg-linear-to-r from-amber-200 via-orange-200 to-rose-200 bg-clip-text text-transparent mb-2 text-center">
              Indian Railways Establishment Code <br/> (Volume 2)
            </h1>
          </header>

          <div className="space-y-3">
            {chaptersVolume2.map((chapter) => {
              const isExpanded = expandedChapterVolume2 === chapter.id
              return (
                <div
                  key={chapter.id}
                  className="rounded-2xl border border-amber-500/20 bg-slate-900/60 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-amber-400/40 hover:shadow-lg hover:shadow-amber-500/5"
                >
                  <button
                    type="button"
                    onClick={() => toggleChapterVolume2(chapter.id)}
                    className="w-full flex flex-col items-start gap-3 py-5 px-6 text-left hover:bg-slate-800/40 transition-colors duration-200 group"
                  >
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 font-semibold tracking-widest text-xs uppercase">
                      Chapter {chapter.id}
                    </span>
                    <span className="text-slate-100 font-medium text-base sm:text-lg leading-snug">
                      {chapter.title}
                    </span>
                    <span className="self-center mt-1 w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 transition-all duration-200 group-hover:bg-amber-500/30">
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </span>
                  </button>

                  {isExpanded && (
                    <div className="border-t border-amber-500/20 bg-slate-950/70 px-5 sm:px-6 py-5 space-y-2">
                      {chapter.rules.map((rule) => (
                        <div
                          key={`v2-${chapter.id}-${String(rule.num)}`}
                          className="group flex items-center gap-4 sm:gap-6 py-4 px-5 sm:px-6 rounded-xl border border-slate-700/50 bg-slate-900/50 backdrop-blur-sm transition-all duration-300 hover:border-amber-500/30 hover:bg-slate-800/60"
                        >
                          <span className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-linear-to-br from-amber-600/30 to-orange-700/30 border border-amber-500/30 flex items-center justify-center font-bold text-amber-200 text-sm sm:text-base">
                            {rule.num}
                          </span>
                          <span className={`flex-1 ${rule.title ? "text-slate-200" : "text-slate-500 italic"}`}>
                            {rule.title || "—"}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndianRailwaysEstablishmentCode

