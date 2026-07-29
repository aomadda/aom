"use client"

import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const sectionARules = [
  { num: 101, title: "General" },
  { num: 102, title: "Monitoring/Co-ordination of Probationary Training" },
  { num: 103, title: "Schedule of Probationary Training" },
  { num: 104, title: "Maintenance of Dairy etc. by Probationers" },
  { num: 105, title: "Confirmation after Probationary Training" },
  { num: 106, title: "Determination of Seniority of Group 'A' Probationers of Different Services in Junior Scale after their Confirmation" },
  { num: 107, title: "Departmental Examinations" },
  { num: 108, title: "Number of chances of Passing Institutional or Departmental Examinations" },
  { num: 109, title: "Minimum Percentage of Pass Marks in the Examination Prescribed after Completion of Institutional Extension of Probationer Period" },
  { num: 110, title: "Extension of Probationary Period" },
]

const sectionBRules = [
  { num: 101, title: "Extent of application" },
  { num: 102, title: "Recruitment" },
  { num: 103, title: "Definitions" },
  { num: 104, title: "Period of Probation" },
  { num: 105, title: "Health Certificates" },
  { num: 106, title: "Special representation of certain communities" },
  { num: 107, title: "Persons having more than one wife or husband" },
  { num: 108, title: "Knowledge of Hindi" },
  { num: 109, title: "Method of making appointments" },
  { num: 110, title: "Advertisements" },
  { num: 111, title: "Applications for employment" },
  { num: 112, title: "The Committee for conducting interviews" },
  { num: 113, title: "The names of successful candidates" },
  { num: 114, title: "DELETED" },
  { num: 115, title: "Relaxation of the age limit" },
  { num: 116, title: "Employment of physically handicapped persons" },
  { num: 117, title: "The position indicated regarding normalchannels of promotion" },
  { num: 118, title: "Refresher and promotion courses" },
  { num: 119, title: "Security deposits by Apprentices/Trainees" },
  { num: 120, title: "Stipend" },
  { num: 121, title: "Recognised Educational and other Qualifications" },
  { num: 122, title: "The Posts in the category of Station Master" },
  { num: 123, title: "The post in the category of Traffic Signallers" },
  { num: 124, title: "The posts in the category of Goods Guards" },
  { num: 125, title: "Section Controller" },
  { num: 126, title: "The posts in the category of Train Clerks" },
  { num: "126-A", title: "The post in the category of Switchmen" },
  { num: 127, title: "The posts in the category of Ticket Collectors" },
  { num: 128, title: "The posts in the category of Commercial Clerks" },
  { num: 129, title: "The posts in the category of Enquiry-cum-Reservation Clerks (ECRC)" },
  { num: 130, title: "25% of the posts in the categories of Commercial Apprentices" },
  { num: 131, title: "The posts in the category of Law Assistants" },
  { num: 132, title: "The post in the category of Catering Supervisor Grade III" },
  { num: 133, title: "The post in the category of Catering supervisor Grade I/Catering Inspector Grade-II" },
  { num: 134, title: "Direct recruitment of suitable hands in the category of Assistant Cooks" },
  { num: 135, title: "The post in the category of Senior Cook" },
  { num: 136, title: "DELETED" },
  { num: 137, title: "The posts in the category of Assistant Loco Pilot (Diesel/Electric)" },
  { num: 138, title: "DELETED" },
  { num: 139, title: "DELETED" },
  { num: 140, title: "DRIVERS & LOCO RUNNING SUPERVISISORS" },
  { num: 141, title: "APPRENTICE MECHANICS" },
  { num: 142, title: "The posts in the category of Train Examiners" },
  { num: 143, title: "The posts in the category of Supervisor (Permanent Way)" },
  { num: 144, title: "The post in the category of Permanent Way Inspector Grade III" },
  { num: 145, title: "The post in the category of Inspector of Works Grade III" },
  { num: 146, title: "The posts in the category of Bridge Inspector Grade III" },
  { num: "146A", title: "The posts in the category of Jr. Engineer (Track Machines) Gr. II" },
  { num: 147, title: "The posts in the category of Signal Inspectors Grade III" },
  { num: 148, title: "The posts in the category of Telecommunication Inspector Grade III" },
  { num: 149, title: "The posts in the category of Electrical Signaller Maintainer Grade III" },
  { num: 150, title: "The posts in the Category of Mechanical Signal Maintainer Grade III" },
  { num: 151, title: "TELECOMMUNICATION MAINTAINER GRADE III; AND WIRELESS MAINTAINER GRADE III; AND TELECOMMUNICATION MAINTAINER (LINE)" },
  { num: 152, title: "The posts in the category of Telephone Operators" },
  { num: 153, title: "The posts in the category of Assistant Draftsmen" },
  { num: 154, title: "The posts in the category of Draftsmen" },
  { num: 155, title: "The posts in the category of Draftsmen" },
  { num: 156, title: "The posts in the grade of DRAFTSMEN IN SIGNAL & TELECOMMUNICATION DEPARTMENT" },
  { num: 157, title: "The posts in the grade of Depot Store Keeper Gr. III" },
  { num: 158, title: "The rules regarding recruitment/promotion of staff in Printing Presses" },
  { num: 159, title: "The posts in the category of Technician Grade-III (SKILLED ARTISANS)" },
  { num: 160, title: "The posts in the grade of Staff Nurses" },
  { num: 161, title: "The posts in the category of Physiotherapist Grade II" },
  { num: 162, title: "The posts in the grade of Pharmacist Gr.III" },
  { num: 163, title: "The vacancies in the category of Health and Malaria Inspectors Gr. III" },
  { num: 164, title: "The posts in the grade of Radiographer Grade III" },
  { num: 165, title: "The posts of Lab. Assistant Grade-II" },
  { num: 166, title: "Posts in the category of Dietician" },
  { num: 167, title: "DELETED" },
  { num: "167A", title: "The posts in the category of Field Workers (Male/Female)" },
  { num: "167 B", title: "The posts of Health Visitor (Multipurpose)" },
  { num: "167 C", title: "The vacancies in the category of Dental Hygienist" },
  { num: "167 D", title: "The post of Audiologist and Speech Therapist" },
  { num: 168, title: "The posts in the grade of 'Laboratory Assistant, Grade-III'" },
  { num: "168(A)", title: "Posts in the category of Scientific Assistant" },
  { num: 169, title: "The posts in the category of Shroffs" },
  { num: 170, title: "The posts in the category of JUNIOR CASHIER" },
  { num: 171, title: "The posts in the category of Accounts Clerks" },
  { num: 172, title: "The posts in the category of Finger Print Examiners" },
  { num: 173, title: "The posts in the category of Data Entry Operator" },
  { num: 174, title: "The posts in the category of Office Clerks" },
  { num: 175, title: "The posts in the category of Typist" },
  { num: "176 (A)", title: "The posts in the category of Stenographers (Hindi/English)" },
  { num: "176 (B)", title: "The posts in the category of Stenographers (English)" },
  { num: 177, title: "The posts in the category of Junior Translator (OFFICIAL LANGUAGE DEPARTMENT-HINDI ASSISTANTS)" },
  { num: 178, title: "Recruitment of teachers in the Railway schools" },
  { num: "178-A", title: "Data Entry Operators" },
  { num: "178B", title: "The post of Public prosecutor" },
  { num: 179, title: "The following procedure shall apply in respect of recruitment of Group D railway servants" },
  { num: 180, title: "Transportation (Traffic) and Commercial Department" },
  { num: 181, title: "Civil Engineering Department" },
  { num: 182, title: "Medical Department" },
  { num: 183, title: "Signal and Telecommunication Engineering Department" },
  { num: 184, title: "Mechanical Engineering Department" },
  { num: 185, title: "Electrical Engineering Department" },
  { num: 186, title: "Promotion of Safaiwalas or Sanitary cleaners in other Departments" },
  { num: 187, title: "Promotion to skilled categories" },
  { num: 188, title: "Promotion to lower grades in Group 'C'" },
  { num: 189, title: "Promotion to higher grades in Group 'C'" },
  { num: "189-A", title: "Promotions of Persons with Disability" },
]

const chapter2SectionARules = [
  { num: 201, title: "PROMOTION OF GROUP 'B' POSTS" },
  { num: 202, title: "Composition of Selection Committee" },
  { num: 203, title: "Conditions of eligibility" },
  { num: 204, title: "Selection procedure" },
  { num: 205, title: "Currency of Panel" },
  { num: 206, title: "Consideration of Employees on deputation" },
  { num: 207, title: "SUPPLEMENTARY-SELECTION" },
  { num: 208, title: "The answer papers of the written examination held for promotion to Group 'B' posts" },
  { num: 209, title: "Detailed instructions issued from time to time concerning reservation in favor of SCs/STs" },
]

const chapter2SectionBRules = [
  { num: 210, title: "Application" },
  { num: 211, title: "Definitions" },
  { num: 212, title: "Declaration of posts as 'selection' or 'non-selection posts'" },
  { num: 213, title: "Promotion" },
  { num: 214, title: "Non-selection posts" },
  { num: 215, title: "Selection Post" },
  { num: 216, title: "In regard to selection posts" },
  { num: "216A", title: "Ad hoc Promotions" },
  { num: 217, title: "Selection Boards" },
  { num: 218, title: "Constitution of Selection Boards" },
  { num: 219, title: "Procedure to be adopted by Selection Board" },
  { num: 220, title: "Currency of panels" },
  { num: 221, title: "RETENTION OF NAME ON THE PANEL TO BE SUBJECT TO CONTINUED SUITABILITY" },
  { num: 222, title: "Automatic empanelment of staff in higher grade selection and non-selection posts" },
  { num: 223, title: "Supplementary Selection/Suitability Test" },
  { num: 224, title: "Refusal of Promotion" },
  { num: 225, title: "Trade Test for Artisan Categories" },
  { num: 226, title: "Exemption in Suitability Trade Tests in the Open Line on the basis of Trade/Suitability Tests passed while in Railway Electrification Project or Construction Projects" },
  { num: 227, title: "Promotional Courses" },
  { num: 228, title: "Erroneous Promotions" },
  { num: 229, title: "Diversion of unfilled vacancies to LDCE/GDCE or DR Quota" },
]

const chapter3SectionARules = [
  { num: 301, title: "General" },
  { num: "302-308", title: "Seniority in initial recruitment grades" },
  { num: 309, title: "Seniority on promotion" },
  { num: "310-311", title: "Mutual exchange" },
  { num: 312, title: "Transfer on request" },
  { num: 313, title: "Medically unfitted Railway servants" },
  { num: "313 A", title: "Assignment of seniority to redeployed surplus staff" },
  { num: 314, title: "Seniority where date of appointment to a grade is same" },
  { num: "315-316", title: "Departmental Examination/Trade Test" },
  { num: 317, title: "Seniority for promotion as Section Officer (A/cs) Inspector of Station (A/cs)/ Inspector of Stores (A/cs)" },
  { num: 318, title: "Seniority of Accounts Clerk on promotion as Junior Accounts Asstt. in Accounts Department" },
  { num: 319, title: "Seniority on promotion to non-selection posts" },
  { num: 320, title: "Relative seniority of employees in an intermediate grade" },
  { num: 321, title: "Permission to railway servants to peruse seniority list" },
  { num: 322, title: "Effect of reduction in pay or grade" },
  { num: 323, title: "Staff directly recruited on the Locomotive Components Works" },
  { num: 324, title: "Staff directly recruited in D. L. W." },
  { num: 325, title: "Staff transferred from Railways or Production Units." },
  { num: 326, title: "Staff transferred from Construction Projects" },
]

const chapter3SectionBRules = [
  { num: "327-341", title: "General" },
]

const chapter4Rules = [
  { num: 401, title: "Civil Engineering Deptt" },
  { num: 402, title: "Mechanical Engineering Department" },
  { num: 403, title: "Electrical Department" },
  { num: 404, title: "Signal & Telecom Department" },
  { num: 405, title: "Transportation (Traffic) and Commercial Deptt." },
  { num: 406, title: "Loco staff" },
  { num: 407, title: "Accounts Deptt." },
  { num: 408, title: "Clerical staff (other than Accounts)" },
  { num: 409, title: "General Administration Deptt." },
  { num: 410, title: "Stores Deptt." },
  { num: 411, title: "Printing Press Staff" },
  { num: 412, title: "Medical Deptt." },
  { num: 413, title: "Security Deptt." },
  { num: 414, title: "Technical Training Schools and Basic Training Centres" },
  { num: 415, title: "Drawing office Staff (All Deptts.)" },
  { num: 416, title: "misc. categories" },
]

const chapter5Rules = [
  { num: 501, title: "General" },
  { num: 502, title: "Typists" },
  { num: 503, title: "Traffic Controller." },
  { num: 504, title: "Office Clerks" },
  { num: 505, title: "Clerks of Accounts Department" },
  { num: 506, title: "Commercial Clerks" },
  { num: 507, title: "Train Clerks." },
  { num: 508, title: "Signallers." },
  { num: 509, title: "ASM /S M." },
  { num: 510, title: "Station Masters" },
  { num: 511, title: "Ticket Collectors and TTE." },
  { num: 512, title: "Train Examiners" },
  { num: 513, title: "Permanent Way Inspectors." },
  { num: 514, title: "Sanitary/Health Inspector" },
  { num: 515, title: "Pharmacists." },
  { num: 516, title: "Chargeman Mechanical Department" },
  { num: 517, title: "Cashiers in Accounts Department." },
  { num: 518, title: "Record lifters/Record Sorters etc" },
  { num: 519, title: "Daftries" },
  { num: 520, title: "Wireless operators." },
  { num: 521, title: "Shroff in Cash and Pay Office" },
  { num: 522, title: "Hospital Attendants and Ayas" },
  { num: 523, title: "Dressers in Medical Department" },
  { num: 524, title: "Gangman" },
  { num: 525, title: "Skilled Workshop Staff" },
  { num: 526, title: "Welfare Inspectors" },
  { num: 527, title: "R. P. R" },
  { num: 528, title: "Conductors" },
  { num: 529, title: "Staff on the Deck side" },
]

const chapter6Rules = [
  { num: "601-604", title: "Pay, Increments and Efficiency Bar" },
  { num: "605-609", title: "Drawl of Increment in Time Scale of Pay" },
  { num: 610, title: "Annual Increments to directly recruited Junior Accounts Assistants in A/c s Department" },
  { num: "611-629", title: "Efficiency Bar Gazetted Railway Servants" },
  { num: 630, title: "Procedure for holding Efficiency Bar tests" },
  { num: "631-634", title: "Authority competent to hold Efficiency Bar Test" },
  { num: "635-637", title: "Advance Increments" },
  { num: 638, title: "Names of Professional Institutions" },
  { num: 639, title: "Awards to be granted" },
  { num: 640, title: "General conditions for grant of incentives" },
  { num: "641-644", title: "Categories and circumstances for grant of incentives" },
  { num: "645-649", title: "Grant of dual charge allowance" },
]

const chapter7Rules = [
  { num: "701-703", title: "General" },
  { num: 704, title: "Break down Allowance" },
  { num: 705, title: "Out-turn allowance" },
  { num: 706, title: "Washing allowance" },
  { num: 707, title: "Construction/Survey allowance to open line employees" },
  { num: 708, title: "Project allowance" },
  { num: 709, title: "Conveyance hire" },
  { num: 710, title: "Traveling Allowance in respect of journeys to Airport" },
  { num: "711-712", title: "Other allowances" },
]

const chapter8Rules = [
  { num: 801, title: "Title" },
  { num: 802, title: "Application" },
  { num: 803, title: "Definition" },
  { num: 804, title: "Scales of Allowance" },
  { num: 805, title: "Allowance to contract officers" },
  { num: 806, title: "Allowance to officers on ad-hoc rate of pay" },
  { num: 807, title: "Allowance to Military Officers" },
  { num: 808, title: "Allowance on varying rate of pay" },
  { num: 809, title: "Allowance on joining and leaving service" },
  { num: 810, title: "Allowance during foreign service" },
  { num: 811, title: "Allowance during deputation out of India" },
  { num: 812, title: "Allowance during suspension" },
  { num: "813-814", title: "Allowance during leave and joining time" },
  { num: 815, title: "Allowance during unpaid Holidays" },
  { num: 816, title: "Allowances to re-employed persons" },
  { num: 817, title: "Liability towards Income Tax" },
  { num: 818, title: "Classification of the allowances." },
  { num: 819, title: "Dearness Allowance to National of Nepal and Bhutan" },
]

const chapter9Rules = [
  { num: "901-902", title: "Running Allowance to staff for performing running duties" },
  { num: 903, title: "Pay element in running allowance" },
  { num: 904, title: "Dearness Allowance on pay element of running allowance" },
  { num: "905-910", title: "Types of allowances admissible to running staff" },
  { num: 911, title: "Out station allowance" },
  { num: 912, title: "Accident allowance" },
  { num: 913, title: "Officiating allowance" },
  { num: 914, title: "Minimum guaranteed Kilometerage allowance" },
  { num: 915, title: "Incentive scheme for through Goods Trains." },
  { num: "916-919", title: "Compilation of Kilometerage for slow moving trains" },
  { num: 920, title: "Shunting duty allowance." },
  { num: 921, title: "Waiting duty allowance" },
  { num: 922, title: "Ghat Sections" },
  { num: 923, title: "High speed trains" },
  { num: "924-930", title: "Reckoning of running allowance and pay" },
]

const chapter10Rules = [
  { num: "1001-1012", title: "Arrear Claims of railway servants" },
  { num: "1013-1019", title: "Recovery of over-payment" },
  { num: "1020-1030", title: "Payment of settlement dues from station earning" },
]

const chapter11Rules = [
  { num: 1101, title: "Rules" },
  { num: "1102-1103", title: "Purposes for which advances can be sanctioned" },
  { num: 1104, title: "General conditions for grant of Advances for Motor Vehicles" },
  { num: 1105, title: "Purchase of Motor Car" },
  { num: 1106, title: "Purchase of Motor Cycle/Scooter, Moped etc" },
  { num: 1107, title: "Cycle Advance" },
  { num: 1108, title: "Other conditions for purchase of conveyance" },
  { num: "1109-1112", title: "Advances on proceedings on tour" },
  { num: "1113-1118", title: "Advances for on transfer" },
  { num: 1119, title: "Advances for deputation abroad" },
  { num: "1120-1122", title: "Advances on return from leave or deputation out of India" },
  { num: 1123, title: "Advances under special circumstances" },
  { num: 1124, title: "Advances for treatment of Cancer" },
  { num: "1125-1127", title: "Advances for festivals" },
  { num: 1128, title: "Advances for law-suits" },
  { num: 1129, title: "Advances for warm clothing" },
  { num: 1130, title: "Advances for purchase of outfit for school going children" },
  { num: 1131, title: "Advances for purchase of Table Fans" },
  { num: 1132, title: "House Building Advance" },
]

const chapter12Rules = [
  { num: "1201-1205", title: "Change in names" },
]

const chapter13Rules = [
  { num: 1301, title: "General" },
  { num: "1302-1303", title: "Clarification" },
  { num: 1304, title: "Disabled Medically decategorised staff to be absorbed in posts they can adequately fill" },
  { num: 1305, title: "Deleted" },
  { num: 1306, title: "Steps to be taken for finding alternative employment" },
  { num: 1307, title: "Element of Running Allowance to be reckoned while finding alternative post to disabled medically decategorised running staff" },
  { num: 1308, title: "Fixation of Pay" },
  { num: 1309, title: "Benefit of past service to be allowed" },
  { num: 1310, title: "Fixation of seniority of disabled/medically decategorised staff absorbed in alternative employment" },
  { num: 1311, title: "Other Type of Cases" },
]

const chapter14Rules = [
  { num: 1401, title: "Number of opportunities" },
  { num: 1402, title: "Authorities competent to forward applications" },
  { num: 1403, title: "Application for employment in a private concern" },
  { num: 1404, title: "Retention of lien" },
  { num: 1405, title: "Continuity of service on technical resignation" },
  { num: 1406, title: "Forwarding of applications for posts under State Govts" },
  { num: "1406 A", title: "Forwarding of applications for posts advertised by Central/Public Sector Undertakings/Cental Autonomous Bodies." },
  { num: 1407, title: "Permission for applying for posts advertised by International Organisations/Foreign Governments" },
  { num: 1408, title: "Forwarding of applications to U.P.S.C." },
  { num: 1409, title: "Issue of No objection Certificate" },
  { num: 1410, title: "Refund of cost of training" },
  { num: 1411, title: "Transfer in Public interest" },
  { num: 1412, title: "Forwarding of application of railway servant when conduct is under investigation" },
]

const chapter15Rules = [
  { num: 1501, title: "Temporary railway servant" },
  { num: 1502, title: "Termination of service and period of notice" },
  { num: "1503-1504", title: "Pay & Allowances" },
  { num: 1505, title: "Educational Assistance" },
  { num: 1506, title: "Medical Attendance" },
  { num: 1507, title: "Leave Rules" },
  { num: 1508, title: "Allotment of residence and recovery of rent" },
  { num: 1509, title: "Passes" },
  { num: 1510, title: "Advances" },
  { num: 1511, title: "Provident Fund and Gratuity" },
  { num: 1512, title: "Substitute Definition" },
  { num: 1513, title: "Circumstances under which substitutes can be recruited" },
  { num: 1514, title: "Emoluments payable to substitutes" },
  { num: 1515, title: "Rights and Privileges admissible to substitutes" },
  { num: 1516, title: "Break in service" },
]

const chapter16Rules = [
  { num: 1601, title: "Holidays and Special Casual Leaves" },
]

const chapter17Rules = [
  { num: 1701, title: "When staff quarters may be provided." },
  { num: 1702, title: "Liability to pay rent" },
  { num: 1703, title: "Exceptions" },
  { num: 1704, title: "" },
  { num: 1705, title: "Classification of quarters" },
  { num: 1706, title: "Accommodation for Group 'A' & 'B' officers." },
  { num: 1707, title: "" },
  { num: 1708, title: "" },
  { num: 1709, title: "Standard Rent." },
  { num: 1710, title: "What the terms \"Emoluments\" means in the context of rent rules." },
  { num: 1711, title: "Recovery of rent" },
  { num: 1712, title: "Recovery of rent in the case of Joint occupation of quarters." },
  { num: 1713, title: "Occupation of higher or lower type of quarter." },
  { num: 1714, title: "Responsibility of Railway servants for payment of rent." },
  { num: 1715, title: "Levy of water charges" },
  { num: 1716, title: "" },
  { num: 1717, title: "" },
  { num: 1718, title: "Payment of taxes" },
  { num: 1719, title: "" },
  { num: 1720, title: "" },
  { num: 1721, title: "" },
  { num: 1722, title: "" },
  { num: 1723, title: "" },
  { num: 1724, title: "" },
  { num: 1725, title: "Remission of rent and waived of recoveries." },
]

const chapter18Rules = [
  { num: 1801, title: "" },
  { num: 1802, title: "" },
  { num: 1803, title: "" },
  { num: 1804, title: "" },
  { num: 1805, title: "" },
  { num: 1806, title: "Extent of deduction." },
  { num: 1807, title: "Procedure to be followed in Executive offices" },
  { num: 1808, title: "Court attachment against railway servants on leave out of India." },
  { num: 1809, title: "Procedure in the case of Judgment." },
]

const chapter19Rules = [
  { num: 1901, title: "" },
  { num: 1902, title: "General" },
  { num: 1903, title: "Recruitment" },
  { num: 1904, title: "Training" },
  { num: 1905, title: "Stipend" },
  { num: 1906, title: "Allowance" },
  { num: 1907, title: "Travelling Allowance" },
  { num: 1908, title: "Leave" },
  { num: 1909, title: "Medical Attendance" },
  { num: 1910, title: "State Railway provident fund" },
  { num: 1911, title: "Agreement" },
  { num: 1912, title: "Date of posting of apprentices" },
  { num: 1913, title: "Termination of Apprenticeship" },
  { num: 1914, title: "Employment" },
  { num: 1915, title: "Applicability of provision of other Acts" },
]

const chapter20Rules = [
  { num: 2001, title: "Definition" },
  { num: 2002, title: "Entitlement and privileges admissible" },
  { num: 2003, title: "Break in service" },
  { num: 2004, title: "Notice of termination of service" },
  { num: 2005, title: "Entitlements and privilege admissible to casual labour who are treated as temporary." },
  { num: 2006, title: "Absorption of Casual Labour in regular vacancies" },
  { num: 2007, title: "Employment of Casual labour in skilled categories" },
]

const chapter21Rules = [
  { num: 2101, title: "" },
  { num: 2102, title: "" },
  { num: 2103, title: "" },
  { num: 2104, title: "" },
  { num: 2105, title: "" },
  { num: 2106, title: "" },
  { num: 2107, title: "" },
  { num: 2108, title: "" },
  { num: 2109, title: "" },
  { num: 2110, title: "" },
  { num: 2111, title: "" },
  { num: 2112, title: "" },
  { num: 2113, title: "Rules regulating the use of Staff Car" },
]

const chapter22Rules = [
  { num: 2201, title: "Policy regarding railway schools" },
  { num: 2202, title: "Authority Competent to incur expenditure" },
  { num: 2203, title: "Grant- in-Aid to non-Railway Schools" },
  { num: 2204, title: "" },
  { num: 2205, title: "Educational Assistance" },
  { num: 2206, title: "Scholarship for technical education" },
  { num: 2207, title: "Uniforms for Children in Schools." },
  { num: 2208, title: "" },
  { num: 2209, title: "" },
  { num: 2210, title: "Incidence of cost of maintenance and upkeep of Institute." },
  { num: 2211, title: "Accommodation for class IV staff of institutes" },
  { num: 2212, title: "Organisation of institutes" },
  { num: 2213, title: "Memberships" },
  { num: 2214, title: "Sports Recreation Clubs and Associations" },
  { num: 2215, title: "Swimming Pools" },
  { num: 2216, title: "Children's Park, sewing and Knitting Centres" },
  { num: 2217, title: "Rules" },
  { num: 2218, title: "Mobile Libraries" },
  { num: 2219, title: "" },
  { num: 2220, title: "" },
  { num: 2221, title: "" },
  { num: 2222, title: "" },
  { num: 2223, title: "" },
  { num: 2224, title: "" },
  { num: 2225, title: "Holiday Homes" },
  { num: 2226, title: "Convalescent Homes" },
  { num: 2227, title: "General" },
  { num: "2227A", title: "Appointment of Scouts against cultural quota" },
  { num: 2228, title: "Special leave and passes TA/DA" },
  { num: 2229, title: "Provision of canteens as a statutory obligation" },
  { num: 2230, title: "Provision of canteens other than as a statutory obligation" },
  { num: 2231, title: "Principles governing the setting up of canteens" },
  { num: 2232, title: "Canteens provided under the statute" },
  { num: 2233, title: "Canteens provided other than under the statute." },
  { num: 2234, title: "Incidence of cost" },
  { num: 2235, title: "Periodical check" },
  { num: 2236, title: "Improvements in the working of Canteens" },
  { num: 2237, title: "Quality and cost control" },
  { num: 2238, title: "Employee's provident fund" },
  { num: 2239, title: "Handicraft Centres" },
  { num: 2240, title: "Vocational Training Centres" },
  { num: 2241, title: "Allotment of Accommodation to Social Welfare Centres, Vocational Training Centres and Homeopathic dispensaries" },
]

const chapter24Rules = [
  { num: 2401, title: "" },
  { num: 2402, title: "" },
  { num: 2403, title: "" },
  { num: 2404, title: "General Guide Lines" },
  { num: 2405, title: "Educational Institutions" },
  { num: 2406, title: "Medical Institutions" },
  { num: 2407, title: "Railway Institutes and Clubs" },
  { num: 2408, title: "Railwaymen's Consumer Co-operative Societies" },
  { num: 2409, title: "" },
  { num: 2410, title: "Other Local Bodies" },
]

const chapter25Rules = [
  { num: 2501, title: "Government is prepared to accord official recognition to associations of its gazetted railway servants which comply with the conditions set out below." },
  { num: 2502, title: "The association must ordinarily consist of a distinct class of Gazetted Railway servants and must not be formed on the basis of any caste, tribe or religious denomination or of any group within or section of such caste, tribe or religious denomination." },
  { num: 2503, title: "Every gazetted Railway servant of the same class must be eligible for membership of the association." },
  { num: 2504, title: "No persons who are not gazetted railway servants of the class concerned shall be elected as members or office bearers of the Association." },
  { num: 2505, title: "Representations from such associations, whether made orally by deputation, or presented in writing may be received by Government officers notwithstanding anything contained in the rules relating to the submission of petitions by railway servants." },
  { num: 2506, title: "Recognition is accorded for the purpose of enabling the gazetted railway servants to communicate their needs to Government or to Government officers, and it may be withdrawn by Government if an association adopts other methods of ventilating those needs." },
  { num: 2507, title: "Government may require the regular submission for its information, of copies of the rules of the association and the annual statement of its accounts and of lists of its members" },
  { num: 2508, title: "Government may specify the channel through which representations from the association shall be submitted and the authority by whom deputations may be received." },
  { num: 2509, title: "The officer, who is empowered to grant leave to a gazetted railway servant will, so far as is possible, grant casual leave to a gazetted railway servant who is a representative of a recognised association to attend duly constituted meetings of the association. The grant of such leave will be subject to the exigencies of the service, of which the officer in question shall be the sole judge." },
  { num: 2510, title: "Government is prepared to accord official recognition to associations of its industrial employees. The grant and continuance of recognition rests in the discretion of Government, but recognition when granted will not be withdrawn without due cause and without giving an opportunity, to the association to show cause against such withdrawal. NOTE.—The term \"industrial employees\" includes railway servants." },
  { num: 2511, title: "Notwithstanding anything contained in the rules relating to the submission of petitions by railway servants, representations from recognised associations whether made orally by deputation, or presented in writing may be received by Government officers, subject to the observance of Rule 2506 and to such further restrictions as may be imposed by a department of Government in respect of representations which raise no question of common interest to the class represented by the association." },
  { num: 2512, title: "Recognition will not ordinarily be granted or continued to any association unless it complies with the following conditions" },
  { num: 2513, title: "Government may require the regular submission of copies of the rules of any recognised association, of its annual accounts and of its list of members." },
  { num: 2514, title: "No recognised association shall maintain a political fund except with the general or special sanction of Government, and subject to such conditions as Government may impose." },
  { num: 2515, title: "Government may specify the channel through which representations from recognised associations shall be submitted and the authority by whom deputation may be received." },
  { num: 2516, title: "The officer who is empowered to grant leave to a railway servant will, so far as is possible, grant casual leave to a railway servant who is a representative of a recognised association to attend duly constituted meetings of the association. The grant of such leave will be subject to the exigencies of the service, or which the officer in question shall be the sole judge. Note.—The Unions and their Branches should not correspond with the Railway Board direct and such references should be appropriately addressed to the authorities of the Railways concerned" },
  { num: 2517, title: "Government may delegate any of its powers under the preceding rules to any authority subordinate to it." },
  { num: 2518, title: "These rules supersede all previous rule, in respect of all associations to which they are applicable." },
  { num: "Part C", title: "Conditions precedent to the recognition of a Union by a Railway Administration" },
]

const chapter26Rules = [
  { num: 2601, title: "Object" },
  { num: 2602, title: "Power" },
  { num: 2603, title: "Composition" },
  { num: 2604, title: "Eligibility for election" },
  { num: 2605, title: "Election" },
  { num: 2606, title: "Meetings" },
  { num: 2607, title: "" },
  { num: 2608, title: "Agenda" },
  { num: 2609, title: "Absence from meetings" },
  { num: 2610, title: "Filling of vacancies" },
  { num: 2611, title: "" },
  { num: 2612, title: "" },
  { num: 2613, title: "" },
  { num: "2613A", title: "Minutes Subsidiary Rules" },
  { num: 2614, title: "" },
  { num: 2615, title: "" },
  { num: 2616, title: "Negotiating machinery for dealing with disputes between Railway Labour and Railway Administration." },
]

const chapters = [
  { id: "1A", label: "Chapter I — Section A", title: "RECRUITMENT, TRAINING, CONFIRMATION AND RE-EMPLOYMENT", rules: sectionARules },
  { id: "1B", label: "Chapter I — Section B", title: "RULES FOR THE RECRUITMENT AND TRAINING OF GROUP 'C AND GROUP 'D' AND WORKSHOP STAFF", rules: sectionBRules },
  { id: "2A", label: "Chapter II — Section A", title: "RULES GOVERNING PROMOTION OF SUBORDINATE STAFF", rules: chapter2SectionARules },
  { id: "2B", label: "Chapter II — Section B", title: "SECTION B", rules: chapter2SectionBRules },
  { id: "3A", label: "Chapter III — Section A (NON-GAZETTED)", title: "Rules regulating seniority of Railway servants", rules: chapter3SectionARules },
  { id: "3B", label: "Chapter III — Section B (GAZETTED)", title: "SECTION - B : GAZETTED", rules: chapter3SectionBRules },
  { id: "4", label: "Chapter IV", title: "Scales of Pay applicable to principal categories of non-gazette staff", rules: chapter4Rules },
  { id: "5", label: "Chapter V", title: "Percentage of Posts fixed for various categories", rules: chapter5Rules },
  { id: "6", label: "Chapter VI", title: "Pay Increments and Efficiency Bars", rules: chapter6Rules },
  { id: "7", label: "Chapter VII", title: "Compensatory and other Allowances", rules: chapter7Rules },
  { id: "8", label: "Chapter VIII", title: "Dearness Allowance", rules: chapter8Rules },
  { id: "9", label: "Chapter IX", title: "Running Allowance Rules", rules: chapter9Rules },
  { id: "10", label: "Chapter X", title: "Arrears claims and recoveries of overpayment", rules: chapter10Rules },
  { id: "11", label: "Chapter XI", title: "Advances", rules: chapter11Rules },
  { id: "12", label: "Chapter XII", title: "Change in names", rules: chapter12Rules },
  { id: "13", label: "Chapter XIII", title: "Absorption of medically in capacities staff in alternative employment", rules: chapter13Rules },
  { id: "14", label: "Chapter XIV", title: "Forwarding of Applications from serving Railway employees for posts outside Railways", rules: chapter14Rules },
  { id: "15", label: "Chapter XV", title: "Terms and Conditions applicable to Railway Servants and substitutes in temporary service", rules: chapter15Rules },
  { id: "16", label: "Chapter XVI", title: "Holidays and Special Casual Leaves", rules: chapter16Rules },
]

const chaptersVolume2 = [
  { id: 17, label: "Chapter XVII", title: "Railway quarters and Recovery of rent", rules: chapter17Rules },
  { id: 18, label: "Chapter XVIII", title: "Attachments of pay and Allowances for Debt", rules: chapter18Rules },
  { id: 19, label: "Chapter XIX", title: "Apprentices", rules: chapter19Rules },
  { id: 20, label: "Chapter XX", title: "Casual labour", rules: chapter20Rules },
  { id: 21, label: "Chapter XXI", title: "Use of Staff Cars", rules: chapter21Rules },
  { id: 22, label: "Chapter XXII", title: "Staff Welfare", rules: chapter22Rules },
  { id: 24, label: "Chapter XXIV", title: "Grants-in-Aid", rules: chapter24Rules },
  { id: 25, label: "Chapter XXV", title: "Rules for the Recognition of Service Associations of Railway Servants", rules: chapter25Rules },
  { id: 26, label: "Chapter XXVI", title: "Staff Councils and Negotiating Machinery", rules: chapter26Rules },
]

const IndianRailwaysEstablishmentManual = () => {
  const [expandedChapter, setExpandedChapter] = useState<string | null>(null)
  const [expandedChapterVolume2, setExpandedChapterVolume2] = useState<number | null>(null)

  const toggleChapter = (chapterId: string) => {
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
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight bg-linear-to-r from-teal-200 via-emerald-200 to-cyan-200 bg-clip-text text-transparent mb-2">
              Indian Railways Establishment Manual (Volume 1)
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
                      {chapter.label}
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

        {/* Indian Railways Establishment Manual (Volume 2) */}
        <div className="max-w-6xl mx-auto mt-24">
          <header className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight bg-linear-to-r from-amber-200 via-orange-200 to-rose-200 bg-clip-text text-transparent mb-2">
              Indian Railways Establishment Manual (Volume 2)
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
                      {chapter.label}
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

export default IndianRailwaysEstablishmentManual
